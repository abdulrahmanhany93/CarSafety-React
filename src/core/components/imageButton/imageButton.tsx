import React from "react";
import { Image, Pressable } from "react-native";

import MyButtonProps from "./interface";

const ImageButton = (props: MyButtonProps) => {
  const { imagePath, ImageStyle, onPress } = props;

  return (
    <Pressable
      style={({ pressed }) => [pressed ? { opacity: 0.8 } : null]}
      onPress={onPress}
    >
      <Image source={imagePath} style={ImageStyle} />
    </Pressable>
  );
};

export default ImageButton;
