import FacGen from './FacGen'
import { provide, inject } from '../config/ioc/ioc'
import TYPES from './../config/ioc/types'
import BoGroup from '../business/BoGroup'

@provide(TYPES.FacGroup)
export default class FacGroup extends FacGen {
  @inject(TYPES.BoGroup)
  private readonly boGroup: BoGroup;

  async findAll () {
    console.log('Facade')
    await this.boGroup.findAll()
  }
}
