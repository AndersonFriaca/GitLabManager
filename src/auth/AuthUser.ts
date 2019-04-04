import IAuthUser from './IAuthUser'

export default class AuthUser implements IAuthUser {
  details: {};
  privateToken: string;

  constructor (privateToken: string) {
    this.privateToken = privateToken
  }

  isAuthenticated (): Promise<boolean> {
    return Promise.resolve(
      this.privateToken !== undefined && this.privateToken !== null
    )
  }
  isResourceOwner (): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
  isInRole (): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
}
