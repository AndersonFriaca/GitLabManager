import AuthTypes from './types/auth'
import BusinessTypes from './types/business'
import FacadeTypes from './types/facades'
import HelperTypes from './types/helpers'
import ServiceTypes from './types/services'
import MiddlewareTypes from './types/middlewares'

const types = {
  ...AuthTypes,
  ...BusinessTypes,
  ...FacadeTypes,
  ...HelperTypes,
  ...ServiceTypes,
  ...MiddlewareTypes
}

export default types
