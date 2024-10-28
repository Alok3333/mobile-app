import * as React from "react";
import {
  TouchableHighlight,
  TouchableOpacity,
  Image,
  FlatList,
  View,
  StyleSheet,
} from "react-native";
import { ProgressBar, Card, Text } from "react-native-paper";
import { Rating } from "react-native-ratings";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const moduledata = [
  {
    id: 1,
    moduleTitle: "Professional Writing",
    moduleSubTitle: "Dr. S. K. Bhattacharya",
    rating: "3",
    totalModules: 10,
    completedModules: 7,
    image:
      "https://plus.unsplash.com/premium_photo-1682787494765-44d02d12f5be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    moduleTitle: "Human resource Management",
    moduleSubTitle: "Dr. S. K. Bhattacharya",
    totalModules: 4,
    completedModules: 1,
    rating: "2",
    image:
      "https://plus.unsplash.com/premium_photo-1682787494765-44d02d12f5be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    moduleTitle: "Professional Writing",
    moduleSubTitle: "Dr. S. K. Bhattacharya",
    rating: "5",
    totalModules: 8,
    completedModules: 5,
    image:
      "https://plus.unsplash.com/premium_photo-1682787494765-44d02d12f5be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    moduleTitle: "Professional Writing",
    moduleSubTitle: "Dr. S. K. Bhattacharya",
    rating: "5",
    totalModules: 10,
    completedModules: 3,
    image:
      "https://plus.unsplash.com/premium_photo-1682787494765-44d02d12f5be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    moduleTitle: "Professional Writing",
    moduleSubTitle: "Dr. S. K. Bhattacharya",
    rating: "4",
    totalModules: 15,
    completedModules: 9,
    image:
      "https://plus.unsplash.com/premium_photo-1682787494765-44d02d12f5be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    moduleTitle: "Professional Writing",
    moduleSubTitle: "Dr. S. K. Bhattacharya",
    rating: "2",
    totalModules: 20,
    completedModules: 20,
    image:
      "https://plus.unsplash.com/premium_photo-1682787494765-44d02d12f5be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    moduleTitle: "Professional Writing",
    moduleSubTitle: "Dr. S. K. Bhattacharya",
    rating: "5",
    totalModules: 16,
    completedModules: 14,
    image:
      "https://plus.unsplash.com/premium_photo-1682787494765-44d02d12f5be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    moduleTitle: "Professional Writing",
    moduleSubTitle: "Dr. S. K. Bhattacharya",
    rating: "3",
    totalModules: 14,
    completedModules: 7,
    image:
      "https://plus.unsplash.com/premium_photo-1682787494765-44d02d12f5be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    moduleTitle: "Professional Writing",
    moduleSubTitle: "Dr. S. K. Bhattacharya",
    rating: "2",
    totalModules: 18,
    completedModules: 17,
    image:
      "https://plus.unsplash.com/premium_photo-1682787494765-44d02d12f5be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    moduleTitle: "Professional Writing",
    moduleSubTitle: "Dr. S. K. Bhattacharya",
    rating: "1",
    totalModules: 25,
    completedModules: 3,
    image:
      "https://plus.unsplash.com/premium_photo-1682787494765-44d02d12f5be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Function to calculate the progress percentage
const calculateProgress = (completedModules, totalModules) => {
  return completedModules / totalModules;
};
const CoursesListCard = ({ item }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const navigation = useNavigation();

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  // Dynamically calculate the progress based on completed and total modules
  const progress = calculateProgress(item.completedModules, item.totalModules);

  return (
    <TouchableHighlight key={item.id}>
      <Card style={styles.card} onPress={() => navigation.navigate("CourseModulesDetailsScreen")}>
        <View style={styles.cardContent}>
          <Image source={{ uri: item.image }} style={styles.moduleImage} />
          <View style={styles.textContainer}>
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
              />
            </View>

            <ProgressBar
              progress={progress}
              color="#8F52FB"
              style={styles.progressBar}
            />
            <Text>{Math.round(progress * 100)}% completed</Text>

            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={toggleFavorite}
            >
              <Icon
                name={isFavorite ? "heart" : "heart-outline"}
                size={24}
                color={isFavorite ? "#8F52FB" : "gray"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </TouchableHighlight>
  );
};

const CourseModuleScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text variant="headlineMedium" style={styles.headerText}>
          Available Courses
        </Text>
      </View>
      <FlatList
        data={moduledata}
        renderItem={({ item }) => <CoursesListCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.container}
      />
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
  },
  cardContent: {
    flexDirection: "row",
    padding: 10,
    position: "relative",
  },
  moduleImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
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
    top: 50,
    right: 10,
  },
});

export default CourseModuleScreen;
