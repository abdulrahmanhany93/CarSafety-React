import { FirebaseAuthTypes, firebase } from "@react-native-firebase/auth";
import Brand from "../../features/home/domain/entities/brand";
import { Car, CarType } from "../../features/home/domain/entities/car";
import { useFonts } from "expo-font";
import { left } from "fp-ts/lib/Either";
import { ServerFailure } from "../error/failures";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { SnackbarType } from "./AppEnums";
export function handelError(Failure: unknown) {
  const firebaseFailure = Failure as FirebaseAuthTypes.NativeFirebaseAuthError;
  return left(new ServerFailure(firebaseFailure.message, firebaseFailure.code));
}
export const showSnackBar = (message: string, type: SnackbarType) => {
  Toast.hide();
  Toast.show({
    type: type,
    text1: message,
  });
};
export function isUserLoggedIn() {
  return firebase.auth().currentUser == null;
}
export function getCurrentUser() {
  return firebase.auth().currentUser?.toJSON();
}
export function initilizeFonts() {
  return useFonts({
    "Almarai-Bold": require("/Volumes/MacOs/VodafoneChallenge/fonts/Almarai-Bold.ttf"),
    "Almarai-ExtraBold": require("/Volumes/MacOs/VodafoneChallenge/fonts/Almarai-ExtraBold.ttf"),
    "Almarai-Light": require("/Volumes/MacOs/VodafoneChallenge/fonts/Almarai-Light.ttf"),
  });
}
