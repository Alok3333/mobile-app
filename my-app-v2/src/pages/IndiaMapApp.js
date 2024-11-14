import React, { useState } from "react";
import { View, Image, StyleSheet, Alert, ScrollView } from "react-native";
import { Provider as PaperProvider, Button, Text } from "react-native-paper";
import { DraxProvider, DraxView } from "react-native-drax";

const onionParts = [
  {
    id: 1,
    position: { top: "45%", left: "13%" },
    correctAnswer: "gujarat",
  },
  {
    id: 2,
    position: { top: "50%", left: "42%" },
    correctAnswer: "chhattisgarh",
  },
  {
    id: 3,
    position: { top: "44%", left: "58%" },
    correctAnswer: "west bengal",
  },
  { id: 4, position: { top: "80%", left: "27%" }, correctAnswer: "kerala" },
  // { id: 5, position: { top: "50%", left: "68%" }, correctAnswer: "keral" },
];

const IndiaMapApp = () => {
  const [droppedItems, setDroppedItems] = useState({});
  const [draggedItemsStatus, setDraggedItemsStatus] = useState({
    gujarat: false,
    chhattisgarh: false,
    "west bengal": false,
    kerala: false,
    // keral: false,
  });

  const [isAllDropped, setIsAllDropped] = useState(false);
  const [feedback, setFeedback] = useState("");

  // Activity questions
  const questions = [
    "1) Which state in India has the highest number of petroleum reserves? (Place the red pin on the correct state)",
    "2) Which state is the largest producer of coal in India? (Place the red pin on the correct state)",
    "3) Which state is the largest producer of rice in India? (Place the red pin on the correct state)",
    "4) Which state in India has the highest literacy rate? (Place the red pin on the correct state)",
    // "5) Which state in India is the largest producer of spices? (Place the red pin on the correct state)",
  ];

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
      gujarat: false,
      chhattisgarh: false,
      "west bengal": false,
      kerala: false,
      // keral: false,
    });
    setIsAllDropped(false);
    setFeedback(""); // Reset feedback
  };

  const handleSubmit = () => {
    Alert.alert("Submitted!", "Your answers have been submitted!");
  };

  return (
    <PaperProvider>
      <DraxProvider>
        <View style={styles.container}>
          {/* Questions */}
          <View style={styles.questionsContainer}>
            <Text variant="headlineMedium" style={{ color: "maroon" }}>
              Activity
            </Text>
            {questions.map((question, index) => (
              <Text
                key={index}
                variant="titleMedium"
                style={styles.questionText}
              >
                {question}
              </Text>
            ))}
          </View>

          {/* Scrollable map section */}
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            style={styles.scrollView}
            scrollEnabled={!isAllDropped} // Disable scrolling after all pins are dropped
          >
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/11-2024-9-723-indiaMap.gif",
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
                />
              ))}
              {/* Show dropped pins on top of the image */}
              {Object.entries(droppedItems).map(([id, label]) => {
                const part = onionParts.find((p) => p.id.toString() === id);
                return part ? (
                  <View
                    key={id}
                    style={[
                      styles.droppedPin,
                      {
                        top: part.position.top,
                        left: part.position.left,
                      },
                    ]}
                  >
                    <Text style={styles.pinText}>📍</Text>
                  </View>
                ) : null;
              })}
            </View>
          </ScrollView>

          {/* Draggable Pins */}
          <View style={styles.draggableContainer}>
            {[
              "gujarat",
              "chhattisgarh",
              "west bengal",
              "kerala",
              // "keral",
            ].map(
              (item) =>
                !draggedItemsStatus[item] && (
                  <DraxView
                    key={item}
                    style={styles.draggable}
                    payload={item}
                    renderContent={() => (
                      <Text style={styles.draggableText}>📍</Text> // Pin emoji here as well
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

          <Button mode="contained" onPress={handleSubmit} style={styles.button}>
            Submit
          </Button>
        </View>
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
    padding: 10,
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
    height: 450,
    resizeMode: "contain",
    marginTop: 10,
  },
  dot: {
    position: "absolute",
    alignItems: "center",
    zIndex: 2,
    borderWidth: 1,
    padding: 5,
    borderColor: "#ccc",
    borderRadius: 50, // Make the drop area circular
    width: 50, // Adjust width and height to make it circular
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  dropText: {
    padding: 10,
    textAlign: "center",
    width: 60,
    height: 60,
    // fontSize: 20,
    lineHeight: 30,
    borderRadius: 100, // Circular shape for pin
    zIndex: 10,
  },
  draggableContainer: {
    marginTop: 20,
    backgroundColor: "#f0f0f0", // Optional background color to make the circle visible
    flexDirection: "row",
  },
  draggable: {
    width: 40,
    height: 40,
    margin: 5,
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderRadius: 50,
  },
  draggableText: {
    textAlign: "center",
    fontSize: 20, // Adjust text size to fit the circle
  },
  button: {
    marginTop: 20,
    marginBottom: 10,
  },
  droppedPin: {
    position: "absolute",
    zIndex: 10,
    alignItems: "center",
  },
  pinText: {
    borderRadius: 50,
    padding: 10,
    textAlign: "center",
    fontSize: 16,
    color: "#000",
  },
  scrollView: {
    width: "100%",
    flex: 1,
  },
});

export default IndiaMapApp;
