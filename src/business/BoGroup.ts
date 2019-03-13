import BoGen from "./BoGen";
import { provide, inject } from "../config/ioc/ioc";
import TYPES from "../config/ioc/types";
import RcGitLabGroup from "../services/gitlab/RcGitLabGroup";

@provide(TYPES.BoGroup)
export default class BoGroup extends BoGen {
  @inject(TYPES.RcGitLabGroup)
  private readonly rcGitLabGroup: RcGitLabGroup;

  findAll() {
    console.log("business");
    this.rcGitLabGroup.findAll();
  }
}
