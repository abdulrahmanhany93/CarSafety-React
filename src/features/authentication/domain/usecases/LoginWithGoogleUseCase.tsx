import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { inject, injectable } from "inversify";
import IAuthRepository from "../../data/repositories/IAuthRepository";
import { UseCase } from "../../../../config/UseCases/IUseCase";
import { Either } from "fp-ts/lib/Either";
import {
  LoginWithEmailParams,
  NoParams,
} from "../../../../config/UseCases/UseCaseParams";
import ServiceTypes from "../../../../core/utils/SlTypes";
import "reflect-metadata";
import { Failure } from "../../../../core/error/failures";
@injectable()
class LogInWithGoogleUseCase
  implements UseCase<FirebaseAuthTypes.User, NoParams>
{
  @inject(ServiceTypes.IAuthRepository)
  private authRepository!: IAuthRepository;

  async call(
    params: NoParams
  ): Promise<Either<Failure, FirebaseAuthTypes.User>> {
    return await this.authRepository.signInWithGoogle();
  }
}

export default LogInWithGoogleUseCase;
