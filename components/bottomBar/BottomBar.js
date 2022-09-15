import React from "react";
import { Text, View } from "react-native";
import styles from "../../styles/bottomBar/BottomBarStyles";
import AddButton from "./AddButton";

export default function BottomBar({ modalVisible, setModalVisible }) {
  return (
    <View style={styles.container}>
      <AddButton
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
