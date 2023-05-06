import * as React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

import Assets from "../../utils/assets.manager";
const { width,fontScale } = Dimensions.get("window");
export default function RatingComponent({
  rating,
  starColor,
  size,
}: {
  rating: number;
  starColor?: string;
  size?: number;
}) {
  const stars = Array.from({ length: 5 });
  return (
    <View style={suggestionCarStyle.starsSection}>
      {stars.map((_, i) => {
        const visible = i < rating;
        return (
          <Image
            key={i}
            source={Assets.starIcon}
            style={[
              suggestionCarStyle.star,

              {
                tintColor: starColor,
                width: size ?? fontScale * 13,
                height: size ?? fontScale * 13,
                opacity: visible ? 1 : 0.5,
              },
            ]}
          />
        );
      })}
    </View>
  );
}
const suggestionCarStyle = StyleSheet.create({
  starsSection: {
    flexDirection: "row",
    justifyContent: "center",
   
  },
  star: {
    marginHorizontal: 2,
    
  },
});
