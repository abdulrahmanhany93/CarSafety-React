import * as React from "react";
import { View, Image } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { Car } from "../../../domain/entities/car";

import { Card, Text } from "react-native-paper";
import Assets from "../../../../../core/utils/assets.manager";
import TextButton from "../../../../../core/components/MyButton/MyButton";
import AppStrings from "../../../../../core/utils/App.Strings";
import suggestionCarStyle from "./styles";
import RatingComponent from "../../../../../core/components/rating/rating";
import NetworkImage from "../../../../../core/components/myImage/network.image";

export default function SuggestionCarCard({
  car,
  onPress,
}: {
  car: Car;
  onPress: () => void;
}) {
  return (
    <View>
      <LinearGradient
        start={{ x: 0.0, y: 0.5 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0, 1]}
        colors={["#29323C", "#485563"]}
        style={suggestionCarStyle.container}
      >
        <Card.Title
          title={car.brand.name}
          titleStyle={suggestionCarStyle.title}
          subtitle={car.name}
          subtitleStyle={suggestionCarStyle.subTitle}
        />

        <View style={suggestionCarStyle.row}>
          <RatingComponent rating={car.rating} />
          <Text style={suggestionCarStyle.title}>
            {car.seatesNumber} {AppStrings.seats}
          </Text>
        </View>
        <View style={suggestionCarStyle.row}>
          <Text style={suggestionCarStyle.title}>{car.carType}</Text>
          <Text style={suggestionCarStyle.title}>
            {AppStrings.ENGINE_TYPE + ":"}
          </Text>
        </View>
        <TextButton
          title={AppStrings.SHOW_DETAILS}
          onPress={onPress}
          buttonStyle={suggestionCarStyle.showDetailsButton}
          titleStyle={suggestionCarStyle.showDetailsButtonText}
        />
      </LinearGradient>
      <NetworkImage url={car.images[0]!} style={suggestionCarStyle.carImage} />
    </View>
  );
}
