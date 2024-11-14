import React, { useState } from "react";
import {
  Dimensions,
  TouchableOpacity,
  View,
  StyleSheet,
  Linking,
  Alert,
  SafeAreaView,
} from "react-native";
import { Text, Button, TextInput } from "react-native-paper";

const screenWidth = Dimensions.get("window").width;

const ViewAssignmentLms = ({ route }) => {
  const { name, subject, teacherName, details, link } = route.params;

  // console.log(link, "link");

  const [reportLink, setReportLink] = useState("");
  const [assignmentSubmitted, setAssignmentSubmitted] = useState(false);

  const handleSubmit = () => {
    if (reportLink.trim() !== "") {
      // Assignment link has been submitted
      setAssignmentSubmitted(true);
      Alert.alert("Success", "Assignment link submitted successfully!");
    } else {
      // Assignment link is empty
      setAssignmentSubmitted(false);
      Alert.alert(
        "Error",
        "Please enter your assignment link before submitting."
      );
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <View style={styles.cardContent}>
        <Text variant="titleMedium" style={styles.moduleTitle}>
          {name}
        </Text>
        <Text variant="titleSmall" style={styles.moduleSubTitle}>
          {subject} - {teacherName}
        </Text>

        <Text variant="bodyLarge" style={styles.assignmentDetails}>
          {details}
        </Text>

        <Text variant="bodyLarge" style={styles.assignmentLinkText}>
          Please click the link below to view the assignment:
        </Text>

        <TouchableOpacity
          onPress={() => Linking.openURL(link)} // Assuming `details` is a URL
        >
          <Text style={styles.linkText}>{link}</Text>
        </TouchableOpacity>

        <TextInput
          // label="Submit Assignment Link"
          value={reportLink}
          onChangeText={setReportLink}
          style={styles.input}
          placeholder="Paste your assignment link here"
          mode="outlined"
        />

        <Button
          icon="send"
          mode="contained"
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          Submit Assignment
        </Button>

        {assignmentSubmitted && (
          <Text style={styles.successMessage}>
            Your assignment has been submitted!
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardContent: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
  },
  moduleTitle: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  moduleSubTitle: {
    color: "#666",
    marginBottom: 4,
  },
  assignmentDetails: {
    marginTop: 10,
    color: "#333",
  },
  assignmentLinkText: {
    marginTop: 15,
    fontWeight: "bold",
  },
  linkText: {
    color: "blue",
    marginTop: 10,
  },
  input: {
    width: "100%",
    marginTop: 20,
    paddingVertical: 10,
  },
  submitButton: {
    width: "100%",
    marginTop: 20,
  },
  successMessage: {
    marginTop: 15,
    color: "green",
  },
});

export default ViewAssignmentLms;
