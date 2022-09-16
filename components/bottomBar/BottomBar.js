import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles/bottomBar/BottomBarStyles";
import AddButton from "./AddButton";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function BottomBar({
  modalVisible,
  setModalVisible,
  navigation,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.barButton}>
        <Ionicons name="analytics-outline" size={60} color={"#DBA196"} />
      </TouchableOpacity>

      <AddButton
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate("Analytics")}
        style={styles.barButton}
      >
        <Ionicons name="analytics-outline" size={60} color={"#DBA196"} />
      </TouchableOpacity>
    </View>
  );
}
