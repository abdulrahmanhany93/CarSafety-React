import { Car } from "../../../domain/entities/car";
import { FlatList } from "react-native-gesture-handler";
import SuggestionCarCard from "./suggetion.car.card";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../../../../../Logic/Slices/hooks";
import LoadingView from "../../../../../core/components/loadingComponent/loadingView";
import { routes } from "../../../../../config/router/routes";

export default function SuggestionCars() {
  const navigator = useNavigation();
  const { randomCars: cars, loadingRandomCars } = useAppSelector(
    (state) => state.home
  );

  return (
    <>
      {loadingRandomCars ? (
        <LoadingView />
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={cars}
          keyExtractor={(item) =>
            Math.floor(Math.random() * 100000000).toString()
          }
          renderItem={({ item: car }) => {
            return (
              <SuggestionCarCard
                car={car}
                onPress={() => {
                  navigator.navigate(routes.CarRoute, car);
                }}
              />
            );
          }}
        />
      )}
    </>
  );
}
