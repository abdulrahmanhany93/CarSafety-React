import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../utils/colors";
import AppFont from "../../utils/fonts/AppFonts";
import TextFieldProps from "./interface";
import { Text } from "react-native-paper";
import { getAlignment, locale } from "../../utils/constants";
const { width, fontScale } = Dimensions.get("window");
export default function HeaderTitle(props: TextFieldProps) {
  const { title } = props;
  return (
    <Text variant="labelLarge" style={styles.title}>
      {title}
    </Text>
  );
}
const styles = StyleSheet.create({
  title: {
    color: Colors.primary,
    margin: width * 0.05,
    fontFamily: AppFont.bold,
    fontSize: fontScale * 17,
    textAlign: getAlignment,
  },
});
