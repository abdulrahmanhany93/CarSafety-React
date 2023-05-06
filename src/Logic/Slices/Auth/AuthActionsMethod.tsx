import { inject, injectable } from "inversify";
import Servicetypes from "../../../core/utils/SlTypes";
import LogInWithEmailUseCase from "../../../features/authentication/domain/usecases/LoginWithEmailUseCase";
import {
  LoginActionParams,
  NoParams,
} from "../../../config/UseCases/UseCaseParams";
import LogInWithGoogleUseCase from "../../../features/authentication/domain/usecases/LoginWithGoogleUseCase";
import SignInWithAppleUseCase from "../../../features/authentication/domain/usecases/LoginWithAppleUseCase";
import { AuthActionType } from "../../../core/utils/AppEnums";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { Failure } from "../../../core/error/failures";
import { Either } from "fp-ts/lib/Either";
import LogInAnonymouslyUseCase from "../../../features/authentication/domain/usecases/LoginAnonymouslyUseCase";
@injectable()
class AuthMethods {
  @inject(Servicetypes.LoginWithEmailUseCase)
  loginWithEmailUseCase!: LogInWithEmailUseCase;
  @inject(Servicetypes.LogInWithGoogleUseCase)
  loginWithGoogleUseCase!: LogInWithGoogleUseCase;
  @inject(Servicetypes.LoginWithAppleUseCase)
  loginWithAppleUseCase!: SignInWithAppleUseCase;
  @inject(Servicetypes.LoginAnonymouslyUseCase)
  loginAnonymouslyUseCase!: LogInAnonymouslyUseCase;

  private loginWithEmail = (
    email: string,
    password: string
  ): Promise<Either<Failure, FirebaseAuthTypes.User>> => {
    return this.loginWithEmailUseCase.call({ email, password });
  };

  private loginWithGoogle = async (): Promise<
    Either<Failure, FirebaseAuthTypes.User>
  > => {
    return await this.loginWithGoogleUseCase.call(new NoParams());
  };

  private loginWithApple = async (): Promise<
    Either<Failure, FirebaseAuthTypes.User>
  > => {
    return await this.loginWithAppleUseCase.call(new NoParams());
  };
  private loginAnonymously = async (): Promise<
    Either<Failure, FirebaseAuthTypes.User>
  > => {
    return await this.loginAnonymouslyUseCase.call(new NoParams());
  };

  getLoginUseCases = ({
    params,
  }: {
    params: LoginActionParams;
  }): Promise<Either<Failure, FirebaseAuthTypes.User>> => {
    switch (params.loginType) {
      case AuthActionType.LoginWithEmail:
        return this.loginWithEmail(params.email, params.password);

      case AuthActionType.LoginWithGoogle:
        return this.loginWithGoogle();

      case AuthActionType.LoginWithApple:
        return this.loginWithApple();
      case AuthActionType.LoginAnonymously:
        return this.loginAnonymously();
      default:
        return this.loginWithEmail(params.email, params.password);
    }
  };
}
export default AuthMethods;
