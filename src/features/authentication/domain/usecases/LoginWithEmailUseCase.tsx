import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { inject, injectable } from "inversify";
import IAuthRepository from "../../data/repositories/IAuthRepository";
import { UseCase } from "../../../../config/UseCases/IUseCase";
import { Either } from "fp-ts/lib/Either";
import { LoginWithEmailParams } from "../../../../config/UseCases/UseCaseParams";
import Servicetypes from "../../../../core/utils/SlTypes";
import "reflect-metadata";
import { Failure } from "../../../../core/error/failures";
@injectable()
class LogInWithEmailUseCase
  implements UseCase<FirebaseAuthTypes.User, LoginWithEmailParams>
{
  @inject(Servicetypes.IAuthRepository)
  private authRepository!: IAuthRepository

  async call(
    params: LoginWithEmailParams
  ): Promise<Either<Failure, FirebaseAuthTypes.User>> {
    return await this.authRepository.SignInWithEmail(
      params.email,
      params.password
    );
  }
}

export default LogInWithEmailUseCase;
