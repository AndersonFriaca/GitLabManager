import DtoGen from "../../transports/DtoGen";
import { AxiosResponse } from "axios";
import { DtoServiceGenResponse, IServiceResponsePaginate } from "../../transports/DtoServiceGenResponse";

abstract class BuilderServiceResponse<
  Dto extends DtoGen,
  ServiceResponse extends DtoServiceGenResponse<Dto>
> {
  protected dtoServiceResponse: ServiceResponse;
  protected classToDeserialize: new () => Dto;
  protected axiosResponse: AxiosResponse<Dto | Dto[]>;
  protected data: Dto[];
  protected status: number;
  protected paginate: IServiceResponsePaginate;

  constructor(
    axiosResponse: AxiosResponse<Dto | Dto[]>,
    classToDeserialize: new () => Dto
  ) {
    this.axiosResponse = axiosResponse;
    this.classToDeserialize = classToDeserialize;
  }

  public abstract createNewServiceResponse(): this;

  public abstract buildData(): this;

  public abstract buildPaginateObject(): this;

  public abstract buildStatus(): this;

  public abstract buildAdditionals(): this;

  public getServiceResponse(): ServiceResponse {
    return this.dtoServiceResponse;
  }
}

export default BuilderServiceResponse;
