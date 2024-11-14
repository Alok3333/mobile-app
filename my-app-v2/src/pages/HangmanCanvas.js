import React from "react";
import { View, StyleSheet } from "react-native";
import { Surface } from "react-native-paper";

const HangmanCanvas = ({ mistakes }) => {
  const parts = [
    "head",
    "body",
    "left-arm",
    "right-arm",
    "left-leg",
    "right-leg",
  ];

  return (
    <Surface style={styles.canvas}>
      {parts.slice(0, mistakes).map((part, index) => (
        <View key={index} style={styles[part]} />
      ))}
    </Surface>
  );
};

const styles = StyleSheet.create({
  canvas: {
    height: 400,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingTop: 20,
  },
  head: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "black",
    position: "absolute",
    top: 20,
  },
  body: {
    width: 10,
    height: 100,
    backgroundColor: "black",
    position: "absolute",
    top: 100,
  },
  "left-arm": {
    width: 10,
    height: 60,
    borderRadius: 10,
    backgroundColor: "black",
    position: "absolute",
    top: 110,
    left: -30,
    transform: [{ rotate: "45deg" }],
  },
  "right-arm": {
    width: 10,
    height: 60,
    borderRadius: 10,
    backgroundColor: "black",
    position: "absolute",
    top: 110,
    right: -30,
    transform: [{ rotate: "-45deg" }],
  },
  "left-leg": {
    width: 10,
    height: 80,
    borderRadius: 10,
    backgroundColor: "black",
    position: "absolute",
    top: 180,
    left: -30,
    transform: [{ rotate: "45deg" }],
  },
  "right-leg": {
    width: 10,
    height: 80,
    borderRadius: 10,
    backgroundColor: "black",
    position: "absolute",
    top: 180,
    right: -30,
    transform: [{ rotate: "-45deg" }],
  },
});

export default HangmanCanvas;
