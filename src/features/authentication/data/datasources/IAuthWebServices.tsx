import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { injectable } from "inversify";

export default interface IAuthWebServices {
  SignInWithEmail(
    email: string,
    password: string
  ): Promise<FirebaseAuthTypes.User>;
  signInWithGoogle(): Promise<FirebaseAuthTypes.User>;
  signInWithApple(): Promise<FirebaseAuthTypes.User>;
  SignInAnonymously(): Promise<FirebaseAuthTypes.User>;
  SignUpWithEMail(
    email: string,
    password: string
  ): Promise<FirebaseAuthTypes.User>;
  resetPassword(email: string): Promise<void>;
  isLoggedIn(): boolean;
  logOut(): Promise<void>;
}
