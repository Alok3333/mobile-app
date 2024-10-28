import * as React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

// Get screen height and width
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export default function EntryPageLms() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Text variant="displayLarge" style={styles.welcomeText}>
          Hi!
        </Text>
        <Text variant="displayLarge" style={styles.welcomeText}>
          Welcome
        </Text> */}
        {/* <Text variant="labelSmall" style={styles.waitText}>
          Your learning adventure awaits! Tap here to log in to LMS.
          I'm waiting for you. Please click here to log in to LMS.
        </Text> */}
      </View>
      <View style={styles.logo}>
        <View style={styles.logoBox}>
          <Text variant="displayMedium" style={styles.logoText}>
            LMS
          </Text>
          <Text variant="labelSmall" style={styles.logoText2}>
            Learning Management System
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        {/* Login Button */}
        <Button
          mode="contained"
          contentStyle={{ height: 60 }}
          style={styles.button}
          onPress={() => navigation.navigate("LoginLmsScreen")}
        >
          <Text variant="titleLarge" style={{ color: "#fff" }}>
            Login
          </Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcfefa",
    justifyContent: "flex-start", // Align items at the top
  },
  header: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  logo: {
    alignItems: "center", // Align logo to the right
    paddingHorizontal: 20,
    marginVertical: 50, // Add some vertical space
  },
  logoBox: {
    // backgroundColor: "#212640", // Box color
    padding: 10, // Padding around the text
    borderRadius: 10, // Rounded corners
    justifyContent: "center", // Align text to the bottom
    alignItems: "center", // Align text to the right
    width: 300, // Width of the box
    height: 300, // Height of the box
  },
  logoText: {
    color: "#428ce2", // Text color
    // fontSize: 24, // Font size
    fontWeight: "bold",
    textTransform: "uppercase", // Make letters uppercase
  },
  logoText2: {
    color: "#4b4d5c",
    fontWeight: "bold",
    textTransform: "uppercase", // Make letters uppercase
  },
  card: {
    paddingVertical: 50,
    backgroundColor: "#212640",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: "auto", // Push card to the bottom
  },
  button: {
    width: screenWidth * 0.5, // 50% of the screen width
    backgroundColor: "#4942cd",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginVertical: 100,
  },
  welcomeText: {
    color: "#212640",
    marginBottom: 0,
    textAlign: "left",
    fontWeight: "bold",
  },
  waitText: {
    color: "#4b4d5c",
    // textAlign: "center",
  },
  lmsText: {
    color: "#4942cd",
    textAlign: "center",
  },
});

// some content => => => => => => => => => => => => => =>
// "Ready to dive in? Click here to access your LMS!"
// "Join us on your learning journey! Click here to log in to LMS."
// "Your learning adventure awaits! Tap here to log in to LMS."
// "Unlock your potential! Click here to enter the LMS."
// => => => => => => => => => => => => => => => => => => => => =>
