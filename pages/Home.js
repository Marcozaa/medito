import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import BottomBar from "../components/bottomBar/BottomBar";
import CalendarComponent from "../components/homepage/calendar/CalendarComponent";
import ModalAddTask from "../components/homepage/modal/Modal";
import TodaysTasks from "../components/homepage/TodaysTasks";
import UserHeader from "../components/homepage/UserHeader";
import styles from "../styles/pagesStyle/home/HomeStyle";

export default function Home() {
  const [day, setDay] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <View style={styles.container}>
          <ModalAddTask
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
          <UserHeader />
          <CalendarComponent setDay={setDay} />
          <TodaysTasks day={day} />
        </View>
      </ScrollView>
      <BottomBar
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
}
