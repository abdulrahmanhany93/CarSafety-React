import { Either, left, right } from "fp-ts/lib/Either";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { injectable } from "inversify";
import { Failure } from "../../../../core/error/failures";

export default interface IAuthRepository {
  SignInWithEmail(
    email: string,
    password: string
  ): Promise<Either<Failure, FirebaseAuthTypes.User>>;
  signInWithGoogle(): Promise<Either<Failure, FirebaseAuthTypes.User>>;
  signInWithApple(): Promise<Either<Failure, FirebaseAuthTypes.User>>;
  SignInAnonymously(): Promise<Either<Failure, FirebaseAuthTypes.User>>;
  SignUpWithEMail(
    email: string,
    password: string
  ): Promise<Either<Failure, FirebaseAuthTypes.User>>;
  resetPassword(email: string): Promise<Either<Failure, void>>;
  isLoggedIn(): boolean;
  logOut(): Promise<Either<Failure, void>>;
}
