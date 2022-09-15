import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as Progress from "react-native-progress";
import useTaskStore from "../../store/taskStore";
import styles from "../../styles/pagesStyle/home/ProgressBarStyle";
export default function ProgressBar({ totalTasks, completedTasks }) {
  //const completedTasks = useTaskStore((state) => state.completedTasks);
  const [percentage, setPercentage] = useState(0); // if completed or total tasks are 0 the graph will be void

  useEffect(() => {
    console.log("hi");
    setPercentage(completedTasks / totalTasks);
    console.log(percentage);
  }, []);

  // The progress percentage doesen't change between two days of activity

  return (
    <View style={styles.container}>
      <Text style={styles.numberIndicator}>
        <Text style={styles.number}>{completedTasks}</Text> out of{" "}
        <Text style={styles.number}>{totalTasks}</Text>
      </Text>
      <Progress.Circle
        borderColor="#FFEDE2"
        color="#DBA196"
        showsText
        progress={percentage}
        size={120}
      />
    </View>
  );
}
