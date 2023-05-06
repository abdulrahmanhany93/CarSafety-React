import React from "react";
import { StyleSheet, TextInput, useWindowDimensions } from "react-native";
import Colors from "../../utils/colors";
import AppFont from "../../utils/fonts/AppFonts";
import TextFieldProps from "./interface";
import { getAlignment, getDirection } from "../../utils/constants";

export default function TextFieldComponent({
  onChangeText,
  label,
  secureTextEntry,
}: TextFieldProps) {
  return (
    <TextInput
      onChangeText={onChangeText}
      placeholder={label}
      style={styles.textInput}
      secureTextEntry={secureTextEntry}
    />
  );
}
const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "white",
    fontFamily: AppFont.bold,
    borderColor: Colors.primaryDark,
    borderWidth: 1,
    borderRadius: 10,
    padding: "4%",
    marginTop: "4%",

    direction: "rtl",
    textAlign: getAlignment,
    writingDirection: getDirection,
  },
});
