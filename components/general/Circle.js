import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import styles from "../../styles/general/CircleStyle.js";
export default function Circle({ top, size, left, right, color }) {
  const fadeAnim = useRef(new Animated.Value(-200)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: top,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);
  return (
    <Animated.View
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        top: fadeAnim,
        left,
        right,
        borderRadius: "100%",
      }}
    ></Animated.View>
  );
}
