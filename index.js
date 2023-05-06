import { registerRootComponent } from "expo";

import { setupServiceLocator } from "./Injection_Container";
import App from "./App";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { WEB_CLIENT_ID } from "./src/core/utils/constants";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
GoogleSignin.configure({ webClientId: WEB_CLIENT_ID });
setupServiceLocator();
registerRootComponent(App);
