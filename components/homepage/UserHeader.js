import React from "react";
import { Image, Text, View } from "react-native";
import styles from "../../styles/userHeader/UserHeaderStyle";
export default function UserHeader() {
  function getDayName(dateStr, locale) {
    var date = new Date(dateStr);
    date.setFullYear(date.getFullYear() - 1);
    return date.toLocaleDateString(locale, { weekday: "short" });
  }
  function getMonthName(dateStr, locale) {
    var date = new Date(dateStr);
    date.setMonth(date.getMonth() - 1);
    return date.toLocaleDateString(locale, { month: "short" });
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.blob}
        source={require("../../assets/blobs/blob1.png")}
      />
      <Text style={[styles.welcomeText, styles.paragraphText]}>
        {getDayName(new Date().toLocaleString(), "en") +
          ", " +
          getMonthName(new Date().toLocaleString(), "en") +
          " " +
          new Date().getDate() +
          ", " +
          new Date().getFullYear()}
      </Text>
      <Text style={styles.welcomeText}>Hi, username</Text>
    </View>
  );
}
