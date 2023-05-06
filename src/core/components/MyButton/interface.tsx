import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native/types";

interface MyButtonProps {
  title: string;
  trailingTitle?: string;
  titleStyle?: StyleProp<TextStyle>;
  buttonStyle?: any;

  onPress: () => void;
}
export default MyButtonProps;
