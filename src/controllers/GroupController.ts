import FacGroup from "../facades/FacGroup";
import { controller, httpGet } from "inversify-express-utils";
import { inject } from "../config/ioc/ioc";
import TYPES from "../config/ioc/types";
import ControllerGen from "./ControllerGen";

@controller("/groups")
export default class GroupController extends ControllerGen {
  @inject(TYPES.FacGroup)
  private readonly facGroup: FacGroup;

  @httpGet("/")
  async getAll() {
    console.log("controller");
    this.facGroup.findAll();
  }
}
