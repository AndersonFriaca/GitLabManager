import { provide } from '../config/ioc/ioc'
import TYPES from '../config/ioc/types'

@provide(TYPES.BoGen)
abstract class BoGen {}

export default BoGen
