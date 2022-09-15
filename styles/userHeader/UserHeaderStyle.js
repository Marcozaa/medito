import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 200,
    marginTop: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#000",
    borderRadius: 20,

    shadowColor: "#171717",
    shadowOpacity: 0.6,
    shadowRadius: 20,
  },
  left: {
    display: "flex",
    justifyContent: "space-between",
    height: "75%",
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
    color: "white",

    fontSize: 30,
    fontWeight: "800",
  },
  paragraphText: {
    fontSize: 20,
    color: "#bebebe",
    fontWeight: "400",
  },
  welcomeSubHeader: {
    marginVertical: 20,
    fontSize: 30,
    fontWeight: "400",
  },
  welcomeQuote: {
    fontSize: 20,
  },
  curvedWrapper: {
    backgroundColor: "#FAE1DC",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 350,
    borderBottomRightRadius: 200,
    borderBottomLeftRadius: 200,
  },
});

export default styles;
