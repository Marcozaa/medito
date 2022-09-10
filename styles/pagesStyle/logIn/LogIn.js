import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "start",

    width: "100%",
    height: "100%",
    backgroundColor: "#FAE1DC",
  },
  topView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "54%",
    paddingBottom: 100,
    width: "100%",
  },
  bottomView: {
    backgroundColor: "#fff",
    height: "50%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  tinyLogo: {
    width: 250,
    height: 250,
  },
  circle: {
    width: 150,
    height: 150,
    position: "absolute",
    top: 200,
    backgroundColor: "#F4BAAF",
    borderRadius: "100%",
  },
  arrowNext: {
    width: 100,
    height: 100,
    bottom: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DBA196",
    borderRadius: "100%",
  },

  bottomViewTop: {
    paddingHorizontal: 30,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomViewHeader: {
    paddingVertical: 30,
  },
  bottomViewContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
  },
});

export default styles;
