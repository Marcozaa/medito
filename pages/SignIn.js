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
import meditation1 from "../assets/meditationSplash.svg";
import googleIcon from "../assets/google-icon.png";
import discordIcon from "../assets/discord-icon.png";
import githubIcon from "../assets/github-icon.png";
import SocialButtonAuth from "../components/SocialButtonAuth";
import CredentialsInput from "../components/general/CredentialsInput";
import Ionicons from "@expo/vector-icons/Ionicons";
import ConfirmButton from "../components/general/ConfirmButton";

export default function SignIn({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          alignItems: "center",
        }}
        behavior={"position"}
      >
        <View style={styles.container}>
          <Image
            style={styles.tinyLogo}
            source={require("../assets/images/meditationSplash.png")}
          />
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>
              Sign up to{" "}
              <Text style={{ fontWeight: "900", color: "#FAE1DC" }}>
                Medito
              </Text>
            </Text>
            <View style={styles.signUpInputs}>
              <CredentialsInput
                children={
                  <Ionicons name="at-outline" size={25} color={"grey"} />
                }
                type={"Email"}
              />
              <CredentialsInput
                children={
                  <Ionicons name="person-outline" size={25} color={"grey"} />
                }
                type={"Full name"}
              />
              <CredentialsInput
                children={
                  <Ionicons
                    name="lock-closed-outline"
                    size={25}
                    color={"grey"}
                  />
                }
                type={"Password"}
              />
            </View>
            <Text style={styles.disclaimer}>
              by signing up you agree to our{" "}
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >
                terms of service
              </Text>{" "}
              and our{" "}
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >
                privacy policy
              </Text>
            </Text>
            <ConfirmButton text={"Continue"} />
          </View>

          <View style={styles.logIn}>
            <Text style={{ color: "grey" }}>
              Joined us before?{" "}
              <Text
                onPress={() => navigation.navigate("LogIn", { name: "Jane" })}
                style={{
                  fontWeight: "bold",

                  color: "#FAE1DC",
                }}
              >
                Login
              </Text>
            </Text>
          </View>

          <StatusBar style="auto" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 250,
    height: 250,
  },
  signUpContainer: {
    width: "100%",
    paddingHorizontal: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  signUpText: {
    fontWeight: "600",
    fontSize: "35rem",
  },
  disclaimer: {
    color: "grey",
    fontSize: 12,
  },
  signUpInputs: {
    marginVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  logIn: {
    position: "absolute",
    bottom: 50,
  },
});
