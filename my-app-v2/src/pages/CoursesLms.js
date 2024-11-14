import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Card, Text, Avatar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const CourseListLms = ({ navigation }) => {
  // Sample course data
  const courses = [
    { id: "1", title: "React Native Basics", subtitle: "Rahul k" },
    { id: "2", title: "Advanced React Native", subtitle: "Pooja v" },
    { id: "3", title: "State Management with Redux", subtitle: "Vinay p" },
    { id: "4", title: "Building Mobile Apps", subtitle: "Gayatri m" },
    { id: "5", title: "APIs and Networking", subtitle: "Swati r" },
    { id: "6", title: "Navigation in React Native", subtitle: "Sneha p" },
    { id: "7", title: "React Native Basics", subtitle: "Rahul k" },
    { id: "8", title: "Advanced React Native", subtitle: "Pooja v" },
    { id: "9", title: "State Management with Redux", subtitle: "Vinay p" },
    { id: "10", title: "Building Mobile Apps", subtitle: "Gayatri m" },
    { id: "11", title: "APIs and Networking", subtitle: "Swati r" },
    { id: "12", title: "Navigation in React Native", subtitle: "Sneha p" },
  ];

  // Render each course item
  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Title
        title={item.title}
        subtitle={item.subtitle}
        left={() => (
          <Avatar.Icon
            icon="book"
            size={50}
            style={styles.icon}
            color="#010219"
          />
        )}
        titleStyle={styles.courseTitle}
        subtitleStyle={styles.courseSubtitle}
      />
    </Card>
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
      style={styles.gradient}
    >
      <View style={styles.container}>
        <FlatList
          data={courses}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
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
    borderRadius: 10,
    elevation: 0,
    shadowColor: "transparent",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  icon: {
    backgroundColor: "#02bcb5",
    marginRight: 10,
  },
  courseTitle: {
    marginLeft: 20,
    color: "#02bcb5",
  },
  courseSubtitle: {
    color: "#f0f0f0",
    marginLeft: 20,
  },
});

export default CourseListLms;
