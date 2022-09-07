import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  KeyboardAvoidingView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function CredentialsInput({ children, type }) {
  const [text, onChangeText] = useState("");
  return (
    <View style={styles.inputContaier}>
      {children}
      <TextInput
        style={styles.textInput}
        value={text}
        onChange={onChangeText}
        placeholder={type}
        keyboardType={type === "Email" ? "email-address" : "default"}
        secureTextEntry={type === "Password" ? true : false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContaier: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    width: "100%",
    overflow: "hidden",
    marginBottom: 30,
  },
  textInput: {
    height: 32,
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 1,
    width: "90%",
    display: "flex",
    alignItems: "center",
  },
});
