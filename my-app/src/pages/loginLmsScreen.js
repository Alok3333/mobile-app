import React, { useState } from "react";
import { View, ScrollView, StyleSheet, TextInput } from "react-native";
import { Button, Text, Card, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const CustomInput = ({
  name,
  label,
  value,
  onChangeText,
  secureTextEntry,
  toggleVisibility,
}) => {
  return (
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
            color="#fcfefa" // Set icon color to match text color
            onPress={toggleVisibility}
            style={styles.eyeIcon}
          />
        )}
      </View>
    </>
  );
};

export default function LoginLmsScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    navigation.navigate("HomeLms");
    // if (!username || !password) {
    //   alert("All fields are required!");
    // } else {
    //   console.log("Username:", username);
    //   console.log("Password:", password);
    // }
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <IconButton
          icon="arrow-left"
          color="#fcfefa"
          backgroundColor="#fcfefa"
          onPress={() => navigation.goBack()}
        />
      </View> */}
      <ScrollView contentContainerStyle={styles.wrapper}>
        <Text variant="headlineLarge" style={styles.title}>
          Login
        </Text>
        <Text style={styles.largeLetter}>
          L<Text style={styles.uniqueM}>M</Text>S
        </Text>

        <Card.Content style={styles.cardContent}>
          <CustomInput
            name="USERNAME"
            label="Enter Your Username *"
            value={username}
            onChangeText={setUsername}
          />

          <CustomInput
            name="PASSWORD"
            label="Enter Your Password *"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            toggleVisibility={handleTogglePasswordVisibility}
          />

          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              onPress={handleSubmit}
              contentStyle={{ height: 60 }}
              icon="send"
              style={styles.button}
            >
              Sign Up
            </Button>
          </View>

          <View style={{ paddingTop: 20 }}>
            <Text style={styles.loginText}>Forget Password?</Text>
          </View>
        </Card.Content>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212640",
    justifyContent: "center",
  },
  wrapper: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
  },
  largeLetter: {
    fontSize: 100,
    color: "#fcfefa",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 0,
  },
  uniqueM: {
    color: "#4942cd", // Unique color for "M"
    fontWeight: "bold", // Optional: Make "M" bold
  },
  title: {
    paddingVertical: 10,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fcfefa",
  },
  cardContent: {
    paddingTop: 40,
    borderRadius: 10,
    backgroundColor: "#fcfefa",
    borderRadius: 25,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 15,
    backgroundColor: "#4b4d5c",
    borderRadius: 25,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    color: "#212640",
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
    backgroundColor: "#4942cd",
    borderRadius: 30,
    width: "100%",
  },
  loginText: {
    color: "#6b6b6b",
    textAlign: "center",
    paddingBottom: 6,
  },
});
