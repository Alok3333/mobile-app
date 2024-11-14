// class 6th cbse board experiment component of food

import React, { useState } from "react";
import { View, Image, StyleSheet, Alert, TextInput } from "react-native";
import { Provider as PaperProvider, Button, Text } from "react-native-paper";

const onionParts = [
  { id: 1, position: { top: "0%", left: "10%" } }, // Outer Skin
  { id: 2, position: { top: "45%", left: "40%" } }, // Flesh2
  { id: 3, position: { top: "11%", left: "72%" } }, // Flesh4
  { id: 4, position: { top: "82%", left: "53%" } }, // Root
];

const ComponetOfFoodExperiment = () => {
  const [answers, setAnswers] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
  });

  const checkAnswers = () => {
    const correctAnswers = ["foliar stem", "bulb scale", "tunic", "root"]; // Correct answers
    const userAnswers = Object.values(answers).map((answer) =>
      answer.trim().toLowerCase()
    ); // Convert answers to lowercase

    const isCorrect = userAnswers.every(
      (answer, index) => answer === correctAnswers[index]
    );

    if (isCorrect) {
      Alert.alert("Correct!", "All answers are correct!");
      setAnswers({ 1: "", 2: "", 3: "", 4: "" });
    } else {
      Alert.alert("Try Again!", "Some answers are incorrect.");
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text variant="headlineLarge" style={styles.title}>
          Food - Label the Onion Parts
        </Text>
        <Text variant="titleMedium" style={styles.instruction}>
          Choose the correct word for each part of the onion and write it in the
          corresponding box:
        </Text>
        <Text style={styles.hint}>
          Tunic, Bulb Scale (fleshy modified leaves), Root, Foliar stem
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/11-2024-4-1336-purple-onion-and-garlic-with-pepper%20(1).jpeg",
            }}
            style={styles.onionImage}
          />
          {onionParts.map((part) => (
            <View
              key={part.id}
              style={[
                styles.dot,
                { top: part.position.top, left: part.position.left },
              ]}
            >
              <TextInput
                style={styles.input}
                placeholder={`Enter ${part.id}`}
                value={answers[part.id]}
                onChangeText={
                  (text) =>
                    setAnswers((prev) => ({
                      ...prev,
                      [part.id]: text.toLowerCase(),
                    })) // Convert input to lowercase
                }
              />
            </View>
          ))}
        </View>
        <Button mode="contained" onPress={checkAnswers} style={styles.button}>
          Check Answers
        </Button>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
  },
  instruction: {
    textAlign: "center",
    marginBottom: 10,
  },
  hint: {
    marginHorizontal: 10,
    marginVertical: 20,
    color: "blue",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    alignItems: "center",
  },
  onionImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  dot: {
    position: "absolute",
    alignItems: "center",
    zIndex: 2,
  },
  input: {
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
    width: 120,
    marginTop: 5,
  },
  button: {
    marginTop: 20,
  },
});

export default ComponetOfFoodExperiment;