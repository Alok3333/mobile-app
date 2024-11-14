import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text, Card } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const NotificationsScreen = () => {
  // Sample notifications data
  const notifications = [
    { id: 1, message: "Your assignment has been graded." },
    { id: 2, message: "New materials have been added for Mathematics." },
    { id: 3, message: "Don't forget to submit your project by Friday!" },
    { id: 4, message: "Upcoming exam schedule has been released." },
    { id: 5, message: "Join the online study group this weekend." },
  ];

  return (
    <LinearGradient
      colors={["#010219", "#003491", "#02bcb5"]}
      style={styles.gradient}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Notifications</Text>
        {notifications.map((notification) => (
          <Card key={notification.id} style={styles.card}>
            <Card.Content>
              <Text style={styles.message}>{notification.message}</Text>
            </Card.Content>
          </Card>
        ))}
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
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fcfefa",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  message: {
    fontSize: 16,
    color: "#fcfefa",
  },
});

export default NotificationsScreen;

