import { Request } from "express";
import { BaseHttpController } from "inversify-express-utils";

abstract class ControllerGen extends BaseHttpController {
  protected getPrivateToken(req: Request): string {
    return process.env.PRIVATE_TOKEN;
  }
}

export default ControllerGen;
