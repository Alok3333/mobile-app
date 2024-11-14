import React from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { Card, Text, Avatar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient"; // Import gradient from expo

const StudyMaterialsListLms = ({ navigation }) => {
  // Sample study material data with additional fields for description, upload date, and material link
  const materials = [
    {
      id: "1",
      subject: "Mathematics",
      topicname: "Algebra basics",
      description: "Introduction to algebraic expressions and equations",
      uploadDate: "2024-11-01",
      link: "https://example.com/math-material",
    },
    {
      id: "2",
      subject: "Science",
      topicname: "Physics concepts",
      description: "Fundamental principles of physics",
      uploadDate: "2024-10-30",
      link: "https://example.com/science-material",
    },
    {
      id: "3",
      subject: "History",
      topicname: "World War II overview",
      description: "A comprehensive overview of World War II",
      uploadDate: "2024-11-05",
      link: "https://example.com/history-material",
    },
    {
      id: "4",
      subject: "English",
      topicname: "Grammar lessons",
      description: "Fundamentals of English grammar and sentence structure",
      uploadDate: "2024-11-10",
      link: "https://example.com/english-material",
    },
    {
      id: "5",
      subject: "Computer Science",
      topicname: "Introduction to programming",
      description: "Basics of programming with hands-on examples",
      uploadDate: "2024-11-15",
      link: "https://example.com/cs-material",
    },
    {
      id: "6",
      subject: "Art",
      topicname: "Sketching techniques",
      description: "Learn basic sketching techniques for beginners",
      uploadDate: "2024-10-28",
      link: "https://example.com/art-material",
    },
    {
      id: "7",
      subject: "Geography",
      topicname: "Geography basics",
      description: "Overview of key geographical concepts and terms",
      uploadDate: "2024-11-01",
      link: "https://example.com/geography-material",
    },
    {
      id: "8",
      subject: "Literature",
      topicname: "Shakespeare's works",
      description: "Study of key plays and sonnets by William Shakespeare",
      uploadDate: "2024-11-07",
      link: "https://example.com/lit-material",
    },
    {
      id: "9",
      subject: "Biology",
      topicname: "Cell biology and genetics",
      description: "An introduction to cell biology and basic genetics",
      uploadDate: "2024-11-20",
      link: "https://example.com/biology-material",
    },
    {
      id: "10",
      subject: "Biology",
      topicname: "Human Parts",
      description: "Study of human body parts and functions",
      uploadDate: "2024-11-22",
      link: "https://example.com/human-parts-material",
    }, // New topic added
    {
      id: "11",
      subject: "Mathematics",
      topicname: "Calculus basics",
      description: "Introduction to derivatives and integrals",
      uploadDate: "2024-12-01",
      link: "https://example.com/calculus-material",
    },
    {
      id: "12",
      subject: "Science",
      topicname: "Chemistry fundamentals",
      description: "Introduction to chemistry and its basic concepts",
      uploadDate: "2024-12-03",
      link: "https://example.com/chemistry-material",
    },
    {
      id: "13",
      subject: "History",
      topicname: "Ancient Civilizations",
      description:
        "Study of ancient civilizations like Egypt, Mesopotamia, and more",
      uploadDate: "2024-12-05",
      link: "https://example.com/ancient-civilizations-material",
    },
    {
      id: "14",
      subject: "English",
      topicname: "Literary analysis",
      description:
        "Learn how to analyze literature and develop critical reading skills",
      uploadDate: "2024-12-10",
      link: "https://example.com/literary-analysis-material",
    },
    {
      id: "15",
      subject: "Computer Science",
      topicname: "Data Structures and Algorithms",
      description:
        "Overview of key data structures and algorithms in programming",
      uploadDate: "2024-12-15",
      link: "https://example.com/data-structures-material",
    },
    {
      id: "16",
      subject: "Art",
      topicname: "Painting techniques",
      description: "Learn advanced painting techniques for aspiring artists",
      uploadDate: "2024-12-18",
      link: "https://example.com/painting-techniques-material",
    },
    {
      id: "17",
      subject: "Geography",
      topicname: "Climate Change",
      description: "Understanding the science behind climate change",
      uploadDate: "2024-12-20",
      link: "https://example.com/climate-change-material",
    },
    {
      id: "18",
      subject: "Literature",
      topicname: "Poetry analysis",
      description: "Study of famous poets and their works",
      uploadDate: "2024-12-25",
      link: "https://example.com/poetry-analysis-material",
    },
    {
      id: "19",
      subject: "Biology",
      topicname: "Human anatomy",
      description: "Study of the human body's systems and organs",
      uploadDate: "2024-12-28",
      link: "https://example.com/human-anatomy-material",
    },
    {
      id: "20",
      subject: "Mathematics",
      topicname: "Linear Algebra",
      description:
        "Introduction to matrices, vectors, and linear transformations",
      uploadDate: "2024-12-30",
      link: "https://example.com/linear-algebra-material",
    },
  ];

  // Render each study material item
  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Title
        title={item.subject}
        left={() => (
          <Avatar.Icon
            icon="folder"
            size={50}
            style={styles.icon}
            color="#02bcb5"
          />
        )}
        titleStyle={styles.subjectTitle}
      />
      <Card.Content style={styles.cardContent}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Navigate to ViewStudyScreen and pass the study material details
            navigation.navigate("ViewStudyScreen", {
              subject: item.subject,
              topicname: item.topicname,
              description: item.description,
              uploadDate: item.uploadDate,
              link: item.link,
            });
          }}
        >
          <Text variant="bodySmall" style={styles.buttonText}>
            View Study Material
          </Text>
        </TouchableOpacity>
      </Card.Content>
    </Card>
  );

  return (
    <LinearGradient
      colors={["#010219", "#003491", "#02bcb5"]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <FlatList
          data={materials}
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
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  list: {
    paddingBottom: 16,
  },
  card: {
    marginVertical: 8,
    borderRadius: 12,
    elevation: 0,
    shadowColor: "transparent",
    overflow: "hidden", // To clip the gradient and shadows
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Optional: make card background semi-transparent
  },
  icon: {
    backgroundColor: "#010219",
  },
  subjectTitle: {
    marginLeft: 16,
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  cardContent: {
    alignItems: "flex-start",
    padding: 16,
  },
  button: {
    backgroundColor: "#02bcb5",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: "#212640",
  },
});

export default StudyMaterialsListLms;
