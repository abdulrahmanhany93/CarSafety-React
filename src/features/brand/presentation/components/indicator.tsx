import { StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../../../core/utils/colors";

const { width } = Dimensions.get("window");
export default function Indicator({
  imagesLength,
  currentImage,
}: {
  imagesLength: number;
  currentImage: number;
}) {
  return (
    <View style={styles.indicatorContainer}>
      {Array.from<string>({ length: imagesLength }).map((car, i) => (
        <View
          key={i}
          style={[
            styles.indicator,
            {
              backgroundColor:
                currentImage === i ? Colors.black : "transparent",
            },
          ]}
        ></View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  indicator: {
    width: width * 0.03,
    height: width * 0.03,
    marginHorizontal: width * 0.02,
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 10,
  },
});
