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
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import client from "./api/client";
import Home from "./pages/Home";
import useAuthStore from "./store/store";
const Stack = createNativeStackNavigator();

export default function App() {
  const isSignedIn = useAuthStore((state) => state.authorized);
  const setAuthorization = useAuthStore((state) => state.setIsAuthorized);

  // delete value of jwt token in localstorage - testing purposes
  async function deleteToken(key) {
    let result = await SecureStore.deleteItemAsync(key);
    if (result) {
      //alert("🔐 Here's your value 🔐 \n" + result);
      return result;
    } else {
      //alert("No values stored under that key.");
    }
  }

  const checkAuth = async () => {
    // Get jwt token from securestore
    let token = await SecureStore.getItemAsync("jwttoken");

    // Send a post request to verify authorization
    const res = await client.post(
      "/auth",
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    // If the server accepted the token, the user is authorized
    if (res.data.message === "authorized") {
      setAuthorization(); // The global state is updated
    }
  };

  useEffect(() => {
    // deleteToken("jwttoken"); // TESTING
    checkAuth();
  }, []);

  return (
    <RootSiblingParent>
      <NavigationContainer>
        {isSignedIn ? (
          <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
          </>
        ) : (
          <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="LogIn" component={LogIn} />
            </Stack.Navigator>
          </>
        )}
      </NavigationContainer>
    </RootSiblingParent>
  );
}
