import React from "react";
import { Text, View } from "react-native";
import * as Progress from "react-native-progress";
import useTaskStore from "../../store/taskStore";
import styles from "../../styles/pagesStyle/home/ProgressBarStyle";
export default function ProgressBar({ totalTasks }) {
  const completedTasks = useTaskStore((state) => state.completedTasks);

  let percentage = 0; // if completed or total tasks are 0 the graph will be void
  if (completedTasks != 0 && totalTasks != 0) {
    percentage = completedTasks / totalTasks;
    console.log(percentage);
  }
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
