import { StyleSheet, Dimensions } from "react-native";

import {
  getAlignment,
  getDirection,
} from "../../../../../core/utils/constants";
import Colors from "../../../../../core/utils/colors";

import AppFont from "../../../../../core/utils/fonts/AppFonts";

const { width, fontScale } = Dimensions.get("window");
const mostSearchedCarStyles = StyleSheet.create({
  button: {
    alignSelf: "stretch",
    paddingHorizontal: 0,
    marginVertical: "10%",
    paddingVertical: "5%",
  },
  buttoTitle: {
    color: Colors.white,
    fontSize: fontScale * 14,
    fontFamily: AppFont.bold,
  },
  carModelTitle: {
    textAlign: getAlignment,
    fontFamily: AppFont.bold,
  },
  title: {
    marginTop: width * 0.04,
    textAlign: "left",
    fontFamily: AppFont.bold,
  },
  subTitle: {
    textAlign: "left",
    fontFamily: AppFont.light,
  },
  row: {
    width: "90%",
    paddingHorizontal: width * 0.05,
    paddingVertical: width * 0.03,
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: Colors.secondary,
    direction: getDirection,
    height: width * 0.4,
    borderRadius: 20,
    borderWidth: 0.2,
    borderColor: Colors.primaryDark,
  },
  imageContainer: {
    marginRight: width * 0.05,
  },
  brandimage: {
    flex: 1,
    width: width * 0.4,
    transform: [{ scale: 1.1 }],
    resizeMode: "stretch",
  },
});
export default mostSearchedCarStyles;
