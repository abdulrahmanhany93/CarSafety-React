import * as React from "react";
import { View, StyleSheet, Image, Dimensions, Pressable } from "react-native";

import { Car } from "../../../domain/entities/car";
import {
  brands,
  getAlignment,
  getDirection,
} from "../../../../../core/utils/constants";
import Colors from "../../../../../core/utils/colors";
import { Text } from "react-native-paper";
import AppFont from "../../../../../core/utils/fonts/AppFonts";
import TextButton from "../../../../../core/components/MyButton/MyButton";
import mostSearchedCarStyles from "./styles";
import AppStrings from "../../../../../core/utils/App.Strings";
import NetworkImage from "../../../../../core/components/myImage/network.image";
import { useAppSelector } from "../../../../../Logic/Slices/hooks";
import LoadingView from "../../../../../core/components/loadingComponent/loadingView";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../../../../../config/router/routes";
const { width } = Dimensions.get("window");
export default function MostSearchedCar() {
  const navigator = useNavigation();
  const { mostSearchedCar: car, loadingMostSearchedCar } = useAppSelector(
    (state) => state.home
  );
  return loadingMostSearchedCar ? (
    <LoadingView />
  ) : (
    <View style={mostSearchedCarStyles.row}>
      <View style={mostSearchedCarStyles.imageContainer}>
        <NetworkImage
          url="https://freepngimg.com/thumb/car/4-2-car-png-hd.png"
          style={mostSearchedCarStyles.brandimage}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text variant="labelLarge" style={mostSearchedCarStyles.carModelTitle}>
          {car.brand.name} {car.carType}
        </Text>
        <Text variant="labelMedium" style={mostSearchedCarStyles.title}>
          {AppStrings.OVERVIEW}
        </Text>
        <Text
          variant="labelSmall"
          style={mostSearchedCarStyles.subTitle}
          numberOfLines={2}
        >
          {car.description}
        </Text>
        <TextButton
          title={AppStrings.SHOW_DETAILS}
          onPress={() => {
            navigator.navigate(routes.CarRoute, car);
          }}
          buttonStyle={mostSearchedCarStyles.button}
          titleStyle={mostSearchedCarStyles.buttoTitle}
        />
      </View>
    </View>
  );
}
