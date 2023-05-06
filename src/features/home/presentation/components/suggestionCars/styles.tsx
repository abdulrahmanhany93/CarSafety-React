import {
  getAlignment,
  getDirection,
} from "../../../../../core/utils/constants";
import Colors from "../../../../../core/utils/colors";
import AppFont from "../../../../../core/utils/fonts/AppFonts";
import { StyleSheet, Dimensions } from "react-native";
const { width, fontScale } = Dimensions.get("window");
const suggestionCarStyle = StyleSheet.create({
  showDetailsButtonText: {
    color: Colors.primary,
    fontSize: fontScale * 13,
    fontFamily: AppFont.bold,
  },
  showDetailsButton: {
    backgroundColor: Colors.white,
    alignSelf: "center",
    paddingHorizontal: "20%",

    paddingVertical: "3%",
  },

  buttoTitle: {
    color: Colors.white,
    fontSize: fontScale * 14,
    fontFamily: AppFont.bold,
  },
  row: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
  starsSection: {
    flexDirection: "row",
    justifyContent: "center",
  },
  star: {
    width: width * 0.04,
    height: width * 0.04,
    marginHorizontal: 2,
  },
  container: {
    flex: 1,
    marginTop: width * 0.15,
    backgroundColor: Colors.secondary,
    marginHorizontal: width * 0.02,
    paddingTop: width * 0.08,
    paddingBottom: width * 0.02,
    width: width * 0.42,
    borderRadius: 20,
  },
  title: {
    textAlign: getAlignment,
    color: Colors.white,
    writingDirection: getDirection,
    fontSize: fontScale * 14,
    fontFamily: AppFont.bold,
  },
  subTitle: {
    textAlign: getAlignment,
    color: Colors.secondary,
    fontFamily: AppFont.light,
  },
  carImage: {
    position: "absolute",
    transform: [{ scale: 1.1 }],
    top: 0,
    left: "5%",
    right: "5%",

    height: width * 0.3,
    resizeMode: "contain",
  },
});
export default suggestionCarStyle;
