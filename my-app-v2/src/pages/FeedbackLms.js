import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Text } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const FeedbackLms = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const feedbackCategories = [
    {
      name: "Curriculum Feedback",
      categoryName: "Curriculum",
    },
    {
      name: "Institutional Ambiance",
      categoryName: "Institutional",
    },
    {
      name: "Academic Performance",
      categoryName: "Academic",
    },
    {
      name: "Student Satisfaction Survey",
      categoryName: "StudentSatisfactionSurvey",
    },
    {
      name: "Faculty Feedback",
      categoryName: "Faculty",
    },
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category); // Update selected category state
    navigation.navigate("CategoryFeedback", { category }); // Navigate to the next screen with selected category
  };

  return (
    <LinearGradient
      colors={["#010219", "#003491", "#02bcb5"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content}>
          <Text variant="headlineMedium" style={styles.title}>
            Feedback Form
          </Text>
          <Text variant="bodyMedium" style={styles.subTitle}>
            We value your feedback! Please select a category below.
          </Text>

          {/* Render buttons with visual feedback */}
          {feedbackCategories.map((category, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleCategorySelect(category)} // Navigate to next screen on click
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.selectedCategoryButton, // Apply selected category style
              ]}
            >
              <Text
                style={[
                  styles.categoryButtonText,
                  selectedCategory === category &&
                    styles.selectedCategoryButtonText, // Apply selected text style
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
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
    marginBottom: 10,
    textAlign: "center",
  },
  subTitle: {
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  categoryButton: {
    marginBottom: 10,
    backgroundColor: "#fcfefa",
    width: "100%",
    padding: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryButtonText: {
    color: "#000",
    fontSize: 16,
  },
  selectedCategoryButton: {
    backgroundColor: "#003491",
  },
  selectedCategoryButtonText: {
    color: "#fff",
  },
});

export default FeedbackLms;
