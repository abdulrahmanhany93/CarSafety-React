import { Text } from "react-native-paper";
import { StyleSheet } from "react-native";

import React from "react";
import TextFieldComponent from "../../../../core/components/TextField/text.field";
import AppStrings from "../../../../core/utils/App.Strings";
import AppFont from "../../../../core/utils/fonts/AppFonts";
import { getAlignment } from "../../../../core/utils/constants";
interface AuthenticationTextFieldProps {
  label: string;
  hint: string;
  onChangeText: (text: string) => void;
}

export default function AuthenticationTextField({
  label,
  hint,
  onChangeText,
}: AuthenticationTextFieldProps) {
  return (
    <>
      <Text variant="titleSmall" style={styles.title}>
        {label}
      </Text>
      <TextFieldComponent
        label={hint}
        onChangeText={onChangeText}
        secureTextEntry={label == AppStrings.PASSWORD}
      />
    </>
  );
}
const styles = StyleSheet.create({
  title: {
    textAlign: getAlignment,
    fontFamily: AppFont.bold,
    marginHorizontal: "4%",
    marginTop: "4%",
  },
});
