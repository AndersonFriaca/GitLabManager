import RcGen from '../RcGen'
import { provide, inject } from '../../config/ioc/ioc'
import TYPES from '../../config/ioc/types'
import DtoGen from '../../transports/DtoGen'
import { DtoServiceGenResponse } from '../../transports/DtoServiceGenResponse'
import { AxiosResponse } from 'axios'
import BuilderServiceGitLabResponse from '../../builders/ServiceResponse/BuilderServiceGitLabResponse'
import BuilderServiceResponse from '../../builders/ServiceResponse/BuilderServiceResponse'
import HpRequest from '../../helpers/ioc/HpRequest'

@provide(TYPES.RcGitlabGen)
abstract class RcGitLabGen<Dto extends DtoGen> extends RcGen<
  Dto,
  DtoServiceGenResponse<Dto>
> {
  @inject(TYPES.HpRequest)
  private hpHelper: HpRequest

  protected defineBaseUrl (): string {
    return `${process.env.GITLAB_BASE_URL}/api/${
      process.env.GITLAB_API_VERSION
    }`
  }

  protected createBuilderServiceResponse (
    response: AxiosResponse<Dto | Dto[]>
  ): BuilderServiceResponse<Dto, DtoServiceGenResponse<Dto>> {
    return new BuilderServiceGitLabResponse(response, this.classToDeserialize)
  }

  protected getDefaultHeaders (): {} {
    return {
      'PRIVATE-TOKEN':
        this.hpHelper.getPrivateToken() || process.env.PRIVATE_TOKEN
    }
  }

  protected requireValidHttps (): boolean {
    return process.env.GITLAB_CHECK_HTTPS === 'true'
  }
}

export default RcGitLabGen
