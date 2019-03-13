import { provide } from "../config/ioc/ioc";
import TYPES from "../config/ioc/types";

@provide(TYPES.FacGen)
abstract class FacGen {}

export default FacGen;
