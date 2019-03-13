import BoGenTypes from "./generics/business-gen";

const types = {
  ...BoGenTypes,
  BoGroup: Symbol.for("BoGroup")
};

export default types;
