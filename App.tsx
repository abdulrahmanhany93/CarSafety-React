import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import React from "react";
import { routes } from "./src/config/router/routes";
import LoginScreen from "./src/features/authentication/presentation/pages/loginScreen/login.screen";
import SignUpScreen from "./src/features/authentication/presentation/pages/signupScreen/signup.screen";
import ForgotPasswordScreen from "./src/features/authentication/presentation/pages/forgotPasswordScreen/forgotPasswrdScreen";
import HomeScreen from "./src/features/home/presentation/pages/homeScreen/home.screen";
import CarScreen from "./src/features/brand/presentation/pages/carScreen/car.screen";
import BrandScreen from "./src/features/brand/presentation/pages/brandScreen/brand.screen";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { store } from "./src/Logic/Store";
import { initilizeFonts } from "./src/core/utils/globalMethods";
import PDFViewer from "./src/core/components/pdf/PdfViewer";
import { firebase } from "@react-native-firebase/auth";
import { isUserLoggedIn } from "./src/core/utils/globalMethods";

const Navigation = createStackNavigator();

export default function App() {
  // Handle user state changes
  const [loaded] = initilizeFonts();
  return loaded ? (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation.Navigator
          initialRouteName={
            isUserLoggedIn() ? routes.LoginRoute : routes.HomeRoute
          }
          screenOptions={{
            title: "",
            headerTransparent: true,
          }}
        >
          {Screen(LoginScreen, routes.LoginRoute, false)}
          {Screen(SignUpScreen, routes.SignupRoute, false)}
          {Screen(ForgotPasswordScreen, routes.ForgotPasswordRoute, false)}
          {Screen(HomeScreen, routes.HomeRoute, false)}
          {Screen(BrandScreen, routes.BrandRoute, false)}
          {Screen(CarScreen, routes.CarRoute, false)}
          {Screen(PDFViewer, routes.PdfRoute, false)}
        </Navigation.Navigator>
      </NavigationContainer>
    </Provider>
  ) : (
    <></>
  );
}

export function Screen(component: any, name: string, withBackButton?: boolean) {
  return (
    <Navigation.Screen
      name={name}
      component={component}
      options={{
        headerShown: withBackButton ?? true,
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
