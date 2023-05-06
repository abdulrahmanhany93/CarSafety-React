import React, { useState } from "react";
import { Image, ActivityIndicator, StyleSheet, View } from "react-native";
import Colors from "../../utils/colors";

const NetworkImage = ({ url, style }: { url: string; style?: any }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <ActivityIndicator
          size={"large"}
          color={Colors.primary}
          style={styles.container}
        />
      )}
      <Image
        style={style}
        source={{ uri: url }}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
export default NetworkImage;
