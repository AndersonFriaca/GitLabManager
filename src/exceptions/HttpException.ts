import ExceptionGen from "./ExceptionGen";
import PropAlertType from "../properties/PropAlertType";

export default class HttpException extends ExceptionGen {
  public readonly statusCode: number;
  public readonly alertType: PropAlertType;

  constructor(message: string = HttpException.DEFAULT_MESSAGE, statusCode: number = 400, alertType: PropAlertType) {
    super(message);
    this.statusCode = statusCode;
    this.alertType = alertType;
  }
}
