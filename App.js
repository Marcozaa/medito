import { StatusBar } from "expo-status-bar";
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import meditation1 from "./assets/meditationSplash.svg";
import googleIcon from "./assets/google-icon.png";
import discordIcon from "./assets/discord-icon.png";
import githubIcon from "./assets/github-icon.png";
import SocialButtonAuth from "./components/SocialButtonAuth";
import CredentialsInput from "./components/general/CredentialsInput";
import Ionicons from "@expo/vector-icons/Ionicons";
import ConfirmButton from "./components/general/ConfirmButton";
import SignIn from "./pages/SignIn";
import { NavigationContainer } from "@react-navigation/native";
import LogIn from "./pages/LogIn";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootSiblingParent } from "react-native-root-siblings";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="LogIn" component={LogIn} />
        </Stack.Navigator>
        {/* only this in app: 
  <AuthProvider>
      <Router />
    </AuthProvider>
  */}
      </NavigationContainer>
    </RootSiblingParent>
  );
}
