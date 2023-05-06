import { LinearGradient } from "expo-linear-gradient";
import Assets from "../../../../core/utils/assets.manager";
import { Car } from "../../../home/domain/entities/car";
import suggestionCarStyle from "../../../home/presentation/components/suggestionCars/styles";
import { Card, Text } from "react-native-paper";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import { getAlignment } from "../../../../core/utils/constants";
import AppFont from "../../../../core/utils/fonts/AppFonts";
import NetworkImage from "../../../../core/components/myImage/network.image";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../../../../config/router/routes";
const { width, fontScale } = Dimensions.get("window");
export default function BrandSectionCar({ car }: { car: Car }) {
  const navigator = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigator.navigate(routes.CarRoute, car)}
    >
      <View>
        <LinearGradient
          start={{ x: 0.0, y: 0.5 }}
          end={{ x: 0.5, y: 1.0 }}
          locations={[0, 1]}
          colors={["#29323C", "#485563"]}
          style={styles.container}
        >
          <Card.Title
            title={car.name}
            leftStyle={{ flex: 1 }}
            titleStyle={styles.title}
          />
        </LinearGradient>
        <NetworkImage url={car.images[0]} style={suggestionCarStyle.carImage} />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  title: {
    textAlign: getAlignment,
    color: Colors.white,
    fontSize: fontScale * 16,
    fontFamily: AppFont.bold,
  },

  container: {
    flex: 1,
    marginTop: width * 0.15,
    backgroundColor: Colors.secondary,
    marginHorizontal: width * 0.02,
    paddingTop: width * 0.1,
    paddingBottom: width * 0.02,
    width: width * 0.42,
    borderRadius: 20,
  },
});
