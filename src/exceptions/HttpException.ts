import ExceptionGen from "./ExceptionGen";
import PropAlertType from "../properties/PropAlertType";

export default class HttpException extends ExceptionGen {
  public readonly alertType: PropAlertType;

  constructor(message: string = HttpException.DEFAULT_MESSAGE, statusCode: number = 500, alertType: PropAlertType = PropAlertType.DANGER) {
    super(message, statusCode);
    this.alertType = alertType;
  }
}
