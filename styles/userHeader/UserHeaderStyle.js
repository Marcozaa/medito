import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 150,
    borderRadius: "20%",
    backgroundColor: "#000",
    overflow: "hidden",
    marginTop: 100,
    shadowColor: "#52006A",
    elevation: 20,
    display: "flex",
    justifyContent: "center",
    padding: 20,
  },
  blob: {
    position: "absolute",
    top: -100,
    left: -50,
    width: 200,
    height: 200,
    opacity: 0.5,
  },
  welcomeText: {
    fontSize: 35,
    color: "white",
    fontWeight: "800",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  paragraphText: {
    fontSize: 20,
    color: "#bebebe",
    fontWeight: "400",
  },
});

export default styles;
