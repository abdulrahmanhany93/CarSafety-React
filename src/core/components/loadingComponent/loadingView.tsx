import { StyleSheet, View } from "react-native";
import React, { ReactNode } from "react";
import { ActivityIndicator } from "react-native-paper";
import Colors from "../../utils/colors";
import Center from "../center/center";

interface Props {
  children: ReactNode;

  // any other props you want to pass to the View element
}

export default function LoadingView() {
  return (
    <Center>
      <ActivityIndicator color={Colors.primary} size={"large"} />
    </Center>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
  },
});
