import { Card, Divider, Text } from "react-native-paper";

import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Dimensions, StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { FlatList, ScrollView } from "react-native-gesture-handler";
import BackArrow from "../../../../../core/components/backArrow/back.arrow";
import Brand from "../../../../home/domain/entities/brand";
import AppFont from "../../../../../core/utils/fonts/AppFonts";

import BrandSectionCar from "../../components/brand.section.card";
import HeaderTitle from "../../../../../core/components/HeaderTitle/header.title";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../Logic/Slices/hooks";
import React from "react";
import LoadingView from "../../../../../core/components/loadingComponent/loadingView";
import { getSections } from "../../../../../Logic/Slices/Brand/BrandThunks";

const { width, fontScale } = Dimensions.get("window");

export default function BrandScreen() {
  const navigator = useNavigation();
  const brand = useRoute().params as Brand;
  const { sections, loading } = useAppSelector((state) => state.brand);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(getSections(brand));
  }, [brand]);
  return !loading ? (
    <ScrollView bounces={false} alwaysBounceVertical={false}>
      <SafeAreaView style={styles.row}>
        <BackArrow style={styles.backArrow} />
        <Text variant="labelLarge" style={styles.brandTitle}>
          {brand.name}
        </Text>
      </SafeAreaView>
      {sections.map((item, index) => {
        console.log(item.cars[0].images);

        return (
          <View>
            <HeaderTitle title={item.year} />
            <Divider style={styles.divider} />
            <FlatList
              data={item.cars}
              keyExtractor={(item) => item.name}
              scrollEnabled={false}
              numColumns={2}
              style={{
                alignSelf: item.cars.length <= 1 ? "flex-end" : "center",
              }}
              renderItem={({ item: car }) => (
                <BrandSectionCar car={car} key={car.id} />
              )}
            />
          </View>
        );
      })}
    </ScrollView>
  ) : (
    <LoadingView />
  );
}
const styles = StyleSheet.create({
  brandTitle: {
    fontSize: fontScale * 18,
    fontFamily: AppFont.bold,
  },
  divider: {
    alignSelf: "flex-end",
    width: width * 0.1,
    height: 2,
    marginHorizontal: width * 0.05,
    backgroundColor: "#0166B1",
  },
  row: {
    flexDirection: "row",

    alignItems: "center",
  },
  backArrow: {
    marginHorizontal: width * 0.04,
  },
});
