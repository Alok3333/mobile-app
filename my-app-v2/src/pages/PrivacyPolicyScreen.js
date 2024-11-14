import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const PrivacyPolicyScreen = () => {
  return (
    <LinearGradient
      colors={["#010219", "#003491", "#02bcb5"]}
      style={styles.gradient}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Privacy Policy</Text>
        <Text style={styles.content}>
          Your privacy is important to us. This privacy policy explains how we
          collect, use, and protect your information when you use our app.
        </Text>
        <Text style={styles.subheading}>Information Collection</Text>
        <Text style={styles.content}>
          We collect information from you when you register on our app, log in,
          or use certain features. This may include your name, email address,
          and other personal details.
        </Text>
        <Text style={styles.subheading}>Use of Information</Text>
        <Text style={styles.content}>
          The information we collect may be used to personalize your experience,
          improve our app, and send periodic emails regarding your account or
          other products and services.
        </Text>
        <Text style={styles.subheading}>Data Protection</Text>
        <Text style={styles.content}>
          We implement a variety of security measures to maintain the safety of
          your personal information. However, no method of transmission over the
          internet or method of electronic storage is 100% secure.
        </Text>
        <Text style={styles.subheading}>Changes to Our Policy</Text>
        <Text style={styles.content}>
          We may update this privacy policy from time to time. We will notify
          you about significant changes in the way we treat personal information
          by sending a notice to the primary email address specified in your
          account.
        </Text>
        <Text style={styles.content}>
          By using our app, you consent to our privacy policy.
        </Text>
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
  subheading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fcfefa",
    marginVertical: 10,
  },
  content: {
    fontSize: 16,
    color: "#fcfefa",
    // lineHeight: 1.5,
    marginBottom: 15,
  },
});

export default PrivacyPolicyScreen;

