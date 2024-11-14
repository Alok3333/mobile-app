import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Alert,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Card, Text } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient

const DrawerApp = ({ navigation }) => {
  const [greeting, setGreeting] = useState("");
  const userName = "Pooja Vasudev";

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting("Good Morning, ☀️");
    } else if (currentHour < 17) {
      setGreeting("Good Afternoon, 🌞");
    } else if (currentHour < 21) {
      setGreeting("Good Evening, 🌆");
    } else {
      setGreeting("Goodnight, 🌙");
    }
  }, []);

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
    <SafeAreaProvider>
      <LinearGradient
        colors={[
          "#010219",
          "#010219",
          "#010219",
          "#010219",
          "#003491",
          "#02bcb5",
        ]}
        style={styles.gradientBackground} // Apply gradient styles
      >
        <SafeAreaView style={styles.container}>
          <HomeLms
            greeting={greeting}
            userName={userName}
            onLogout={handleLogout}
            navigation={navigation}
          />
        </SafeAreaView>
      </LinearGradient>
    </SafeAreaProvider>
  );
};

const HomeLms = ({ greeting, userName, onLogout, navigation }) => {
  const [showCategories, setShowCategories] = useState(true);
  const categories = [
    { name: "Courses", icon: "book", link: "CourseListLms" },
    { name: "My Classes", icon: "group", link: "MyClassScreen" },
    {
      name: "Attendance Report",
      icon: "check-circle",
      link: "AttendanceReportLms",
    },
    { name: "Assignments", icon: "assignment", link: "AssignmentsLms" },
    {
      name: "Study Materials",
      icon: "folder-open",
      link: "StudyMaterialsListLms",
    },
    { name: "Notes", icon: "subject", link: "NotesLms" },
    { name: "Assessment", icon: "assessment" },
    { name: "Mentor", icon: "person", link: "MentorScreen" },
    {
      name: "Progress Tracking",
      icon: "checklist",
      link: "ProgressTrackingScreen",
    },
    { name: "Feedback", icon: "feedback", link: "FeedbackLms" },
  ];

  const toggleCategories = () => {
    setShowCategories((prev) => !prev);
  };

  return (
    <View style={styles.homeContainer}>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.profileContainer}>
            <Image
              source={{
                uri: "https://i.pinimg.com/474x/d6/a2/33/d6a2336464f9b3ed9dff784fc03e3fdf.jpg",
              }}
              style={styles.profilePic}
            />
            <View>
              <Text variant="headlineSmall" style={styles.greeting}>
                {greeting}
              </Text>
              <Text variant="bodyLarge" style={styles.userName}>
                {userName}
              </Text>
            </View>
          </View>
        </Card.Content>
      </Card>
      <ScrollView>
        <View style={styles.categoriesContainer}>
          <View style={styles.categoriesHeader}>
            <Text style={styles.categoriesTitle}>Categories</Text>
            <TouchableOpacity onPress={toggleCategories}>
              <Text style={styles.showAll}>
                {showCategories ? "Hide" : "Show All"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.categoriesRow}>
            {categories
              .slice(0, showCategories ? 12 : 6)
              .map((category, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.categoryBox}
                  onPress={() =>
                    category.link ? navigation.navigate(category.link) : null
                  }
                >
                  <MaterialIcons
                    name={category.icon}
                    size={30}
                    color="#02bcb5"
                  />
                  <Text variant="labelMedium" style={styles.categoryText}>
                    {category.name}
                  </Text>
                </TouchableOpacity>
              ))}
          </View>
        </View>
      </ScrollView>
      {/* <TouchableOpacity onPress={onLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1, // Ensure gradient covers the entire screen
  },
  container: {
    flex: 1,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 30,
    marginRight: 16,
  },
  homeContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  card: {
    backgroundColor: "transparent",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    padding: 10,
    width: "100%",
    maxWidth: 500,
    alignSelf: "center",
    marginTop: 0,
  },
  greeting: {
    color: "#02bcb5",
    fontWeight: "bold",
    textAlign: "left",
  },
  userName: {
    color: "#fcfefa",
    textAlign: "left",
    paddingRight: 140,
  },
  categoriesContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  categoriesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoriesTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fcfefa",
  },
  showAll: {
    color: "#fcfefa",
    marginVertical: 10,
  },
  categoriesRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  categoryBox: {
    backgroundColor: "#fcfefa",
    borderRadius: 10,
    padding: 20,
    flexBasis: "30%",
    margin: 5,
    alignItems: "center",
  },
  categoryText: {
    marginTop: 10,
    textAlign: "center",
  },
  logoutButton: {
    margin: 20,
    padding: 10,
    backgroundColor: "#FF5733",
    borderRadius: 5,
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default DrawerApp;
