import PropServiceMessage from "../properties/PropServiceMessage";
import HttpException from "./HttpException";
import PropAlertType from "../properties/PropAlertType";

export default class BussinesException extends HttpException {
  constructor(
    message: string = PropServiceMessage.ERRO_INTERNO,
    statusCode: number = 409
  ) {
    super(message, statusCode, PropAlertType.WARNING);
  }
}
