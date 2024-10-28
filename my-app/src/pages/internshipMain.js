import { LinearGradient } from "expo-linear-gradient";
// import { Link } from "expo-router";
import * as React from "react";
import {
  Dimensions,
  TouchableHighlight,
  Image,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Card, Text, Button, Icon } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons"; // Import Ionicons
import { useNavigation } from "@react-navigation/native";

// Get screen height and width
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const CoursesListCard = () => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight underlayColor="#f0f0f0">
      <View>
        <Card style={styles.card}>
          <Text variant="titleLarge" style={styles.moduleTitle}>
            About Internship
          </Text>
          <Ionicons
            name="school"
            size={80}
            style={styles.icon}
            color="#8F52FB"
          />
          <Text variant="titleMedium" style={styles.moduleSubTitle}>
            Virtual Internship with Job Simulation
          </Text>
          <Text variant="titleSmall" style={{ textAlign: "center" }}>
            Experience how it feels to work in a real project in a virtual
            environment. Build the skills to help you get employed.
          </Text>
          <Text variant="titleSmall" style={styles.moduleSubTitle}>
            Full time Internship
          </Text>
          <Text variant="titleSmall" style={{ textAlign: "center" }}>
            For full time internship with stipend, contact your mentor for
            attending interview.
          </Text>
        </Card>
        <View style={styles.buttonContainer}>
          <LinearGradient
            colors={["rgba(255,255,255,0.2)", "rgba(255,255,255,0.4)"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientButton}
          >
            {/* <Link href="/voiceSelect"> */}
            <Button
              mode="contained"
              contentStyle={{ height: 50 }}
              labelStyle={{ color: "#FFF" }}
              icon="arrow-right"
              style={styles.button}
              onPress={() => navigation.navigate("InternshipsScreen")}
            >
              Start Internship
            </Button>
            {/* </Link> */}
          </LinearGradient>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const InternshipMainScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <LinearGradient
        colors={["#F35668", "#8F52FB"]}
        style={styles.gradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.centerContainer}>
          <CoursesListCard />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: screenHeight,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    overflow: "hidden",
    paddingVertical: 40,
    paddingHorizontal: 20,
    width: screenWidth * 0.9,
  },
  icon: {
    // width: "100%",
    marginTop: 10,
    marginHorizontal: "auto",
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  gradientButton: {
    borderRadius: 30,
    paddingVertical: 2,
    paddingHorizontal: 2,
    width: screenWidth * 0.6,
  },
  button: {
    backgroundColor: "transparent",
    width: "100%",
  },
  moduleTitle: {
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "center",
    paddingBottom: 10,
  },
  moduleSubTitle: {
    color: "#666",
    marginBottom: 4,
    textAlign: "center",
    paddingVertical: 20,
    fontWeight: "bold",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  screenContainer: {
    flex: 1,
    padding: 20,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center", // Vertically center
    alignItems: "center", // Horizontally center
  },
});

export default InternshipMainScreen;
