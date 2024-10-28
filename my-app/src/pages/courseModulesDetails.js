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
import { ProgressBar, Card, Text, Button } from "react-native-paper";
import { Rating } from "react-native-ratings";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;

const individualModuleObj = {
  id: 1,
  moduleTitle: "Professional Writing",
  moduleSubTitle: "Dr. S. K. Bhattacharya",
  rating: 3,
  totalModules: 10,
  completedModules: 7,
  image:
    "https://plus.unsplash.com/premium_photo-1682787494765-44d02d12f5be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

// Function to calculate the progress percentage
const calculateProgress = (completedModules, totalModules) => {
  return completedModules / totalModules;
};

const CoursesListCard = ({ item }) => {
  const navigation = useNavigation();

  // Dynamically calculate the progress based on completed and total modules
  const progress = calculateProgress(item.completedModules, item.totalModules);

  return (
    <TouchableHighlight key={item.id} underlayColor="#f0f0f0">
      <View>
        <Card style={styles.card}>
          <View style={styles.cardContent}>
            <Text variant="titleMedium" style={styles.moduleTitle}>
              {item.moduleTitle}
            </Text>
            <Text variant="titleSmall" style={styles.moduleSubTitle}>
              {item.moduleSubTitle}
            </Text>

            <View style={styles.ratingContainer}>
              <Rating
                imageSize={16}
                startingValue={item.rating}
                style={styles.rating}
                readonly
              />
            </View>

            <Image source={{ uri: item.image }} style={styles.moduleImage} />

            <ProgressBar
              progress={progress}
              color="#8F52FB"
              style={styles.progressBar}
            />
            <Text>{Math.round(progress * 100)}% completed</Text>
            <View style={{ marginTop: 10 }}>
              <Text variant="titleLarge">About the Course</Text>
              <Text variant="titleSmall" style={{ marginTop: 5 }}>
                Soft skills can also be thought of as people skills. These can
                include good communication and interpersonal skills, leadership,
                problem-solving, work ethic, time management, and teamwork.
                These are characteristics that can be carried over to any
                position.F
              </Text>
            </View>

            <View style={{ marginTop: 10 }}>
              <Text variant="titleLarge">Skills you will learn</Text>
              <Text variant="titleSmall" style={{ marginTop: 5 }}>
                Skill 1
              </Text>
              <Text variant="titleSmall" style={{ marginTop: 5 }}>
                Skill 2
              </Text>
              <Text variant="titleSmall" style={{ marginTop: 5 }}>
                Skill 3
              </Text>
              <Text variant="titleSmall" style={{ marginTop: 5 }}>
                Skill 4
              </Text>
              <Text variant="titleSmall" style={{ marginTop: 5 }}>
                Skill 5
              </Text>
            </View>
          </View>
        </Card>
        <View style={styles.buttonContainer}>
          <LinearGradient
            colors={["#F35668", "#8F52FB"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientButton}
          >
            {/* <Link href="/courseActivity"> */}
            <Button
              mode="contained"
              onPress={() => navigation.navigate("CourseActivityScreen")}
              contentStyle={{ height: 50 }}
              labelStyle={{ color: "#FFF" }}
              icon="arrow-right"
              style={styles.button}
            >
              Start Learning
            </Button>
            {/* </Link> */}
          </LinearGradient>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const CourseModulesDetailsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text variant="headlineMedium" style={styles.headerText}>
          Soft Skill Courses
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CoursesListCard item={individualModuleObj} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    backgroundColor: "#f4f4f4",
  },
  header: {
    padding: 20,
    backgroundColor: "#8F52FB",
    alignItems: "center",
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    marginBottom: 20,
  },
  headerText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  card: {
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    overflow: "hidden",
  },
  cardContent: {
    padding: 20,
    position: "relative",
  },
  moduleImage: {
    width: "100%",
    marginTop: 10,
    height: 200,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
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
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  rating: {
    marginRight: 10,
  },
  moduleTitle: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  moduleSubTitle: {
    color: "#666",
    marginBottom: 4,
  },
  progressBar: {
    height: 6,
    borderRadius: 3,
    marginTop: 8,
  },
  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  scrollContainer: {
    paddingBottom: 50,
  },
});

export default CourseModulesDetailsScreen;
