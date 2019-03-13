import DtoGen from "./DtoGen";
import { AxiosResponse } from "axios";

export interface IServiceResponsePaginate {
  currentPage: number;
  nextPage: number;
  totalPages: number;
  itemsPerPage: number;
}

export class DtoServiceGenResponse<Dto extends DtoGen> extends DtoGen {
  data: Dto[];
  status: number;
  paginate?: IServiceResponsePaginate;
  axiosResponse: AxiosResponse<Dto | Dto[]>;
}
