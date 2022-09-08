import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function AppStack() {
  // User is logged in and can use the app main functions
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Home Screen" component={HomeScreen} />*/}
    </Stack.Navigator>
  );
}
