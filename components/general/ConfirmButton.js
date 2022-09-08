import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

export default function ConfirmButton({ text }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 10,
    marginVertical: 20,
    width: "100%",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 50,
    backgroundColor: "#FAE1DC",
    padding: 10,
    color: "black",
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 20,
  },
});
