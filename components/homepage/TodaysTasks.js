import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import client from "../../api/client";
import useUserStore from "../../store/userStore";
import styles from "../../styles/pagesStyle/home/TodaysTaskStyle";
import Task from "./Task";
import * as SecureStore from "expo-secure-store";
import useTaskStore from "../../store/taskStore";
import ProgressBar from "../taskProgress/ProgressBar";
import * as Progress from "react-native-progress";

export default function TodaysTasks({ day }) {
  const [tasks, setTasks] = useState([]);
  const { setState } = useTaskStore;

  async function getTasks() {
    let email = await SecureStore.getItemAsync("email");
    console.log(email);
    // get tasks from API
    const res = await client.post("/tasks", {
      email: email,
      day: day,
    });

    console.log(res);
    setTasks(res.data);
    console.log(tasks.length);
    setState({ totalTasks: tasks.length });
  }

  useEffect(() => {
    getTasks();
  }, [day]);

  return (
    <View style={styles.tasksWrapper}>
      {tasks?.length === 0 ? (
        <Text style={styles.noTask}>
          You haven't got scheduled task for today.🤔
        </Text>
      ) : (
        <>
          <ProgressBar totalTasks={tasks.length} />
          <Text style={styles.header}>Today's tasks</Text>
          <View style={styles.tasksContainer}>
            {tasks?.map((task) => (
              <Task
                taskName={task.name}
                key={task.id}
                taskType={task.type}
                time={task.duration}
                completed={task.completed}
                id={task.id}
              />
            ))}
          </View>
        </>
      )}
    </View>
  );
}
