import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tasksWrapper: {
    width: "100%",
    padding: 20,
    display: "flex",
    alignItems: "flex-start",
  },
  header: {
    width: "100%",
    textAlign: "left",
    fontSize: 25,
    fontWeight: "700",
  },
  tasksContainer: {
    display: "flex",
    alignItems: "center",
    marginVertical: 20,
    width: "100%",
    flex: 1,
    height: "100%",
  },
  noTask: {
    width: "100%",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 25,
  },
});

export default styles;
