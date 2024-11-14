import React, { useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, Alert } from "react-native";
import { Button, RadioButton, Card, Text } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const CategoryFeedback = ({ route, navigation }) => {
  const { category } = route.params;
  // console.log(category, "=======");

  // Define categories and corresponding questions
  const categoriesData = {
    Curriculum: [
      {
        question: "How satisfied are you with the curriculum?",
        options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"],
        answer: null,
      },
      {
        question: "How would you rate the variety of subjects offered?",
        options: ["Excellent", "Good", "Average", "Poor"],
        answer: null,
      },
      {
        question: "How satisfied are you with the curriculum?",
        options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"],
        answer: null,
      },
      {
        question: "How would you rate the variety of subjects offered?",
        options: ["Excellent", "Good", "Average", "Poor"],
        answer: null,
      },
    ],
    Institutional: [
      {
        question: "How satisfied are you with the faculty's teaching methods?",
        options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"],
        answer: null,
      },
      {
        question:
          "How would you rate the qualifications of the faculty members?",
        options: ["Outstanding", "Good", "Average", "Below Average"],
        answer: null,
      },
      {
        question: "How satisfied are you with the faculty's teaching methods?",
        options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"],
        answer: null,
      },
    ],
    Academic: [
      {
        question: "How would you rate the campus facilities?",
        options: ["Excellent", "Good", "Average", "Poor"],
        answer: null,
      },
      {
        question:
          "How satisfied are you with the availability of study resources?",
        options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"],
        answer: null,
      },
      {
        question: "How would you rate the campus facilities?",
        options: ["Excellent", "Good", "Average", "Poor"],
        answer: null,
      },
      {
        question:
          "How satisfied are you with the availability of study resources?",
        options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"],
        answer: null,
      },
      {
        question: "How would you rate the campus facilities?",
        options: ["Excellent", "Good", "Average", "Poor"],
        answer: null,
      },
      {
        question:
          "How satisfied are you with the availability of study resources?",
        options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"],
        answer: null,
      },
    ],
    StudentSatisfactionSurvey: [
      {
        question: "How satisfied are you with the faculty's teaching methods?",
        options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"],
        answer: null,
      },
      {
        question:
          "How would you rate the qualifications of the faculty members?",
        options: ["Outstanding", "Good", "Average", "Below Average"],
        answer: null,
      },
      {
        question: "How satisfied are you with the faculty's teaching methods?",
        options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"],
        answer: null,
      },
      {
        question:
          "How would you rate the qualifications of the faculty members?",
        options: ["Outstanding", "Good", "Average", "Below Average"],
        answer: null,
      },
      {
        question: "How satisfied are you with the faculty's teaching methods?",
        options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"],
        answer: null,
      },
    ],
    Faculty: [
      {
        question: "How satisfied are you with the faculty's teaching methods?",
        options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"],
        answer: null,
      },
      {
        question:
          "How would you rate the qualifications of the faculty members?",
        options: ["Outstanding", "Good", "Average", "Below Average"],
        answer: null,
      },
    ],
  };

  // Get questions based on the selected category
  const questions = categoriesData[category.categoryName] || [];

  // Manage answers in state
  const [answers, setAnswers] = useState(questions);

  // Handle the change of answer for a specific question
  const handleAnswerChange = (index, value) => {
    // Create a new copy of the answers array to avoid direct mutation
    const updatedAnswers = [...answers];
    updatedAnswers[index] = { ...updatedAnswers[index], answer: value };
    setAnswers(updatedAnswers); // Update the state with the new answers
  };

  // Validate that all questions have been answered
  const validateAnswers = () => {
    for (let i = 0; i < answers.length; i++) {
      if (!answers[i].answer) {
        Alert.alert(
          "Validation",
          "Please answer all the questions before submitting."
        );
        return false; // If any question is unanswered, return false
      }
    }
    return true; // All questions answered
  };

  // Submit the feedback
  const handleSubmit = () => {
    if (validateAnswers()) {
      console.log("Submitted Answers:", answers);
      Alert.alert("Thank you for your feedback!");
      navigation.goBack(); // Navigate back to the main feedback page
    }
  };

  return (
    <LinearGradient
      colors={["#010219", "#003491", "#02bcb5"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content}>
          <Text variant="headlineMedium" style={styles.title}>
            {category.name}
          </Text>
          <Text variant="bodyMedium" style={styles.subTitle}>
            Please answer the following questions.
          </Text>

          {answers.map((item, index) => (
            <Card key={index} style={styles.questionCard}>
              <Card.Content>
                <Text variant="titleMedium" style={styles.questionText}>
                  {item.question}
                </Text>
                <RadioButton.Group
                  onValueChange={(value) => handleAnswerChange(index, value)} // Handles change in the selected option
                  value={item.answer} // Bind the selected value to the state
                >
                  {item.options.map((option, idx) => (
                    <RadioButton.Item
                      key={idx}
                      label={option}
                      value={option} // The option value should match the answer in state
                      labelStyle={styles.optionLabel}
                    />
                  ))}
                </RadioButton.Group>
              </Card.Content>
            </Card>
          ))}

          <Button
            mode="contained"
            onPress={handleSubmit}
            style={styles.submitButton}
          >
            Submit Feedback
          </Button>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  subTitle: {
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  questionCard: {
    marginBottom: 20,
    width: "100%",
    backgroundColor: "#fcfefa",
    borderRadius: 8,
  },
  questionText: {
    color: "#000",
    marginBottom: 10,
  },
  optionLabel: {
    color: "#000",
  },
  submitButton: {
    borderColor: "#fcfefa",
    borderWidth: 2,
    borderRadius: 30,
    width: "100%",
    backgroundColor: "transparent",
  },
});

export default CategoryFeedback;
