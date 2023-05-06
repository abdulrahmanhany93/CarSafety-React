import { Image, View, useWindowDimensions } from "react-native";
import Assets from "../../../../core/utils/assets.manager";
export default function LoginScreenContainer() {
  const { width, height } = useWindowDimensions();
  return (
    <View>
      <Image
        source={Assets.loginScreenBackground}
        style={{
          borderRadius: 30,
          height: height * 0.3,
          width: "100%",
        }}
      />
      <Image
        source={Assets.appLogo}
        style={{
          position: "absolute",
          top: "35%",
          width: width * 0.25,
          height: width * 0.25,
          resizeMode: "contain",
          alignSelf: "center",
        }}
      />
    </View>
  );
}
