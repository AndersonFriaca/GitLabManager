import { provide } from '../../config/ioc/ioc'
import TYPES from '../../config/ioc/types'
import { injectHttpContext, interfaces } from 'inversify-express-utils'

@provide(TYPES.HpRequest)
export default class HpRequest {
  @injectHttpContext
  private httpContext: interfaces.HttpContext

  public getPrivateToken (): string {
    return this.httpContext.request.header('PRIVATE-TOKEN')
  }
}
