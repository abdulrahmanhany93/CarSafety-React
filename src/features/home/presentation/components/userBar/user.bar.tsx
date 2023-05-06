import * as React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { Avatar, Card, IconButton } from "react-native-paper";
import UserBarProps from "./interface";
import Assets from "../../../../../core/utils/assets.manager";
import Colors from "../../../../../core/utils/colors";
import AppFont from "../../../../../core/utils/fonts/AppFonts";
import { getAlignment } from "../../../../../core/utils/constants";
import NetworkImage from "../../../../../core/components/myImage/network.image";
const { fontScale } = Dimensions.get("window");
export default function UserBar(props: UserBarProps) {
  const { title, subtitle, userPhotoUrl } = props;
  return (
    <Card.Title
      title={title}
      subtitle={subtitle}
      titleStyle={styles.title}
      subtitleStyle={styles.subTitle}
      left={() => <Image source={Assets.appLogo} style={styles.logo} />}
      right={(props) => (
        <NetworkImage url={userPhotoUrl} style={styles.userPhoto} />
      )}
    />
  );
}
const styles = StyleSheet.create({
  title: {
    fontFamily: AppFont.bold,
    textAlign: getAlignment,
    fontSize: fontScale * 19,
  },
  userPhoto: {
    borderRadius: 15,
    margin: "1%",
    borderWidth: 2,
    resizeMode: "cover",
    borderColor: Colors.primaryDark,
    width: fontScale * 70,
    height: fontScale * 100,
  },
  subTitle: {
    fontFamily: AppFont.bold,
    textAlign: "center",
    fontSize: fontScale * 15,
  },
  logo: {
    width: fontScale * 70,
    height: fontScale * 70,
    resizeMode: "contain",
    tintColor: Colors.primary,
    opacity: 0.3,
  },
});
