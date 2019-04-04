import BoGen from './BoGen'
import { provide, inject } from '../config/ioc/ioc'
import TYPES from '../config/ioc/types'
import RcGitLabGroup from '../services/gitlab/RcGitLabGroup'
import { DtoServiceGenResponse } from '../transports/DtoServiceGenResponse'
import DtoGroup from '../transports/DtoGroup'

@provide(TYPES.BoGroup)
export default class BoGroup extends BoGen {
  @inject(TYPES.RcGitLabGroup)
  private readonly rcGitLabGroup: RcGitLabGroup

  async findAll (): Promise<DtoServiceGenResponse<DtoGroup>> {
    console.log('Business')
    const response = this.rcGitLabGroup.findAll()
    return response
  }
}
