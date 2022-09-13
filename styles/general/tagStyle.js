import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "45%",

    padding: 5,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  tinyLogo: {
    position: "absolute",
    height: 20,
    width: 20,
    right: -80,
    top: 0,
  },
  tagName: {
    color: "black",
    fontSize: 10,
    fontWeight: "200",
  },
});

export default styles;
