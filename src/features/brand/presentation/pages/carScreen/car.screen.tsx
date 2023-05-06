import { Text } from "react-native-paper";
import * as React from "react";

import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Dimensions, Platform, StatusBar } from "react-native";
import Colors from "../../../../../core/utils/colors";

import CarImagesPageView from "../../components/car.images.pageview";

import HeaderTitle from "../../../../../core/components/HeaderTitle/header.title";
import RatingComponent from "../../../../../core/components/rating/rating";
import AppStrings from "../../../../../core/utils/App.Strings";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Assets from "../../../../../core/utils/assets.manager";
import RateLabel from "../../components/rate.label";
import TextButton from "../../../../../core/components/MyButton/MyButton";

import carScreenStyles from "./styles";
import BackArrow from "../../../../../core/components/backArrow/back.arrow";
import { Car } from "../../../../home/domain/entities/car";
import { routes } from "../../../../../config/router/routes";

const { width } = Dimensions.get("window");

export default function CarScreen() {
  const navigator = useNavigation();
  const car = useRoute().params as Car;

  const data = [
    {
      title: AppStrings.ADULT,
      icon: Assets.adultIcon,
      rate: car.adultOccupant,
      color: Colors.yellow,
    },
    {
      title: AppStrings.CHILDREEN,
      icon: Assets.childreenIcon,
      rate: car.childOccupant,
      color: Colors.blue,
    },
    {
      title: AppStrings.STREET_WALKER,
      icon: Assets.walkerIcon,
      rate: car.vulnerableRoadUsers,
      color: Colors.purple,
    },
    {
      title: AppStrings.SAFETY_Assistants,
      icon: Assets.safetyIcon,
      rate: car.safetyAssist,
      color: Colors.green,
    },
  ];
  return (
    <ScrollView bounces={false} alwaysBounceVertical={false}>
      <View style={carScreenStyles.carContainer}>
        <CarImagesPageView carImages={car.images} />
      </View>

      <HeaderTitle title={car.brand.name + " " + car.carType} />
      <Text style={carScreenStyles.carDescription}>{car.description}</Text>
      <View style={carScreenStyles.row}>
        <RatingComponent
          rating={car.rating}
          starColor={Colors.yellow}
          size={width * 0.06}
        />
        <HeaderTitle title={AppStrings.SAFETY_RATES} />
      </View>
      <FlatList
        data={data}
        scrollEnabled={false}
        numColumns={2}
        renderItem={({ item }) => (
          <RateLabel
            rate={item.rate}
            icon={item.icon}
            title={item.title}
            color={item.color}
          />
        )}
      />
      <TextButton
        title={AppStrings.SHOW_MORE_DETAILS}
        onPress={() => {
          console.log(car.pdfUrl);
          navigator.navigate(routes.PdfRoute, { url: car.pdfUrl });
        }}
        buttonStyle={{ marginVertical: "5%" }}
      />

      <BackArrow style={carScreenStyles.backArrowContainer} />
    </ScrollView>
  );
}
