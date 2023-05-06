import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Brand from "../../../domain/entities/brand";
import Colors from "../../../../../core/utils/colors";
import Assets from "../../../../../core/utils/assets.manager";
import NetworkImage from "../../../../../core/components/myImage/network.image";

const { width } = Dimensions.get("window");
export default function BrandContainer({
  brand,
  onPress,
}: {
  brand: Brand;
  onPress: () => void;
}) {
  return (
    <>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <View style={styles.brandContainer}>
          <NetworkImage url={brand.image} style={styles.brandimage} />
        </View>
      </TouchableOpacity>
    </>
  );
}
const styles = StyleSheet.create({
  brandContainer: {
    marginHorizontal: width * 0.03,
    backgroundColor: Colors.secondary,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: Colors.primaryDark,
    padding: width * 0.03,
  },
  brandimage: {
    width: width * 0.17,
    height: width * 0.17,
    resizeMode: "contain",
  },
});
