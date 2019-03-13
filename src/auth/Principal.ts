import { interfaces } from "inversify-express-utils";

export default class Principal implements interfaces.Principal {
  details: any;
  isAuthenticated(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  isResourceOwner(resourceId: any): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  isInRole(role: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
