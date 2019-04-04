import FacGroup from '../facades/FacGroup'
import { controller, httpGet } from 'inversify-express-utils'
import { inject } from '../config/ioc/ioc'
import TYPES from '../config/ioc/types'
import CtlGen from './CtlGen'

@controller('/groups')
export default class CtlGroup extends CtlGen {
  @inject(TYPES.FacGroup)
  private readonly facGroup: FacGroup

  @httpGet('/')
  async getAll () {
    console.log('Controller')
    await this.facGroup.findAll()
  }
}
