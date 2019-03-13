import DtoGen from "../transports/DtoGen";
import { DtoServiceGenResponse } from "../transports/DtoServiceGenResponse";
import BuilderServiceResponse from "./BuilderServiceResponse";
import { deserialize } from "json-typescript-mapper";

export default class BuilderServiceGenResponse<
  Dto extends DtoGen,
  ServiceResponse extends DtoServiceGenResponse<Dto>
> extends BuilderServiceResponse<Dto, ServiceResponse> {
  public buildData(): this {
    const listData: Dto[] = [];
    if (this.axiosResponse !== undefined) {
      if (this.axiosResponse.data !== null) {
        if (Array.isArray(this.axiosResponse.data)) {
          for (const data of this.axiosResponse.data) {
            listData.push(deserialize(this.classToDeserialize, data));
          }
        } else {
          listData.push(
            deserialize(this.classToDeserialize, this.axiosResponse.data)
          );
        }
      }
    }
    this.dtoServiceResponse.data = listData;
    return this;
  }

  public buildPaginateObject(): this {
    return this;
  }

  public buildStatus(): this {
    this.dtoServiceResponse.status = this.axiosResponse.status;
    return this;
  }

  public buildAxiosResponse(): this {
    this.dtoServiceResponse.axiosResponse = this.axiosResponse;
    return this;
  }

  public buildAdditionals(): this {
    return this;
  }

  public createNewServiceResponse(): this {
    this.dtoServiceResponse = <ServiceResponse>new DtoServiceGenResponse<Dto>();
    return this;
  }
}
