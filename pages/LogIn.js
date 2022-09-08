import React, { useEffect, useRef } from "react";
import { Image, Text, View, Animated } from "react-native";
import Circle from "../components/general/Circle.js";
import styles from "../styles/pagesStyle/logIn/LogIn.js";
import Ionicons from "@expo/vector-icons/Ionicons";
import CredentialsInput from "../components/general/CredentialsInput.js";
import ConfirmButton from "../components/general/ConfirmButton.js";

export default function LogIn({ navigation }) {
  return (
    <View style={styles.container}>
      <Animated.View style={styles.topView}>
        <Circle size={150} top={200} color={"#DBA196"} />
        <Circle size={25} top={50} left={-100} color={"#8E5449"} />
        <Circle size={45} top={80} left={80} color={"#FFEDE2"} />

        <Image
          style={styles.tinyLogo}
          source={require("../assets/images/meditationBnW.png")}
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
            <Ionicons name="arrow-forward-outline" size={25} color={"white"} />
          </View>
        </View>
        <View style={styles.bottomViewContent}>
          <CredentialsInput
            children={<Ionicons name="at-outline" size={25} color={"grey"} />}
            type={"Email"}
          />
          <CredentialsInput
            children={
              <Ionicons name="lock-closed-outline" size={25} color={"grey"} />
            }
            type={"Password"}
          />
          <ConfirmButton text={"Login"} />
        </View>
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
  );
}
