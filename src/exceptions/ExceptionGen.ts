import PropServiceMessage from "../properties/PropServiceMessage";

abstract class ExceptionGen extends Error {
  protected static DEFAULT_MESSAGE: string = PropServiceMessage.ERRO_INTERNO;
}

export default ExceptionGen;
