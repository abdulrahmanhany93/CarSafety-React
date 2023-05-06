import React from "react";
import { FlatList } from "react-native";
import Brand from "../../../domain/entities/brand";

import BrandContainer from "./brand.container";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../../../../../config/router/routes";
import { carsGenerator } from "../../../../../core/utils/constants";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../Logic/Slices/hooks";
import LoadingView from "../../../../../core/components/loadingComponent/loadingView";

export default function BrandsList({ brands }: { brands: Brand[] }) {
  const navigator = useNavigation();
  const { loadingBrands } = useAppSelector((state) => state.home);
  return (
    <>
      {loadingBrands ? (
        <LoadingView />
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={brands}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <BrandContainer
              brand={item}
              onPress={() => {
                navigator.navigate(routes.BrandRoute, item);
              }}
            />
          )}
        />
      )}
    </>
  );
}
