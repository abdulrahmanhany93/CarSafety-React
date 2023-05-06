import React, { Component, ReactComponentElement, ReactNode } from "react";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";

import { Text } from "react-native-paper";
import TextButtonProps from "./interface";

import AppFont from "../../utils/fonts/AppFonts";
import Colors from "../../utils/colors";
const { width, fontScale } = Dimensions.get("window");
const TextButton = (props: TextButtonProps) => {
  const {
    title,
    trailingTitle,
    titleStyle: textStyle,
    buttonStyle,
    onPress,
  } = props;
  const thereIsTrailingTitle = trailingTitle != null;
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        buttonStyle,
        pressed ? { opacity: 0.8 } : null,
      ]}
      onPress={onPress}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: thereIsTrailingTitle ? "flex-start" : "center",
        }}
      >
        {thereIsTrailingTitle && (
          <Text
            variant="titleLarge"
            style={[
              styles.title,
              textStyle,
              thereIsTrailingTitle
                ? { marginHorizontal: 1, textDecorationLine: "underline" }
                : null,
            ]}
          >
            {trailingTitle}
          </Text>
        )}
        <Text variant="titleLarge" style={[styles.title, , textStyle]}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  title: {
    color: Colors.white,
    fontSize: fontScale * 16,
    fontFamily: AppFont.bold,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingHorizontal: width * 0.1,
    borderRadius: 15,
    paddingVertical: width * 0.02,
    alignSelf: "center",
  },
});
export default TextButton;
