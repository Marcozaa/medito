import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import client from "../../api/client";
import useTaskStore from "../../store/taskStore";
import useUserStore from "../../store/userStore";
import styles from "../../styles/pagesStyle/home/TaskStyle";
import Tag from "../general/Tag";

export default function Task({
  taskName,
  taskType,
  time,
  tagIcon,
  completed,
  id,
}) {
  const completeTask = useTaskStore((state) => state.completeTask);

  const [completedTask, setCompletedTask] = useState(completed);

  async function handleCompleteTask() {
    if (completedTask != 1) {
      // If task is not already completed
      setCompletedTask(1);
      completeTask();
      const res = await client.post("/completedTask", {
        taskId: id,
      });
      console.log(res);
    }
  }

  useEffect(() => {
    if (completedTask == 1) {
      completeTask();
    }
  }, []);

  return (
    <TouchableOpacity
      onPress={() => handleCompleteTask()}
      style={{ width: "100%" }}
    >
      <View
        style={[
          styles.container,
          taskType === "Mind"
            ? styles.backgroundType1
            : taskType === "Fitness"
            ? styles.backgroundType2
            : styles.backgroundType3,
          completedTask ? styles.reducedOpacity : "",
        ]}
      >
        {/** require() only uses static url not variables */}
        {taskName == "Reading" ? (
          <Image
            style={[
              styles.illustration,
              completedTask ? styles.reducedIllustrationOpacity : "",
            ]}
            source={require(`../../assets/images/defaultTasks/Reading1.png`)}
          />
        ) : taskName == "Running" ? (
          <Image
            style={[
              styles.illustration,
              completedTask ? styles.reducedIllustrationOpacity : "",
            ]}
            source={require(`../../assets/images/defaultTasks/Running.png`)}
          />
        ) : taskName == "Studying" ? (
          <Image
            style={[
              styles.illustration,
              styles.flipHorizontally,
              completedTask ? styles.reducedIllustrationOpacity : "",
            ]}
            source={require(`../../assets/images/defaultTasks/Studying.png`)}
          />
        ) : (
          <Image
            style={[
              styles.illustration,
              completedTask ? styles.reducedIllustrationOpacity : "",
            ]}
            source={require(`../../assets/images/defaultTasks/Meditating.png`)}
          />
        )}

        <View style={styles.taskInfo}>
          <Text
            style={[styles.taskName, completedTask ? styles.crossTaskName : ""]}
          >
            {taskName}
          </Text>
          <View style={styles.tags}>
            <Tag
              tagName={taskType}
              tagIcon={
                taskType === "Mind"
                  ? "git-branch-outline"
                  : taskType === "Fitness"
                  ? "fitness-outline"
                  : "bar-chart-outline"
              }
            />
            <Tag tagName={time + " min"} tagIcon={"time-outline"} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
