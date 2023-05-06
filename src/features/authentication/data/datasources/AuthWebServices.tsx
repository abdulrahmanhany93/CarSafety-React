import { inject, injectable } from "inversify";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

import IAuthWebServices from "./IAuthWebServices";

import { appleAuth } from "@invertase/react-native-apple-authentication";
import "reflect-metadata";

@injectable()
class AuthWebServices implements IAuthWebServices {
  async SignInWithEmail(
    email: string,
    password: string
  ): Promise<FirebaseAuthTypes.User> {
    const credentialResult = await auth().signInWithEmailAndPassword(
      email,
      password
    );
    return credentialResult.user;
  }
  async signInWithGoogle(): Promise<FirebaseAuthTypes.User> {
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });

    const { idToken } = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const credentialResult = await auth().signInWithCredential(
      googleCredential
    );

    return credentialResult.user;
  }
  async signInWithApple(): Promise<FirebaseAuthTypes.User> {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    if (!appleAuthRequestResponse.identityToken) {
      throw new Error("Apple Sign-In failed - no identify token returned");
    }

    const { identityToken, nonce } = appleAuthRequestResponse;
    const appleCredential = auth.AppleAuthProvider.credential(
      identityToken,
      nonce
    );
    const credentialResult = await auth().signInWithCredential(appleCredential);
    return credentialResult.user;
  }
  async SignInAnonymously(): Promise<FirebaseAuthTypes.User> {
    const credentialResult = await auth().signInAnonymously();
    return credentialResult.user;
  }
  async SignUpWithEMail(
    email: string,
    password: string
  ): Promise<FirebaseAuthTypes.User> {
    const credentialResult = await auth().createUserWithEmailAndPassword(
      email,
      password
    );
    return credentialResult.user;
  }
  async resetPassword(email: string): Promise<void> {
    return await auth().sendPasswordResetEmail(email);
  }
  isLoggedIn(): boolean {
    return auth().currentUser != null;
  }
  async logOut(): Promise<void> {
    return await auth().signOut();
  }
}
export default AuthWebServices;
