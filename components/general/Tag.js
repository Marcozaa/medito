import React from "react";
import { Text, View } from "react-native";
import styles from "../../styles/general/tagStyle";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Tag({ tagName, tagIcon }) {
  return (
    <View style={styles.container}>
      <Text style={styles.tagName}>{tagName}</Text>
      <Ionicons name={tagIcon} size={15} color={"black"} />
    </View>
  );
}
