import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text, Button, Card } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const AccountInformationScreen = () => {
  const accountInfo = {
    name: "John Doe",
    regno: "john567890",
    phone: "+91 784 567 8909",
    // Add more fields as needed
  };

  return (
    <LinearGradient
      colors={["#010219", "#003491", "#02bcb5"]}
      style={styles.gradient}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="headlineLarge" style={styles.title}>
              Student Information
            </Text>
            <Text variant="titleMedium" style={styles.label}>
              Name:
            </Text>
            <Text variant="bodySmall" style={styles.value}>
              {accountInfo.name}
            </Text>
            <Text variant="titleMedium" style={styles.label}>
              Register Number:
            </Text>
            <Text variant="bodySmall" style={styles.value}>
              {accountInfo.regno}
            </Text>
            <Text variant="titleMedium" style={styles.label}>
              Phone:
            </Text>
            <Text variant="bodySmall" style={styles.value}>
              {accountInfo.phone}
            </Text>
          </Card.Content>
          {/* <Button
            mode="contained"
            onPress={() => console.log("Edit Account")}
            style={styles.button}
          >
            Edit Account
          </Button> */}
        </Card>
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
    justifyContent: "center",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  title: {
    // fontSize: 28,
    // fontWeight: "bold",
    color: "#fcfefa",
    marginBottom: 16,
    textAlign: "center",
  },
  label: {
    // fontSize: 18,
    color: "#fcfefa",
    marginVertical: 4,
  },
  value: {
    // fontSize: 16,
    color: "#ffffff",
    marginBottom: 12,
  },
  button: {
    borderRadius: 25,
    paddingVertical: 10,
    marginTop: 20,
    backgroundColor: "#02bcb5",
  },
});

export default AccountInformationScreen;
