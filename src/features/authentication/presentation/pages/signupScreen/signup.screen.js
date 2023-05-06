import { View, ScrollView } from "react-native";
import React from "react";
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

export default function SignUpScreen() {
  const navigator = useNavigation();

  return (
    <ScrollView
      style={authScreenStyles.ScrollView}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      <LoginScreenUpperContainer />
      <Text variant="titleLarge" style={authScreenStyles.title}>
        {AppStrings.CREATE_ACCOUNT}
      </Text>
      <View style={authScreenStyles.content}>
        <AuthenticationTextFeild
          label={AppStrings.NAME}
          hint={AppStrings.TYPE_YOUR_NAME}
        />
        <AuthenticationTextFeild
          label={AppStrings.EMAIL}
          hint={AppStrings.EMAIL_HINT}
        />
        <AuthenticationTextFeild
          label={AppStrings.PASSWORD}
          hint={AppStrings.PASSWORD_HINT}
        />
        <TextButton
          title={AppStrings.CREATE_ACCOUNT}
          buttonStyle={authScreenStyles.loginButton}
          titleStyle={authScreenStyles.loginText}
          onPress={() => {
            console.log("Login Button Pressed");
          }}
        />

        <TextButton
          title={AppStrings.ALREADY_HAVE_ACCOUNT}
          trailingTitle={AppStrings.LOGIN}
          titleStyle={authScreenStyles.forgotPasswordText}
          onPress={() => {
            navigator.navigate(routes.Login);
          }}
        />
        <View style={authScreenStyles.iconsSection}>
          <ImageButton
            imagePath={Assets.googleIcon}
            ImageStyle={authScreenStyles.icon}
          />
          <Divider style={authScreenStyles.divider} />
          <ImageButton
            imagePath={Assets.appleIcon}
            ImageStyle={authScreenStyles.icon}
          />
        </View>
      </View>
    </ScrollView>
  );
}
