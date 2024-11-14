import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient"; // Import the LinearGradient from Expo

const ProgressTrackingScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#010219", "#003491", "#02bcb5"]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text variant="headlineSmall" style={styles.title}>Progress Tracking</Text>

        {/* Button to view internal assignment marks */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Navigate to internal assignment marks screen
            // navigation.navigate("InternalMarksScreen");
          }}
        >
          <Text style={styles.buttonText}>View Internal Assessment Marks</Text>
        </TouchableOpacity>

        {/* Button to view external assignment marks */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Navigate to external assignment marks screen
            // navigation.navigate("ExternalMarksScreen");
          }}
        >
          <Text style={styles.buttonText}>View External Assessment Marks</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    padding: 16,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    marginBottom: 40,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#02bcb5",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#212640",
  },
});

export default ProgressTrackingScreen;
