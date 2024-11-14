import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text, Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const DetailScreen = ({ route, navigation }) => {
  const { item } = route.params; // Get the item from navigation params

  // Function to handle navigation to ViewAssignmentLms with passed item details
  const handleViewAssignments = () => {
    navigation.navigate("ViewAssignmentLms", {
      name: item.name,
      subject: item.subject,
      teacherName: item.teacherName,
      details: item.details,
      link: item.link,
    });
  };

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
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text variant="titleMedium" style={styles.title}>{item.name}</Text>
          <Text style={styles.teacherName}>{item.subject} - {item.teacherName}</Text>
          {/* <Text style={styles.subtitle}>Subject: {item.subject}</Text> */}
          {/* <Text style={styles.teacherName}>Teacher: {item.teacherName}</Text> */}
          <Text style={styles.details}>{item.details}</Text>

          <Button
            mode="contained"
            style={styles.button}
            labelStyle={styles.buttonText}
            onPress={handleViewAssignments}
          >
            View Assignments
          </Button>
        </View>
        <View style={styles.card}>
          <Text variant="titleMedium"  style={styles.title}>{item.name}</Text>
          <Text style={styles.teacherName}>{item.subject} - {item.teacherName}</Text>
          {/* <Text style={styles.subtitle}>Subject: {item.subject}</Text> */}
          {/* <Text style={styles.teacherName}>Teacher: {item.teacherName}</Text> */}
          <Text style={styles.details}>{item.details}</Text>

          <Button
            mode="contained"
            style={styles.button}
            labelStyle={styles.buttonText}
            onPress={handleViewAssignments}
          >
            View Assignments
          </Button>
        </View>
        <View style={styles.card}>
          <Text variant="titleMedium"  style={styles.title}>{item.name}</Text>
          <Text style={styles.teacherName}>{item.subject} - {item.teacherName}</Text>
          {/* <Text style={styles.teacherName}>Teacher: {item.teacherName}</Text> */}
          <Text style={styles.details}>{item.details}</Text>

          <Button
            mode="contained"
            style={styles.button}
            labelStyle={styles.buttonText}
            onPress={handleViewAssignments}
          >
            View Assignments
          </Button>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 16,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 12,
    padding: 20,
    elevation: 0,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: "#02bcb5",
  },
  title: {
    color: "#fcfefa",
  },
  subtitle: {
    color: "#fcfefa",
  },
  teacherName: {
    color: "#02bcb5",
  },
  details: {
    color: "#fcfefa",
    marginTop: 24,
    marginBottom: 14,
  },
  button: {
    borderRadius: 25,
    paddingVertical: 2,
    paddingHorizontal: 20,
    backgroundColor: "#02bcb5",
    elevation: 2,
  },
  buttonText: {
    color: "#ffffff",
  },
});

export default DetailScreen;
