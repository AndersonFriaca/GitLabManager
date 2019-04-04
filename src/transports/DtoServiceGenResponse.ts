import DtoGen from './DtoGen'
import { AxiosResponse } from 'axios'

export interface IServiceResponsePaginate {
  readonly currentPage: number
  readonly nextPage: number
  readonly totalPages: number
  readonly itemsPerPage: number
}

export class DtoServiceGenResponse<Dto extends DtoGen> extends DtoGen {
  public readonly data: Dto[]
  public readonly status: number
  public readonly paginate?: IServiceResponsePaginate
  public readonly axiosResponse: AxiosResponse<Dto | Dto[]>

  constructor (
    data: Dto[],
    status: number,
    paginate: IServiceResponsePaginate,
    axiosResponse: AxiosResponse<Dto | Dto[]>
  ) {
    super()
    this.data = data
    this.status = status
    this.paginate = paginate
    this.axiosResponse = axiosResponse
  }
}
