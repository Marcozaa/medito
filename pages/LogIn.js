import React, { useEffect, useRef } from "react";
import {
  Image,
  Text,
  View,
  Animated,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import Circle from "../components/general/Circle.js";
import styles from "../styles/pagesStyle/logIn/LogIn.js";
import Ionicons from "@expo/vector-icons/Ionicons";
import CredentialsInput from "../components/general/CredentialsInput.js";
import ConfirmButton from "../components/general/ConfirmButton.js";
import client from "../api/client";
import { Formik } from "formik";
import Toast from "react-native-root-toast";
import * as SecureStore from "expo-secure-store";
import { signUpValidationSchema } from "./schemas/CredentialsValidationSchema.js";
import { SvgUri } from "react-native-svg";
import useAuthStore from "../store/store.js";
import useUserStore from "../store/userStore.js";
export default function LogIn({ navigation }) {
  // Access zustand global state
  const setAuthorization = useAuthStore((state) => state.setIsAuthorized);

  // Save jwt on local storage
  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  function addToast(message) {
    // Add a Toast on screen.
    let toast = Toast.show(message, {
      duration: Toast.durations.LONG,
      position: Toast.positions.CENTER,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
      onShow: () => {
        // calls on toast\`s appear animation start
      },
      onShown: () => {
        // calls on toast\`s appear animation end.
      },
      onHide: () => {
        // calls on toast\`s hide animation start.
      },
      onHidden: () => {
        // calls on toast\`s hide animation end.
      },
    });
  }

  const logIn = async (values, formikActions) => {
    // Post request to the API
    const res = await client.post("/users/login", {
      ...values, // (email,password)
    });

    addToast(res.data.message);
    // If the user is succesfully logged
    if (res.data.message == "Success") {
      save("email", values.email);

      setAuthorization();
    }
    save("username", res.data.username);
    save("jwttoken", res.data.token);
    formikActions.resetForm();
    formikActions.setSubmitting(false);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FAE1DC" }}>
      <KeyboardAvoidingView
        style={{ backgroundColor: "#FAE1DC" }}
        behavior={"position"}
      >
        <View style={styles.container}>
          <Animated.View style={styles.topView}>
            <Circle size={150} top={200} color={"#DBA196"} />
            <Circle size={25} top={50} left={-100} color={"#8E5449"} />
            <Circle size={45} top={80} left={80} color={"#FFEDE2"} />

            <Image
              style={styles.tinyLogo}
              source={require("../assets/images/warmup-for-running-illustration.png")}
            />
          </Animated.View>

          <View style={styles.bottomView}>
            <View style={styles.bottomViewTop}>
              <View style={styles.bottomViewHeader}>
                <Text style={{ fontWeight: "700", fontSize: 25 }}>
                  Welcome Back!
                </Text>
                <Text
                  style={{
                    fontWeight: "400",
                    fontSize: 20,
                    color: "#F4BAAF",
                  }}
                >
                  Login to your account
                </Text>
              </View>
              <View style={styles.arrowNext}>
                <Ionicons
                  name="arrow-forward-outline"
                  size={25}
                  color={"white"}
                />
              </View>
            </View>
            <Formik
              validationSchema={signUpValidationSchema}
              initialValues={{ email: "", password: "" }}
              onSubmit={logIn}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isSubmitting,
              }) => (
                <View style={styles.bottomViewContent}>
                  <CredentialsInput
                    onBlur={handleBlur("email")}
                    handleChange={handleChange("email")}
                    value={values.email}
                    children={
                      <Ionicons name="at-outline" size={25} color={"grey"} />
                    }
                    type={"Email"}
                  />
                  <CredentialsInput
                    onBlur={handleBlur("password")}
                    handleChange={handleChange("password")}
                    value={values.password}
                    children={
                      <Ionicons
                        name="lock-closed-outline"
                        size={25}
                        color={"grey"}
                      />
                    }
                    type={"Password"}
                  />
                  <ConfirmButton handleSubmit={handleSubmit} text={"Login"} />
                </View>
              )}
            </Formik>
            <Text style={{ color: "grey" }}>
              Do not have an account?{" "}
              <Text
                onPress={() => navigation.navigate("SignIn", { name: "Jane" })}
                style={{
                  fontWeight: "bold",

                  color: "#FAE1DC",
                }}
              >
                Sign up
              </Text>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
