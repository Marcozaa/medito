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
import client from "../api/client";
import { Formik } from "formik";
import meditation1 from "../assets/meditationSplash.svg";
import googleIcon from "../assets/google-icon.png";
import discordIcon from "../assets/discord-icon.png";
import githubIcon from "../assets/github-icon.png";
import SocialButtonAuth from "../components/SocialButtonAuth";
import CredentialsInput from "../components/general/CredentialsInput";
import Ionicons from "@expo/vector-icons/Ionicons";
import ConfirmButton from "../components/general/ConfirmButton";
import { signUpValidationSchema } from "./schemas/CredentialsValidationSchema";
export default function SignIn({ navigation }) {
  const signUp = async (values, formikActions) => {
    console.log(values);
    // Post request to the API
    const res = await client.post("/users", {
      ...values, // (username,password,email)
    });

    console.log(res);
    console.log(res.data);
    formikActions.resetForm();
    formikActions.setSubmitting(false);
  };

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
          <Formik
            validationSchema={signUpValidationSchema}
            initialValues={{ email: "", name: "", password: "" }}
            onSubmit={signUp}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isSubmitting,
            }) => (
              <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>
                  Sign up to{" "}
                  <Text style={{ fontWeight: "900", color: "#FAE1DC" }}>
                    Medito
                  </Text>
                </Text>
                <View style={styles.signUpInputs}>
                  <CredentialsInput
                    onBlur={handleBlur("email")}
                    handleChange={handleChange("email")}
                    value={values.email}
                    children={
                      <Ionicons name="at-outline" size={25} color={"grey"} />
                    }
                    type={"Email"}
                  />
                  {errors.email && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.email}
                    </Text>
                  )}
                  <CredentialsInput
                    onBlur={handleBlur("name")}
                    handleChange={handleChange("name")}
                    value={values.name}
                    children={
                      <Ionicons
                        name="person-outline"
                        size={25}
                        color={"grey"}
                      />
                    }
                    type={"Full name"}
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
                <ConfirmButton handleSubmit={handleSubmit} text={"Continue"} />
              </View>
            )}
          </Formik>

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
