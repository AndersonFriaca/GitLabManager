import PropServiceMessage from '../properties/PropServiceMessage'

abstract class ExceptionGen extends Error {
  protected static DEFAULT_MESSAGE: string = PropServiceMessage.ERRO_INTERNO
  readonly code: number

  constructor (
    message: string = ExceptionGen.DEFAULT_MESSAGE,
    code: number = 500
  ) {
    super(message)
    this.code = code
  }
}

export default ExceptionGen
