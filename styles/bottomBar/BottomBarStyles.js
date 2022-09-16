import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    position: "fixed",
    bottom: 0,
    justifyContent: "space-between",
    alignItems: "start",
    width: "100%",
    height: 100,
    backgroundColor: "#DBA196",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  barButton: {
    borderRadius: "70%",
    backgroundColor: "#FFEDE2",
    height: 70,
    width: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
