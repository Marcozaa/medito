import React, { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  Text,
  View,
  KeyboardAvoidingView,
} from "react-native";
import styles from "../../styles/formStyles/CredentialsInputStyle.js";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function CredentialsInput({
  children,
  type,
  value,
  handleChange,
  handleBlur,
  placeholderColor,
}) {
  const [text, onChangeText] = useState("");
  return (
    <View style={styles.inputContaier}>
      {children}
      <TextInput
        onBlur={handleBlur}
        onChangeText={handleChange}
        value={value}
        style={styles.textInput}
        onChange={onChangeText}
        placeholder={type}
        placeholderTextColor={placeholderColor && placeholderColor}
        keyboardType={type === "Email" ? "email-address" : "default"}
        secureTextEntry={type === "Password" ? true : false}
      />
    </View>
  );
}
