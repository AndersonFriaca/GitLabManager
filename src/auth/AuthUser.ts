import IAuthUser from "./IAuthUser";

export default class AuthUser implements IAuthUser {
  details: any;
  privateToken: string;

  constructor(privateToken: string) {
    this.privateToken = privateToken;
  }

  isAuthenticated(): Promise<boolean> {
    return Promise.resolve(
      this.privateToken !== undefined && this.privateToken !== null
    );
  }
  isResourceOwner(resourceId: any): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  isInRole(role: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
