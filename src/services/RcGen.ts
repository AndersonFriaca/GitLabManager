import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import https from "https";
import { provide } from "../config/ioc/ioc";
import TYPES from "../config/ioc/types";
import DtoGen from "../transports/DtoGen";
import { DtoServiceGenResponse } from "../transports/DtoServiceGenResponse";
import BuilderServiceResponseGenerator from "../builders/BuilderServiceResponseGenerator";
import BuilderServiceResponse from "../builders/BuilderServiceResponse";
import BuilderServiceGenResponse from "../builders/BuilderServiceGenResponse";

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
    try {
      const response = await this.api.get(url, options);
      return this.generateServiceResponse(response);
    } catch (err) {
      throw err;
    }
  }
}

export default RcGen;
