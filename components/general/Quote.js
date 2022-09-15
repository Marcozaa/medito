import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import styles from "../../styles/general/Quote.js";
import axios from "axios";
export default function Quote() {
  const [quote, setQuote] = useState("");
  async function getQuote() {
    await axios
      .get("https://zenquotes.io/api/today")
      .then((resp) => {
        setQuote(
          resp.data[0].q || "Who wishes to fight must first count the cost."
        );
      })
      .catch((err) => {
        // Handle Error Here
        console.error(err);
      });
  }
  useEffect(() => {
    getQuote();
  }, []);
  return (
    <View style={styles.quote}>
      <Text style={styles.quotationMarks}></Text>
      {quote && <Text style={styles.welcomeQuote}>"{quote}"</Text>}
    </View>
  );
}
