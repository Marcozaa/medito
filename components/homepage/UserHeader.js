import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import styles from "../../styles/userHeader/UserHeaderStyle";
import axios from "axios";
import Quote from "../general/Quote";
import Avatar from "../general/Avatar";
import useUserStore from "../../store/userStore";
import * as SecureStore from "expo-secure-store";

export default function UserHeader() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  async function getEmail() {
    await setEmail(await SecureStore.getItemAsync("email"));
    await setUsername(await SecureStore.getItemAsync("username"));
  }

  useEffect(() => {
    getEmail();
  }, []);

  // DATE FUNCTIONS
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
    <View style={styles.curvedWrapper}>
      <View style={styles.container}>
        {/*<Image
        style={styles.blob}
        source={require("../../assets/blobs/blob1.png")}
      />*/}

        <View style={styles.left}>
          <Text style={styles.welcomeText}>
            <Text style={styles.welcomeSubHeader}>Welcome back,{"\n"}</Text>
            {username}✨
          </Text>
          <Quote />
        </View>
        <View style={styles.right}>
          <Avatar />
        </View>
      </View>
    </View>
  );
}
