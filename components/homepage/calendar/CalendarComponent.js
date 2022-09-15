import React, { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";
import CalendarStrip from "react-native-calendar-strip";

export default function CalendarComponent({ setDay }) {
  let selectedDay = useRef();

  function onDateChange(date) {
    setDay(formatDate(date));
  }
  // clicco stampa salva

  function formatDate(date = new Date()) {
    return date.toISOString().split("T")[0];
  }

  return (
    <View style={{ width: "90%" }}>
      <CalendarStrip
        onDateSelected={(date) => onDateChange(date)}
        ref={selectedDay}
        scrollable
        scrollerPaging
        calendarAnimation={{ type: "sequence", duration: 30 }}
        daySelectionAnimation={{
          type: "border",
          duration: 200,
          borderWidth: 1,
          borderHighlightColor: "black",
        }}
        startingDate={new Date()}
        style={{ height: 150, paddingTop: 30, paddingBottom: 10 }}
      />
    </View>
  );
}
