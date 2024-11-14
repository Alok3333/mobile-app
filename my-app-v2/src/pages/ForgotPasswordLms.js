import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  Animated,
  Easing,
} from "react-native";
import { Button, Text, Card, IconButton } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient

const CustomInput = ({
  name,
  label,
  value,
  onChangeText,
  secureTextEntry,
  toggleVisibility,
}) => (
  <>
    <Text style={styles.label}>{name}</Text>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={label}
        placeholderTextColor="#fcfefa"
        secureTextEntry={secureTextEntry}
      />
      {toggleVisibility && (
        <IconButton
          icon={secureTextEntry ? "eye-off" : "eye"}
          color="#fcfefa"
          onPress={toggleVisibility}
          style={styles.eyeIcon}
        />
      )}
    </View>
  </>
);

export default function ForgotPasswordLms({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Animations
  const fadeAnim = useState(new Animated.Value(0))[0];
  const scaleAnim = useState(new Animated.Value(0.8))[0];
  const slideAnim = useState(new Animated.Value(-100))[0];

  useEffect(() => {
    Animated.stagger(300, [
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        tension: 60,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleTogglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = () => navigation.navigate("MainDrawer");

  return (
    <LinearGradient
      colors={[
        "#010219",
        "#010219",
        "#010219",
        "#010219",
        "#003491",
        "#02bcb5",
      ]} // Gradient colors
      style={styles.container} // Apply styles
    >
      <Animated.View style={[styles.wrapper, { opacity: fadeAnim }]}>
        <ScrollView contentContainerStyle={styles.wrapper}>
          <Animated.Text
            style={[styles.title, { transform: [{ translateY: slideAnim }] }]}
          >
            <Text variant="headlineLarge" style={styles.titlelog}>
              Contact Us
            </Text>
          </Animated.Text>

          <Card.Content style={styles.cardContent}>
            <Text variant="titleMedium" style={styles.contact}>
              Please send an email to reset your password.
            </Text>
            <Text
              variant="titleMedium"
              style={{ color: "#FF0000", textAlign: "center" }}
              numberOfLines={1}
            >
              support@campus.technology
            </Text>
          </Card.Content>
        </ScrollView>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  wrapper: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 10,
  },
  largeLetter: {
    color: "#fcfefa",
    textAlign: "center",
    marginBottom: 10,
  },
  uniqueM: {
    color: "#fcfefa",
  },
  title: {
    paddingVertical: 10,
    textAlign: "center",
    color: "#fcfefa",
  },
  titlelog: { color: "#02bcb5" },
  contact: { textAlign: "center", color: "#fcfefa" },
  cardContent: {
    paddingVertical: 30,
    borderRadius: 20,
    padding: 25,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  inputContainer: {
    marginBottom: 15,
    backgroundColor: "#a1a3a4",
    borderRadius: 25,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    color: "#fcfefa",
    marginBottom: 5,
  },
  input: {
    height: 60,
    color: "#fcfefa",
    borderRadius: 10,
    paddingHorizontal: 10,
    flex: 1,
  },
  eyeIcon: {
    backgroundColor: "#fcfefa",
    position: "absolute",
    right: 10,
  },
  buttonContainer: {
    paddingTop: 20,
    alignItems: "center",
  },
  button: {
    borderColor: "#fcfefa",
    borderWidth: 2,
    borderRadius: 30,
    width: "100%",
    backgroundColor: "transparent",
  },
  loginText: {
    color: "#a1a3a4",
    textAlign: "center",
    paddingBottom: 6,
  },
});
