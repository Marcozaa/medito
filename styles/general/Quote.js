import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  quote: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
  },
  quotationMarks: {
    fontWeight: "700",
    fontSize: 30,
    color: "#fff",
  },
  welcomeQuote: { color: "#fff", fontStyle: "italic", fontSize: 12 },
});

export default styles;
