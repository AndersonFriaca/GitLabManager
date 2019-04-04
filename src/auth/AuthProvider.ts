import { Request } from 'express'
import { interfaces } from 'inversify-express-utils'
import { provide } from '../config/ioc/ioc'
import TYPES from '../config/ioc/types'
import User from './AuthUser'

@provide(TYPES.AuthProvider)
export default class AuthProvider implements interfaces.AuthProvider {
  getUser (req: Request): Promise<interfaces.Principal> {
    console.log('AuthProvider')
    const token = req.get('PRIVATE-TOKEN')
    return Promise.resolve(new User(token))
  }
}
