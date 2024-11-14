// // // Class 7th CBSE science

import React, { useState } from "react";
import { View, Image, StyleSheet, Alert, ScrollView } from "react-native";
import { Provider as PaperProvider, Button, Text } from "react-native-paper";
import { DraxProvider, DraxView } from "react-native-drax";

const onionParts = [
  {
    id: 1,
    position: { top: "10%", left: "60%" },
    correctAnswer: "buccal cavity",
  },
  {
    id: 2,
    position: { top: "22%", left: "60%" },
    correctAnswer: "salivary gland",
  },
  { id: 3, position: { top: "34%", left: "66%" }, correctAnswer: "oesophagus" },
  { id: 4, position: { top: "42%", left: "0%" }, correctAnswer: "liver" },
  { id: 5, position: { top: "50%", left: "68%" }, correctAnswer: "stomach" },
  {
    id: 6,
    position: { top: "55%", left: "0%" },
    correctAnswer: "gall bladder",
  },
  { id: 7, position: { top: "60%", left: "68%" }, correctAnswer: "pancreas" },
  {
    id: 8,
    position: { top: "70%", left: "68%" },
    correctAnswer: "small intestine",
  },
  {
    id: 9,
    position: { top: "80%", left: "68%" },
    correctAnswer: "large intestine",
  },
  { id: 10, position: { top: "90%", left: "62%" }, correctAnswer: "rectum" },
  { id: 11, position: { top: "90%", left: "10%" }, correctAnswer: "anus" },
];

const HumanPartsLabeling = () => {
  const [droppedItems, setDroppedItems] = useState({});
  const [draggedItemsStatus, setDraggedItemsStatus] = useState({
    "buccal cavity": false,
    "salivary gland": false,
    oesophagus: false,
    liver: false,
    stomach: false,
    "gall bladder": false,
    pancreas: false,
    "small intestine": false,
    "large intestine": false,
    rectum: false,
    anus: false,
  });

  const [isAllDropped, setIsAllDropped] = useState(false);
  const [feedback, setFeedback] = useState("");

  const checkAnswers = () => {
    const isCorrect = Object.values(droppedItems).every(
      (item, index) => item === onionParts[index].correctAnswer
    );

    if (isCorrect) {
      setFeedback("Congratulations! All answers are correct.");
      Alert.alert("Correct!", "All answers are correct!");
      setIsAllDropped(true);
    } else {
      setFeedback("Some answers are incorrect. Please try again.");
      Alert.alert("Try Again!", "Some answers are incorrect.");
      setIsAllDropped(false);
    }
  };

  const handleDrop = (id, droppedText) => {
    setDroppedItems((prev) => ({
      ...prev,
      [id]: droppedText,
    }));

    setDraggedItemsStatus((prev) => ({
      ...prev,
      [droppedText]: true,
    }));

    const allDropped = Object.values(droppedItems).every(
      (item) => item !== undefined
    );
    setIsAllDropped(allDropped);
  };

  const handleReset = () => {
    setDroppedItems({});
    setDraggedItemsStatus({
      "buccal cavity": false,
      "salivary gland": false,
      oesophagus: false,
      liver: false,
      stomach: false,
      "gall bladder": false,
      pancreas: false,
      "small intestine": false,
      "large intestine": false,
      rectum: false,
      anus: false,
    });
    setIsAllDropped(false);
    setFeedback(""); // Reset feedback
  };

  // Sending a data to Backend
  // const handleSubmit = async () => {
  //   const submissionData = Object.keys(droppedItems).map((id) => ({
  //     part: onionParts.find((part) => part.id === parseInt(id)).correctAnswer,
  //     userAnswer: droppedItems[id],
  //   }));

  //   // Add the data to the request body
  //   const requestData = {
  //     answers: submissionData,
  //   };

  //   try {
  //     // Replace 'https://your-backend-url.com/submit' with your actual backend URL
  //     const response = await fetch("https://your-backend-url.com/submit", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(requestData),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to submit answers.");
  //     }

  //     // Handle success
  //     const responseData = await response.json();
  //     Alert.alert("Submitted!", "Your answers have been submitted!");
  //   } catch (error) {
  //     // Handle error
  //     Alert.alert("Submission Failed", error.message);
  //   }
  // };

  const handleSubmit = () => {
    Alert.alert("Submitted!", "Your answers have been submitted!");
  };

  return (
    <PaperProvider>
      <DraxProvider>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <Text variant="headlineLarge" style={styles.title}>
              Label the Human Parts
            </Text>
            <Text variant="titleMedium" style={styles.instruction}>
              Drag and drop the correct labels into the boxes on the human
              diagram.
            </Text>

            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/11-2024-8-2313-hum-part1.png",
                }}
                style={styles.onionImage}
              />
              {onionParts.map((part) => (
                <DraxView
                  key={part.id}
                  style={[
                    styles.dot,
                    { top: part.position.top, left: part.position.left },
                    {
                      borderColor:
                        droppedItems[part.id] === part.correctAnswer
                          ? "green"
                          : "red",
                    },
                  ]}
                  onReceiveDragDrop={({ dragged }) => {
                    handleDrop(part.id, dragged.payload);
                  }}
                >
                  <Text style={styles.dropText}>
                    {droppedItems[part.id] || `Drop Here`}
                  </Text>
                </DraxView>
              ))}
            </View>

            <View style={styles.draggableContainer}>
              {[
                "buccal cavity",
                "salivary gland",
                "oesophagus",
                "liver",
                "stomach",
                "gall bladder",
                "pancreas",
                "small intestine",
                "large intestine",
                "rectum",
                "anus",
              ].map(
                (item) =>
                  !draggedItemsStatus[item] && (
                    <DraxView
                      key={item}
                      style={styles.draggable}
                      payload={item}
                      renderContent={() => (
                        <Text style={styles.draggableText}>{item}</Text>
                      )}
                    />
                  )
              )}
            </View>

            {feedback && (
              <Text
                variant="titleMedium"
                style={{
                  textAlign: "center",
                  color: "red",
                  marginTop: 10,
                  marginBottom: 10,
                  paddingHorizontal: 5,
                }}
              >
                {feedback}
              </Text>
            )}

            <Button
              mode="contained"
              onPress={handleSubmit}
              style={styles.button}
            >
              Submit
            </Button>
          </View>
        </ScrollView>
      </DraxProvider>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
  },
  instruction: {
    textAlign: "center",
    marginBottom: 10,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    alignItems: "center",
  },
  onionImage: {
    width: "100%",
    height: 600,
    resizeMode: "contain",
  },
  dot: {
    position: "absolute",
    alignItems: "center",
    zIndex: 2,
    borderWidth: 1,
    padding: 5,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  dropText: {
    padding: 10,
    textAlign: "center",
    backgroundColor: "#fff",
    width: 120,
  },
  draggableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 20,
    width: "100%",
  },
  draggable: {
    padding: 10,
    margin: 5,
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    minWidth: 120,
    flexBasis: "45%",
  },
  draggableText: {
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    marginBottom: 10,
  },
});

export default HumanPartsLabeling;
