import { BaseHttpController } from 'inversify-express-utils'

abstract class CtlGen extends BaseHttpController {
  protected getPrivateToken (): string {
    return process.env.PRIVATE_TOKEN
  }
}

export default CtlGen
