import React from "react";
import { Image, View } from "react-native";
import styles from "../../styles/general/Avatar";

export default function Avatar() {
  return (
    <View style={styles.avatar}>
      <Image
        style={styles.model}
        source={require("../../assets/images/avatar.png")}
      />
    </View>
  );
}
