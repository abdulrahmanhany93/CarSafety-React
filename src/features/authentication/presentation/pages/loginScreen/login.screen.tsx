import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoginScreenUpperContainer from "../../components/login.screen.container";
import AppStrings from "../../../../../core/utils/App.Strings";
import { Divider, Text } from "react-native-paper";
import AuthenticationTextFeild from "../../components/authentication.textfeild";
import TextButton from "../../../../../core/components/MyButton/MyButton";
import ImageButton from "../../../../../core/components/imageButton/imageButton";
import Assets from "../../../../../core/utils/assets.manager";
import authScreenStyles from "../styles";
import { routes } from "../../../../../config/router/routes";
import { login } from "../../../../../Logic/Slices/Auth/AuthSlice";
import { LoginActionParams } from "../../../../../config/UseCases/UseCaseParams";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../Logic/Slices/hooks";

import { AuthActionType } from "../../../../../core/utils/AppEnums";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export default function LoginScreen() {
  const navigator = useNavigation();
  const state = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  let email = "";
  let password = "";
  return (
    <ScrollView
      style={authScreenStyles.ScrollView}
      bounces={false}
      automaticallyAdjustKeyboardInsets={true}
      showsVerticalScrollIndicator={false}
    >
      <LoginScreenUpperContainer />
      <Text variant="titleLarge" style={authScreenStyles.title}>
        {AppStrings.PLEASE_LOGIN}
      </Text>
      <View style={authScreenStyles.content}>
        <AuthenticationTextFeild
          label={AppStrings.EMAIL}
          hint={AppStrings.EMAIL_HINT}
          onChangeText={(value) => {
            email = value;
          }}
        />
        <AuthenticationTextFeild
          label={AppStrings.PASSWORD}
          hint={AppStrings.PASSWORD_HINT}
          onChangeText={(value) => {
            password = value;
          }}
        />
        <TextButton
          title={AppStrings.LOGIN}
          buttonStyle={authScreenStyles.loginButton}
          titleStyle={authScreenStyles.loginText}
          onPress={() => handleLogin(AuthActionType.LoginWithEmail)}
        />

        <TextButton
          title={AppStrings.FORGOT_PASSWORD}
          buttonStyle={authScreenStyles.forgotPasswordButton}
          titleStyle={authScreenStyles.forgotPasswordText}
          onPress={() => {
            navigator.navigate(routes.ForgotPasswordRoute);
          }}
        />
        <View style={authScreenStyles.iconsSection}>
          <ImageButton
            imagePath={Assets.googleIcon}
            ImageStyle={authScreenStyles.icon}
            onPress={() => handleLogin(AuthActionType.LoginWithGoogle)}
          />
          <Divider style={authScreenStyles.divider} />
          <ImageButton
            imagePath={Assets.appleIcon}
            ImageStyle={authScreenStyles.icon}
            onPress={() => handleLogin(AuthActionType.LoginWithApple)}
          />
        </View>
        <TextButton
          title={AppStrings.CREATE_ACCOUNT}
          titleStyle={authScreenStyles.forgotPasswordText}
          buttonStyle={authScreenStyles.simpleButton}
          onPress={() => {
            navigator.navigate(routes.SignupRoute);
          }}
        />
        <TextButton
          title={AppStrings.LOGIN_GUEST}
          titleStyle={authScreenStyles.forgotPasswordText}
          buttonStyle={authScreenStyles.simpleButton}
          onPress={async () => handleLogin(AuthActionType.LoginAnonymously)}
        />
      </View>
      <Toast position="bottom" />
    </ScrollView>
  );

  function handleLogin(authActionType: AuthActionType) {
    const params = new LoginActionParams(email, password, authActionType);
    dispatch(login(params)).then((res) => {
      res.meta.requestStatus === "fulfilled" &&
        navigator.navigate(routes.HomeRoute);
    });
  }
}
