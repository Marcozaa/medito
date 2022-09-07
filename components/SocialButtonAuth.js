import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
export default function SocialButtonAuth({ image, socialName }) {
  return (
    <View style={styles.AuthButton}>
      <Image style={styles.tinyLogo} source={image} />
      <Text style={styles.signInText}>Sign in with {socialName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  AuthButton: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
    backgroundColor: "#FAE1DC",
    padding: 8,
    borderRadius: 20,
    shadowOffset: { width: 0, height: 6 },
    shadowColor: "#171717",
    shadowOpacity: 0.13,
    shadowRadius: 6,
    borderColor: "black",
    borderWidth: 0.5,
  },
  tinyLogo: {
    width: 40,
    height: 40,
  },
  signInText: {
    fontWeight: "200",
    fontSize: "20rem",
  },
});
