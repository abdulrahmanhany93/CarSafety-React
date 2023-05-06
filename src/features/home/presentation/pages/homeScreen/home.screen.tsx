import { Dimensions } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import Colors from "../../../../../core/utils/colors";
import HeaderTitle from "../../../../../core/components/HeaderTitle/header.title";
import AppStrings from "../../../../../core/utils/App.Strings";
import {
  carsGenerator,
  getAlignment,
  userImage,
} from "../../../../../core/utils/constants";
import BrandsList from "../../components/brandsList/brands.list";
import homeScreenSyles from "../../styles";
import MostSearchedCar from "../../components/mostSearchedCar/most.searched.car";
import SuggestionCars from "../../components/suggestionCars/suggestion.cars";
import UserBar from "../../components/userBar/user.bar";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../Logic/Slices/hooks";

import {
  getBrands,
  getMostSearchedCar,
  getRandomCars,
} from "../../../../../Logic/Slices/home/HomeThunks";

export default function HomeScreen() {
  const { user } = useAppSelector((state) => state.auth);
  const { brands } = useAppSelector((state) => state.home);

  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(getBrands());
    dispatch(getMostSearchedCar());
    dispatch(getRandomCars());
  }, [user]);
  return (
    <ScrollView bounces={false}>
      <SafeAreaView>
        <UserBar
          title={`مرحبا, ${user.displayName ?? "زائر"}`}
          subtitle="كيف يمكننا مساعدتك اليوم؟"
          userPhotoUrl={user.photoURL || userImage}
        />
        <Searchbar
          style={homeScreenSyles.searcBar}
          textAlign={getAlignment}
          placeholder={AppStrings.WHAT_YOU_SEARCHING_FOR}
          placeholderTextColor={Colors.primaryDark}
          value={""}
        />
        <HeaderTitle title={AppStrings.BRANDS} />
        <BrandsList brands={brands} />
        <HeaderTitle title={AppStrings.MOST_SEARCHED_CARS} />
        <MostSearchedCar />
        <HeaderTitle title={AppStrings.MAYBE_YOU_LIKE} />
        <SuggestionCars />
      </SafeAreaView>
    </ScrollView>
  );
}
