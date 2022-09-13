import React from "react";
import { View, Text, ScrollView } from "react-native";
import TodaysTasks from "../components/homepage/TodaysTasks";
import UserHeader from "../components/homepage/UserHeader";
import styles from "../styles/pagesStyle/home/HomeStyle";

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <UserHeader />
        {/** CALENDAR VIEW - DAYS */}
        {/** GRAPH */}
        <TodaysTasks />
      </View>
    </ScrollView>
  );
}
