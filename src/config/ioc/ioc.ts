import { Container, inject } from 'inversify'
import {
  fluentProvide,
  buildProviderModule,
  provide
} from 'inversify-binding-decorators'
import './loader'

const container = new Container()

const provideSingleton = (identifier: any) => {
  return fluentProvide(identifier)
    .inSingletonScope()
    .done(true)
}

container.load(buildProviderModule())

export { container, provide, provideSingleton, inject }
