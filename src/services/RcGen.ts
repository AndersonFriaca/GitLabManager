import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import https from "https";
import { provide } from "../config/ioc/ioc";
import TYPES from "../config/ioc/types";
import DtoGen from "../transports/DtoGen";
import { DtoServiceGenResponse } from "../transports/DtoServiceGenResponse";
import BuilderServiceResponseGenerator from "../builders/ServiceResponse/BuilderServiceResponseGenerator";
import BuilderServiceResponse from "../builders/ServiceResponse/BuilderServiceResponse";
import BuilderServiceGenResponse from "../builders/ServiceResponse/BuilderServiceGenResponse";

@provide(TYPES.RcGen)
abstract class RcGen<
  Dto extends DtoGen,
  ServiceResponse extends DtoServiceGenResponse<Dto>
> {
  private _api: AxiosInstance = undefined;
  protected baseUrl: string = undefined;
  protected classToDeserialize: new () => Dto;

  constructor() {
    this.baseUrl = this.defineBaseUrl();
    this.classToDeserialize = this.defineClassToDeserialize();
  }

  protected abstract defineBaseUrl(): string;

  protected abstract defineClassToDeserialize(): new () => Dto;

  protected createAxiosInstance(): void {
    const httpsAgent = this.getHttpsAgent();
    const headers = this.getDefaultHeaders();
    this.api = axios.create({
      baseURL: this.baseUrl,
      httpsAgent,
      headers
    });
    this.api.interceptors.request.use(
      this.defineAxiosRequestInterceptorOnFulfilled(),
      this.defineAxiosRequestInterceptorOnRejected()
    );

    this.api.interceptors.response.use(
      this.defineAxiosResponseInterceptorOnFulfilled(),
      this.defineAxiosResponseInterceptorOnRejected()
    );
  }

  protected getHttpsAgent(): https.Agent {
    return new https.Agent({
      rejectUnauthorized: this.requireValidHttps()
    });
  }

  protected requireValidHttps(): boolean {
    return true;
  }

  protected getDefaultHeaders(): {} {
    return {};
  }

  protected defineAxiosRequestInterceptorOnFulfilled<
    V extends AxiosRequestConfig
  >(): (value: V) => V | Promise<V> {
    return undefined;
  }

  protected defineAxiosRequestInterceptorOnRejected(): (error: any) => any {
    return undefined;
  }

  protected defineAxiosResponseInterceptorOnFulfilled<
    V extends AxiosRequestConfig
  >(): (value: V) => V | Promise<V> {
    return undefined;
  }

  protected defineAxiosResponseInterceptorOnRejected(): (error: any) => any {
    return error => {
      console.log("Response Errror Interceptor");
      if (error.response.status >= 400) {
        throw new Error("Error Interceptor");
      }
    };
  }

  protected get api(): AxiosInstance {
    if (this._api === undefined) {
      this.createAxiosInstance();
    }
    return this._api;
  }

  protected set api(api: AxiosInstance) {
    this._api = api;
  }

  protected createBuilderServiceResponse(
    response: AxiosResponse<Dto | Dto[]>
  ): BuilderServiceResponse<Dto, ServiceResponse> {
    return new BuilderServiceGenResponse(response, this.classToDeserialize);
  }

  protected generateServiceResponse(
    response: AxiosResponse<Dto | Dto[]>
  ): ServiceResponse {
    const generator = new BuilderServiceResponseGenerator<
      Dto,
      ServiceResponse
    >();
    generator.setBuilder(this.createBuilderServiceResponse(response));
    generator.constructServiceResponse();
    return generator.getServiceResponse();
  }

  protected async get(
    url: string,
    options?: AxiosRequestConfig
  ): Promise<ServiceResponse> {
    const response = await this.api.get(url, options);
    return this.generateServiceResponse(response);
  }
}

export default RcGen;
