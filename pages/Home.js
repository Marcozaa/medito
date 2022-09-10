import React from "react";
import { View, Text } from "react-native";
import UserHeader from "../components/homepage/UserHeader";
import styles from "../styles/pagesStyle/Home";

export default function Home() {
  return (
    <View style={styles.container}>
      <UserHeader />
    </View>
  );
}
