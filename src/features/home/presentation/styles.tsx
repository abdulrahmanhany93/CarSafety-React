import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../../core/utils/colors";
import { getAlignment, getDirection } from "../../../core/utils/constants";
const { width } = Dimensions.get("window");
const homeScreenSyles = StyleSheet.create({
  searcBar: {
    margin: width * 0.05,
    borderRadius: 15,
    borderColor: Colors.primaryDark,
    borderWidth: 0.2,
    direction: getDirection,
    backgroundColor: Colors.secondary,
  },
});
export default homeScreenSyles;
