import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient
import ReusableCard from "./ReusableCard"; // Import the reusable card
import { MaterialIcons } from "@expo/vector-icons"; // Import MaterialIcons

const AssignmentsLms = ({ navigation }) => {
  const assignments = [
    {
      id: "1",
      subject: "Mathematics",
      name: "Algebra Assignment",
      teacherName: "Mr. Smith",
      dueDate: "2024-11-01",
      icon: "folder",
      details: "Solve the algebraic equations in Chapter 5.",
      link: "https://example.com/linear-algebra-material",
    },
    {
      id: "2",
      subject: "Science",
      name: "Lab Report",
      teacherName: "Dr. Johnson",
      dueDate: "2024-11-05",
      icon: "folder",
      details: "Write a detailed report on the chemical reactions observed.",
      link: "https://example.com/linear-algebra-material",
    },
    {
      id: "3",
      subject: "History",
      name: "Essay on World War II",
      teacherName: "Ms. Davis",
      dueDate: "2024-11-10",
      icon: "folder",
      details: "Discuss the major events and impacts of World War II.",
      link: "https://example.com/linear-algebra-material",
    },
    {
      id: "4",
      subject: "English",
      name: "Book Review",
      teacherName: "Mr. Brown",
      dueDate: "2024-11-15",
      icon: "folder",
      details: "Review your favorite book and analyze its themes.",
      link: "https://example.com/linear-algebra-material",
    },
    {
      id: "5",
      subject: "Computer Science",
      name: "Project Proposal",
      teacherName: "Ms. White",
      dueDate: "2024-11-20",
      icon: "folder",
      details: "Create a proposal for your final project in Computer Science.",
      link: "https://example.com/linear-algebra-material",
    },
    {
      id: "6",
      subject: "Art",
      name: "Painting Project",
      teacherName: "Mr. Green",
      dueDate: "2024-11-25",
      icon: "folder",
      details: "Create a painting based on your chosen theme.",
      link: "https://example.com/linear-algebra-material",
    },
    {
      id: "7",
      subject: "Geography",
      name: "Map Presentation",
      teacherName: "Ms. Black",
      dueDate: "2024-11-30",
      icon: "folder",
      details:
        "Prepare a presentation on the geographical features of a country.",
      link: "https://example.com/linear-algebra-material",
    },
    {
      id: "8",
      subject: "Literature",
      name: "Poetry Analysis",
      teacherName: "Mr. Blue",
      dueDate: "2024-12-05",
      icon: "folder",
      details: "Analyze the poem 'The Road Not Taken' by Robert Frost.",
      link: "https://example.com/linear-algebra-material",
    },
    {
      id: "9",
      subject: "Physics",
      name: "Physics Experiment",
      teacherName: "Dr. Grey",
      dueDate: "2024-12-10",
      icon: "folder",
      details: "Conduct an experiment and report your findings on motion.",
      link: "https://example.com/linear-algebra-material",
    },
    {
      id: "10",
      subject: "Chemistry",
      name: "Chemical Composition Assignment",
      teacherName: "Dr. Silver",
      dueDate: "2024-12-15",
      icon: "folder",
      details:
        "Prepare a report on the composition of common household chemicals.",
      link: "https://example.com/linear-algebra-material",
    },
    {
      id: "11",
      subject: "Biology",
      name: "Plant Study Project",
      teacherName: "Ms. Gold",
      dueDate: "2024-12-20",
      icon: "folder",
      details: "Conduct a study on local plant species and their habitats.",
      link: "https://example.com/linear-algebra-material",
    },
    {
      id: "12",
      subject: "Physical Education",
      name: "Fitness Plan",
      teacherName: "Mr. Bronze",
      dueDate: "2024-12-25",
      icon: "folder",
      details: "Create a personal fitness plan including exercises and diet.",
      link: "https://example.com/linear-algebra-material",
    },
  ];

  const handlePress = (item) => {
    navigation.navigate("DetailScreen", { item }); // Navigate to DetailScreen with item data
  };

  // Render each assignment item
  const renderItem = ({ item }) => (
    <ReusableCard
      title={item.name}
      subtitle={`Subject: ${item.subject}`}
      dueDate={item.dueDate}
      icon={item.icon}
      iconColor="#02bcb5" // Change icon color
      dueDateColor="#02bcb5" // Change due date color
      onPress={() => handlePress(item)}
    />
  );

  return (
    <LinearGradient
      colors={[
        "#010219",
        "#010219",
        "#010219",
        "#010219",
        "#003491",
        "#02bcb5",
      ]}
      style={styles.gradientBackground}
    >
      <View style={styles.container}>
        <FlatList
          data={assignments}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1, // Ensure gradient covers the entire screen
  },
  container: {
    flex: 1,
    padding: 16,
  },
  list: {
    paddingBottom: 16,
  },
});

export default AssignmentsLms;
