import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import AppFont from "../../../../core/utils/fonts/AppFonts";
import Colors from "../../../../core/utils/colors";
import { getAlignment } from "../../../../core/utils/constants";
const { width, fontScale } = Dimensions.get("window");
const authScreenStyles = StyleSheet.create({
  ScrollView: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    paddingHorizontal: "10%",
    marginTop: "5%",
  },
  haveAccountSection: {
    flexDirection: "row",
  },
  iconsSection: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: "5%",
  },
  divider: {
    backgroundColor: Colors.primary,
    height: "100%",
    width: 1,
  },
  icon: {
    width: fontScale * 80,
    height: fontScale * 80,
  },
  loginText: {
    fontSize: 15,
    color: "white",
    fontFamily: AppFont.bold,
    alignSelf: "center",
  },
  simpleButton: {
    marginBottom: "5%",
    borderColor: Colors.primaryDark,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderRadius: 10,
    width: width * 0.3,
    padding: 10,
    paddingHorizontal: 0,

    alignSelf: "center",
  },
  loginButton: {
    backgroundColor: Colors.primary,
    padding: "3%",
    color: "white",
    alignSelf: "stretch",
    fontFamily: AppFont.bold,
    borderRadius: 10,
    marginTop: "5%",
  },
  forgotPasswordText: {
    fontFamily: AppFont.bold,
    fontSize: 12,
    alignSelf: "center",
    color: Colors.primary,

    borderRadius: 10,
    marginTop: "5%",
  },
  forgotPasswordButton: {
    backgroundColor: "transparent",
  },
  title: {
    textAlign: getAlignment,
    marginHorizontal: "10%",
    fontFamily: AppFont.bold,
    marginTop: "5%",
  },
});
export default authScreenStyles;
