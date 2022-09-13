import { StyleSheet } from "react-native";

var stringToColour = function (str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = "#";
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: `${stringToColour("reading")}`, // Example - for testing
    borderRadius: 10,
    overflow: "hidden",
  },

  /**
   * CONDITIONAL RENDERING - based on task type
   */
  backgroundType1: {
    backgroundColor: "#FFFFC2",
  },
  backgroundType2: {
    backgroundColor: "#9CCFE7",
  },
  backgroundType3: {
    backgroundColor: "#977FD7",
  },

  // Completed task
  reducedOpacity: {
    backgroundColor: "grey",
  },
  crossTaskName: {
    textDecorationLine: "line-through",
  },
  reducedIllustrationOpacity: {
    opacity: 0.3,
  },
  /**
   *
   */
  illustration: {
    position: "absolute",
    height: 170,
    width: 170,
    right: -50,
    top: -10,
  },
  flipHorizontally: {
    transform: [{ scaleX: -1 }],
  },
  taskName: {
    fontSize: 25,
    fontWeight: "400",
  },
  taskInfo: {
    display: "flex",
    justifyContent: "space-around",
    height: "100%",
  },
  tags: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-around",
  },
});

export default styles;
