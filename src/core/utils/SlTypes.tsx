const ServiceTypes = {
  ///! Web Services //!//
  IAuthWebServices: Symbol.for("IAuthWebServices"),
  IHomeWebServices: Symbol.for("IHomeWebServices"),
  IBrandWebServices: Symbol.for("IBrandWebServices"),
  ///! Repositories //!//
  IAuthRepository: Symbol.for("IAuthRepository"),
  IHomeRepository: Symbol.for("IHomeRepository"),
  IBrandRepository: Symbol.for("IBrandRepository"),
  ///! Use Cases //!//
  LoginWithEmailUseCase: Symbol.for("LoginWithEmailUseCase"),
  LogInWithGoogleUseCase: Symbol.for("LogInWithGoogleUseCase"),
  LoginWithAppleUseCase: Symbol.for("LoginWithAppleUseCase"),
  LoginAnonymouslyUseCase: Symbol.for("LoginAnonymouslyUseCase"),
  GetBrandsUseCase: Symbol.for("GetBrandsUseCase"),
  GetMostSearchedCarUseCase: Symbol.for("GetMostSearchedCarUseCase"),
  GetRandomCarsUseCase: Symbol.for("GetRandomCarsUseCase"),
  GetSectionsUseCase: Symbol.for("GetSectionsUseCase"),
  ///! Methods //!//
  AuthMethods: Symbol.for("AuthMethods"),
  HomeMethods: Symbol.for("HomeMethods"),
  BrandMethods: Symbol.for("BrandMethods"),
  ///! Thunks //!//
  HomeThunk: Symbol.for("HomeThunk"),

  ///! Utils //!//
  GoogleSignin: Symbol.for("GoogleSignin"),
  CloudConsumer: Symbol.for("CloudConsumer"),
};
export default ServiceTypes;
