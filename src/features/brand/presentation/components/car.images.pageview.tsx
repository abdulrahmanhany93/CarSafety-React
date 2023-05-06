import PagerView from "react-native-pager-view";
import { Dimensions, Image, StyleSheet } from "react-native";
import { useState } from "react";
import { carsGenerator } from "../../../../core/utils/constants";
import Assets from "../../../../core/utils/assets.manager";
import Indicator from "./indicator";
import NetworkImage from "../../../../core/components/myImage/network.image";
const { width } = Dimensions.get("window");
function CarImagesPageView({ carImages }: { carImages: string[] }) {
  const [currentCar, setCurrentCar] = useState<number>(0);
  return (
    <>
      <PagerView
        style={styles.carsPageView}
        onPageSelected={(n) => {
          setCurrentCar(n.nativeEvent.position);
        }}
      >
        {carImages.map((carUrl, i) => (
          <NetworkImage key={i} url={carUrl} style={styles.carImage} />
        ))}
      </PagerView>
      <Indicator imagesLength={carImages.length} currentImage={currentCar} />
    </>
  );
}
const styles = StyleSheet.create({
  carImage: {
    resizeMode: "cover",
    marginTop: width * 0.2,
  },
  carsPageView: {
    width: width,

    aspectRatio: 16 / 12,
  },
});
export default CarImagesPageView;
