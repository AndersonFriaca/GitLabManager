import RcGitLabGen from './RcGitLabGen'
import { provide } from '../../config/ioc/ioc'
import TYPES from '../../config/ioc/types'
import DtoGroup from '../../transports/DtoGroup'
import { DtoServiceGenResponse } from '../../transports/DtoServiceGenResponse'

@provide(TYPES.RcGitLabGroup)
export default class RcGitLabGroup extends RcGitLabGen<DtoGroup> {
  protected defineClassToDeserialize (): typeof DtoGroup {
    return DtoGroup
  }

  async findAll (): Promise<DtoServiceGenResponse<DtoGroup>> {
    console.log('Service')
    const response = await this.get('/groups')
    console.log(response.data)
    return response
  }

  async find (idGroup: string | number) {
    const response = await this.get('/groups/' + idGroup.toString())
    console.log(response)
    return response
  }
}
