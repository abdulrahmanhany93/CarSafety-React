import { Container } from "inversify";
import AuthWebServices from "./src/features/authentication/data/datasources/AuthWebServices";
import AuthRepository from "./src/features/authentication/domain/repositories/AuthRepository";
import LogInWithEmailUseCase from "./src/features/authentication/domain/usecases/LoginWithEmailUseCase";
import Servicetypes from "./src/core/utils/SlTypes";
import IAuthWebServices from "./src/features/authentication/data/datasources/IAuthWebServices";
import IAuthRepository from "./src/features/authentication/data/repositories/IAuthRepository";
import "reflect-metadata";
import SignInWithAppleUseCase from "./src/features/authentication/domain/usecases/LoginWithAppleUseCase";
import LogInWithGoogleUseCase from "./src/features/authentication/domain/usecases/LoginWithGoogleUseCase";
import AuthMethods from "./src/Logic/Slices/Auth/AuthActionsMethod";
import LogInAnonymouslyUseCase from "./src/features/authentication/domain/usecases/LoginAnonymouslyUseCase";
import CloudConsumer from "./src/core/api/ApiConsumer";
import IHomeWebServices from "./src/features/home/data/datasources/IHomeWebServices";
import HomeWebServices from "./src/features/home/data/datasources/HomeWebServices";
import IHomeRepository from "./src/features/home/data/repositories/IHomeRepository";
import HomeRepository from "./src/features/home/domain/repositories/HomeRepository";
import GetBrandsUseCase from "./src/features/home/domain/usecases/GetBrandsUseCase";
import HomeMethods from "./src/Logic/Slices/home/HomeMethods";
import IBrandWebServices from "./src/features/brand/data/datasources/IBrandWebServices";
import BrandWebServices from "./src/features/brand/data/datasources/BrandWebServices";
import IBrandRepository from "./src/features/brand/data/repositories/IBrandRepository";
import BrandRepository from "./src/features/brand/domain/repositories/BrandRepository";
import GetSectionsUseCase from "./src/features/brand/domain/usecases/GetSectionsUseCase";
import BrandMethods from "./src/Logic/Slices/Brand/BrandMethods";
import GetMostSearchedCarUseCase from "./src/features/home/domain/usecases/GetMostSearchedCar";
import GetRandomCarsUseCase from "./src/features/home/domain/usecases/GetRandomCarsUseCase";

const sl = new Container();
export function setupServiceLocator() {
  //! Web Services //!
  sl.bind<IAuthWebServices>(Servicetypes.IAuthWebServices)
    .to(AuthWebServices)
    .inSingletonScope();
  sl.bind<IHomeWebServices>(Servicetypes.IHomeWebServices)
    .to(HomeWebServices)
    .inSingletonScope();
  sl.bind<IBrandWebServices>(Servicetypes.IBrandWebServices)
    .to(BrandWebServices)
    .inSingletonScope();

  //*-----------------------------------------------------------------------------//*
  //! Repositories //!
  sl.bind<IAuthRepository>(Servicetypes.IAuthRepository)
    .to(AuthRepository)
    .inSingletonScope();
  sl.bind<IHomeRepository>(Servicetypes.IHomeRepository)
    .to(HomeRepository)
    .inSingletonScope();
  sl.bind<IBrandRepository>(Servicetypes.IBrandRepository)
    .to(BrandRepository)
    .inSingletonScope();

  //*-----------------------------------------------------------------------------//*
  //! Use Cases //!
  sl.bind<LogInWithEmailUseCase>(Servicetypes.LoginWithEmailUseCase)
    .to(LogInWithEmailUseCase)
    .inSingletonScope();
  sl.bind<LogInWithGoogleUseCase>(Servicetypes.LogInWithGoogleUseCase)
    .to(LogInWithGoogleUseCase)
    .inSingletonScope();
  sl.bind<SignInWithAppleUseCase>(Servicetypes.LoginWithAppleUseCase)
    .to(SignInWithAppleUseCase)
    .inSingletonScope();
  sl.bind<LogInAnonymouslyUseCase>(Servicetypes.LoginAnonymouslyUseCase)
    .to(LogInAnonymouslyUseCase)
    .inSingletonScope();
  sl.bind<GetBrandsUseCase>(Servicetypes.GetBrandsUseCase)
    .to(GetBrandsUseCase)
    .inSingletonScope();
  sl.bind<GetMostSearchedCarUseCase>(Servicetypes.GetMostSearchedCarUseCase)
    .to(GetMostSearchedCarUseCase)
    .inSingletonScope();
  sl.bind<GetSectionsUseCase>(Servicetypes.GetSectionsUseCase)
    .to(GetSectionsUseCase)
    .inSingletonScope();
  sl.bind<GetRandomCarsUseCase>(Servicetypes.GetRandomCarsUseCase)
    .to(GetRandomCarsUseCase)
    .inSingletonScope();

  //*-----------------------------------------------------------------------------//*
  //! Mehods //!
  sl.bind<AuthMethods>(Servicetypes.AuthMethods)
    .to(AuthMethods)
    .inSingletonScope();
  sl.bind<HomeMethods>(Servicetypes.HomeMethods)
    .to(HomeMethods)
    .inSingletonScope();
  sl.bind<BrandMethods>(Servicetypes.BrandMethods)
    .to(BrandMethods)
    .inSingletonScope();

  //*-----------------------------------------------------------------------------//*

  //! Utils //!

  sl.bind<CloudConsumer>(Servicetypes.CloudConsumer)
    .to(CloudConsumer)
    .inSingletonScope();

  //*-----------------------------------------------------------------------------//*
}

export default sl;
