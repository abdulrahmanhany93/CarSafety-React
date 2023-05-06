import { Dimensions, Platform, StatusBar, StyleSheet } from "react-native";
import AppFont from "../../../../../core/utils/fonts/AppFonts";
import { getAlignment } from "../../../../../core/utils/constants";
import Colors from "../../../../../core/utils/colors";

const { width, fontScale } = Dimensions.get("window");
const carScreenStyles = StyleSheet.create({
  rateLabel: {
    width: width * 0.2,
    height: width * 0.2,

    marginVertical: width * 0.05,
    borderRadius: 15,

    justifyContent: "center",
    backgroundColor: "#FEDE00",
  },
  rateLabelPercentageText: {
    textAlign: "center",
    alignSelf: "flex-end",
    marginHorizontal: width * 0.05,
    fontSize: fontScale * 18,
    fontFamily: AppFont.bold,
  },
  rateLabelSection: {
    flex: 1,
    marginHorizontal: width * 0.05,
  },
  rateLabelPercentageContainer: {
    position: "absolute",
    right: 0,
    top: width * 0.09,
    width: width * 0.3,
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: "center",

    borderColor: "#FEDE00",

    bottom: width * 0.12,
  },
  rateLabelIcon: {
    resizeMode: "contain",
    flex: 0.7,
    alignSelf: "center",
  },
  rateLabelTitle: {
    alignSelf: "flex-start",
    marginHorizontal: width * 0.05,
    fontFamily: AppFont.bold,
    fontSize: fontScale * 12,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: width * 0.04,
  },

  carImage: {
    resizeMode: "contain",
  },
  carDescription: {
    fontFamily: AppFont.light,

    lineHeight: fontScale * 24,
    textAlign: getAlignment,
    marginHorizontal: width * 0.04,
    fontSize: fontScale * 16,
  },
  carsPageView: {
    width: width,
    aspectRatio: 16 / 10,
    marginVertical: width * 0.09,
  },
  backArrowContainer: {
    position: "absolute",
    top: width * 0.1,
    left: width * 0.02,
    alignSelf: "flex-start",
  },
  carContainer: {
    paddingBottom: "7%",
    justifyContent: "center",
    alignContent: "center",
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    backgroundColor: Colors.secondary,
  },
});
export default carScreenStyles;
