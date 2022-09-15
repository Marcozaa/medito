import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import CalendarComponent from "../components/homepage/calendar/CalendarComponent";
import TodaysTasks from "../components/homepage/TodaysTasks";
import UserHeader from "../components/homepage/UserHeader";
import styles from "../styles/pagesStyle/home/HomeStyle";

export default function Home() {
  const [day, setDay] = useState();
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <UserHeader />
        <CalendarComponent setDay={setDay} />
        <TodaysTasks day={day} />
      </View>
    </ScrollView>
  );
}
