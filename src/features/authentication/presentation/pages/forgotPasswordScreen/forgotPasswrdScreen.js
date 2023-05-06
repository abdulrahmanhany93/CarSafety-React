import { View, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import LoginScreenUpperContainer from "../../components/login.screen.container";
import AppStrings from "../../../../../core/utils/App.Strings";
import { Text } from "react-native-paper";
import AuthenticationTextFeild from "../../components/authentication.textfeild";
import TextButton from "../../../../../core/components/MyButton/MyButton";
import authScreenStyles from "../styles";
export default function ForgotPasswordScreen() {
  const navigator = useNavigation();

  return (
    <ScrollView
      style={authScreenStyles.ScrollView}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      <LoginScreenUpperContainer />
      <Text variant="titleLarge" style={authScreenStyles.title}>
        {AppStrings.PLEASE_TYPE_YOUR_EMAIL}
      </Text>
      <View style={authScreenStyles.content}>
        <AuthenticationTextFeild
          label={AppStrings.EMAIL}
          hint={AppStrings.EMAIL_HINT}
        />

        <TextButton
          title={AppStrings.RESET_PASSWORD}
          buttonStyle={authScreenStyles.loginButton}
          titleStyle={authScreenStyles.loginText}
          onPress={() => {
            console.log("Login Button Pressed");
          }}
        />
      </View>
    </ScrollView>
  );
}
