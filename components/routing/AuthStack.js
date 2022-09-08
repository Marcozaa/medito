import React from "react";

export default function AuthStack() {
  // user needs to be authenticated
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Sign In" component={SignIn} />
      <Stack.Screen name="LogIn" component={LogIn} />
    </Stack.Navigator>
  );
}
