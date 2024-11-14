import React from "react";
import { Alert, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const LogoutButtonLms = ({ navigation }) => {
  const handleLogout = () => {
    Alert.alert("Logout Confirmation", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => navigation.navigate("EntryPageLms"),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centers the button vertically
    alignItems: "center", // Centers the button horizontally
    padding: 16,
  },
  button: {
    backgroundColor: "#FF5733", // Set your preferred background color
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    elevation: 2, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
    shadowOpacity: 0.2, // iOS shadow opacity
    shadowRadius: 2, // iOS shadow radius
  },
  buttonText: {
    color: "#fff", // Text color
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default LogoutButtonLms;
