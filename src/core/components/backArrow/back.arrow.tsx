import { IconButton } from "react-native-paper";
import carScreenStyles from "../../../features/brand/presentation/pages/carScreen/styles";
import {
  Dimensions,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../utils/colors";
const { width } = Dimensions.get("window");
export default function BackArrow({ style }: { style?: any }) {
  const navigator = useNavigation();
  return (
    <View style={[styles.container, style]}>
      <IconButton icon={"arrow-left"} onPress={() => navigator.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    alignSelf: "flex-start",
    borderRadius: 15,
  },
});
