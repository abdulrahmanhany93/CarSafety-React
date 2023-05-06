import { StyleSheet, View } from "react-native";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  // any other props you want to pass to the View element
}

export default function Center({ children, ...rest }: Props) {
  return (
    <View style={styles.center} {...rest}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
  },
});
