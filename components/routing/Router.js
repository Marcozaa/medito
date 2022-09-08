/**
 * component responsible for choose which stack show depending on whether
 * the user is authenticated or not.
 */

import { NavigationContainer } from "@react-navigation/native";

import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";

export const Router = () => {
  //More explanations about "authData" below
  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
