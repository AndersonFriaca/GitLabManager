import { interfaces } from "inversify-express-utils";

export default interface IAuthUser extends interfaces.Principal {
  privateToken: string;
}
