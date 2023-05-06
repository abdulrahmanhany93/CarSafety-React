import { inject, injectable } from "inversify";
import IAuthRepository from "../../data/repositories/IAuthRepository";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { Either, left, right } from "fp-ts/lib/Either";
import IAuthWebServices from "../../data/datasources/IAuthWebServices";
import Servicetypes from "../../../../core/utils/SlTypes";
import "reflect-metadata";
import { Failure, ServerFailure } from "../../../../core/error/failures";
import { handelError } from "../../../../core/utils/globalMethods";

@injectable()
export default class AuthRepository implements IAuthRepository {
  @inject<IAuthWebServices>(Servicetypes.IAuthWebServices)
  private authWebService!: IAuthWebServices;
  async SignInWithEmail(
    email: string,
    password: string
  ): Promise<Either<Failure, FirebaseAuthTypes.User>> {
    try {
      const result = await this.authWebService.SignInWithEmail(email, password);
      return right(result);
    } catch (Failure: any) {
      return handelError(Failure);
    }
  }
  async signInWithGoogle(): Promise<Either<Failure, FirebaseAuthTypes.User>> {
    try {
      const result = await this.authWebService.signInWithGoogle();
      return right(result);
    } catch (Failure: any) {
      return handelError(Failure);
    }
  }
  async signInWithApple(): Promise<Either<Failure, FirebaseAuthTypes.User>> {
    try {
      const result = await this.authWebService.signInWithApple();
      return right(result);
    } catch (Failure) {
      return handelError(Failure);
    }
  }
  async SignInAnonymously(): Promise<Either<Failure, FirebaseAuthTypes.User>> {
    try {
      const result = await this.authWebService.SignInAnonymously();
      return right(result);
    } catch (Failure: any) {
      return handelError(Failure);
    }
  }
  async SignUpWithEMail(
    email: string,
    password: string
  ): Promise<Either<Failure, FirebaseAuthTypes.User>> {
    try {
      const result = await this.authWebService.SignInAnonymously();
      return right(result);
    } catch (Failure: any) {
      return handelError(Failure);
    }
  }
  async resetPassword(email: string): Promise<Either<Failure, void>> {
    try {
      const result = await this.authWebService.resetPassword(email);
      return right(result);
    } catch (Failure: any) {
      return handelError(Failure);
    }
  }
  isLoggedIn(): boolean {
    return this.authWebService.isLoggedIn();
  }
  async logOut(): Promise<Either<Failure, void>> {
    try {
      const result = await this.authWebService.logOut();
      return right(result);
    } catch (Failure: any) {
      return handelError(Failure);
    }
  }
}
