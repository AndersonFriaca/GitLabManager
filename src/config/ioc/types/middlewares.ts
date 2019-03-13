import MiddlewareGenTypes from "./generics/middlewares-gen";

const types = {
  ...MiddlewareGenTypes,
  DefineUserMiddleware: Symbol.for("DefineUserMiddleware")
};

export default types;
