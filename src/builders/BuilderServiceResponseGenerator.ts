import BuilderServiceResponse from "./BuilderServiceResponse";
import DtoGen from "../transports/DtoGen";
import { DtoServiceGenResponse } from "../transports/DtoServiceGenResponse";

export default class BuilderServiceResponseGenerator<
  Dto extends DtoGen,
  ServiceResponse extends DtoServiceGenResponse<Dto>
> {
  private builder: BuilderServiceResponse<Dto, ServiceResponse>;

  public setBuilder(
    builder: BuilderServiceResponse<Dto, ServiceResponse>
  ): void {
    this.builder = builder;
  }

  public constructServiceResponse(): void {
    this.builder
      .createNewServiceResponse()
      .buildData()
      .buildPaginateObject()
      .buildStatus()
      .buildAxiosResponse()
      .buildAdditionals();
  }

  public getServiceResponse(): ServiceResponse {
    return this.builder.getServiceResponse();
  }
}
