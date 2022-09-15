import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Button,
} from "react-native";
import styles from "../../../styles/pagesStyle/home/modalStyle";
import CredentialsInput from "../../general/CredentialsInput";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Formik } from "formik";
import * as SecureStore from "expo-secure-store";
import Toast from "react-native-root-toast";
import client from "../../../api/client";

export default function ModalAddTask({ modalVisible, setModalVisible }) {
  const addTask = async (values, formikActions) => {
    let email = await SecureStore.getItemAsync("email");
    const res = await client.post("/addTask", {
      ...values,
      email,
    });

    console.log(res.data);
    // If the user is succesfully logged
    if (res.data.message == "Success") {
      addToast("Succesfully created task!");
    }
    formikActions.resetForm();
    formikActions.setSubmitting(false);
  };

  function addToast(message) {
    // Add a Toast on screen.
    let toast = Toast.show(message, {
      duration: Toast.durations.LONG,
      position: Toast.positions.CENTER,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
      onShow: () => {
        // calls on toast\`s appear animation start
      },
      onShown: () => {
        // calls on toast\`s appear animation end.
      },
      onHide: () => {
        // calls on toast\`s hide animation start.
      },
      onHidden: () => {
        // calls on toast\`s hide animation end.
      },
    });
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <Formik
          initialValues={{ title: "", type: "", time: "", date: "" }}
          onSubmit={addTask}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isSubmitting,
          }) => (
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Add your task!</Text>
                <CredentialsInput
                  onBlur={handleBlur("title")}
                  handleChange={handleChange("title")}
                  value={values.title}
                  children={
                    <Ionicons name="text-outline" size={25} color={"grey"} />
                  }
                  type={"Task title"}
                  placeholderColor={"gray"}
                />
                <CredentialsInput
                  onBlur={handleBlur("type")}
                  handleChange={handleChange("type")}
                  value={values.type}
                  children={
                    <Ionicons name="fitness-outline" size={25} color={"grey"} />
                  }
                  type={"Task type"}
                  placeholderColor={"gray"}
                />
                <CredentialsInput
                  onBlur={handleBlur("time")}
                  handleChange={handleChange("time")}
                  value={values.time}
                  children={
                    <Ionicons name="time-outline" size={25} color={"grey"} />
                  }
                  type={"Task time"}
                  placeholderColor={"gray"}
                />
                <CredentialsInput
                  onBlur={handleBlur("date")}
                  handleChange={handleChange("date")}
                  value={values.date}
                  children={
                    <Ionicons
                      name="calendar-outline"
                      size={25}
                      color={"grey"}
                    />
                  }
                  type={"Task date"}
                  placeholderColor={"gray"}
                />
                <Pressable
                  style={[styles.button, styles.confirmButton]}
                  onPress={handleSubmit}
                >
                  <Text style={styles.textStyle}>Add task</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          )}
        </Formik>
      </Modal>
    </View>
  );
}
