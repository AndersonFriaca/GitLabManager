import FacGenTypes from './generics/facades-gen'

const types = {
  ...FacGenTypes,
  FacGroup: Symbol.for('FacGroup')
}

export default types
