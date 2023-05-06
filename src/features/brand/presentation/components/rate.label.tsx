import { Dimensions, Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Assets from "../../../../core/utils/assets.manager";
import AppFont from "../../../../core/utils/fonts/AppFonts";
const { width, fontScale } = Dimensions.get("window");
export default function RateLabel({
  rate,
  icon,
  title,
  color,
}: {
  rate: number;
  icon: any;
  title: string;
  color: string;
}) {
  return (
    <View style={styles.rateLabelSection}>
      <View
        style={[styles.rateLabelPercentageContainer, { borderColor: color }]}
      >
        <Text style={[styles.rateLabelPercentageText, { color: color }]}>
          {rate} %
        </Text>
      </View>
      <View style={[styles.rateLabel, { backgroundColor: color }]}>
        <Image source={icon} style={styles.rateLabelIcon} />
      </View>
      <Text style={[styles.rateLabelTitle]}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  rateLabel: {
    width: width * 0.2,
    height: width * 0.2,

    marginVertical: width * 0.05,
    borderRadius: 15,

    justifyContent: "center",
  },
  rateLabelPercentageText: {
    textAlign: "center",
    alignSelf: "flex-end",
    marginHorizontal: width * 0.05,
    fontSize: fontScale * 20,
    fontFamily: AppFont.extraBold,
  },
  rateLabelSection: {
    flex: 1,
    marginHorizontal: width * 0.05,
  },
  rateLabelPercentageContainer: {
    position: "absolute",
    right: 0,

    top: "25%",
    width: width * 0.3,
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: "center",

    bottom: width * 0.12,
  },
  rateLabelIcon: {
    resizeMode: "contain",
    flex: 0.7,
    alignSelf: "center",
  },
  rateLabelTitle: {
    alignSelf: "flex-start",
    marginHorizontal: width * 0.05,
    fontFamily: AppFont.bold,
    fontSize: fontScale * 12,
  },
});
