import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../../styles/bottomBar/AddButtonStyle.js";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function AddButton({ modalVisible, setModalVisible }) {
  return (
    <TouchableOpacity
      onPress={() => setModalVisible(!modalVisible)}
      style={styles.button}
    >
      <Ionicons name="add-outline" size={50} color={"white"} />
    </TouchableOpacity>
  );
}
