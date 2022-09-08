import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import styles from "../../styles/buttonStyles/ConfirmButtonStyle.js";
export default function ConfirmButton({ text }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
