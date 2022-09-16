import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import client from "../api/client";
import BottomBar from "../components/bottomBar/BottomBar";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import styles from "../styles/pagesStyle/analytics/Analytics.js";
export default function Analytics({ navigation }) {
  const [dates, setDates] = useState([]);
  const [values, setValues] = useState([]);
  async function getData() {
    const res = await client.get("/getTasksNumberByDay");

    console.log(res.data);

    setDates(
      res.data.map((value) => new Date(value.date).toISOString().split("T")[0])
    );

    setValues(res.data.map((value) => value["COUNT(*)"]));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Bezier Line Chart</Text>
      <LineChart
        data={{
          labels: dates,
          datasets: [
            {
              data: values,
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}
