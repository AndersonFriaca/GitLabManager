import RcGenTypes from "./generics/services-gen";

const types = {
  ...RcGenTypes,
  RcGitLabGroup: Symbol.for("RcGitLabGroup")
};

export default types;
