import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import { Text } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { Card } from "react-native-paper"; // Import Card component from react-native-paper

const ViewStudyScreen = ({ route }) => {
  const { subject, topicname, description, uploadDate, link } = route.params; // Retrieve the passed data

  return (
    <LinearGradient
      colors={["#010219", "#003491", "#02bcb5"]}
      style={styles.gradient}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Card style={styles.card}>
            <Card.Content>
              <Text variant="headlineMedium" style={styles.title}>
                {subject}
              </Text>
              <Text variant="bodyMedium" style={styles.topicName}>
                Topic Name: {topicname}
              </Text>
              <Text variant="titleMedium" style={styles.description}>
                Description: {description}
              </Text>
              <Text variant="labelMedium" style={styles.uploadDate}>
                Upload Date: {uploadDate}
              </Text>

              {/* Button to open the study material link */}
              <TouchableOpacity
                style={styles.linkButton}
                onPress={() => Linking.openURL(link)} // Open the link in browser
              >
                <Text style={styles.linkButtonText}>
                  Click Here To Open Link
                </Text>
              </TouchableOpacity>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    padding: 20,
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 20, // Added space at the bottom for better scrolling
  },
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  card: {
    width: "100%",
    maxWidth: 400, // Max width for large screens
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background for the card
    borderRadius: 16,
    elevation: 4, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    padding: 20,
  },
  title: {
    color: "#000",
  },
  description: {
    color: "#000",
    marginBottom: 16,
  },
  topicName: {
    color: "#000",
    marginBottom: 16,
  },
  uploadDate: {
    color: "#000",
    marginBottom: 16,
  },
  linkButton: {
    backgroundColor: "#02bcb5",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignSelf: "center",
    marginTop: 12,
  },
  linkButtonText: {
    color: "#212640",
  },
});

export default ViewStudyScreen;
