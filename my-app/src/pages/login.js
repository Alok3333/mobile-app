import * as React from "react";
import { View, Image, Dimensions, ScrollView, StyleSheet } from "react-native";
import { TextInput, Button, Text, Card, Title } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const img =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-16-5224-loginImage.png";

export default function LoginScreen() {
  const navigation = useNavigation();

  // States to manage form inputs and keyboard visibility
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    if (!email || !password) {
      alert("All fields are required!");
    } else {
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#F35668", "#8F52FB"]}
        style={styles.gradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      />
      <ScrollView style={styles.wrapper}>
        <Text variant="headlineLarge" style={styles.title}>
          Login
        </Text>
        <Image source={{ uri: img }} style={styles.topImage} />

        <Card.Content style={{ paddingTop: 40 }}>
          <TextInput
            label="Enter Your Email *"
            mode="outlined"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            left={<TextInput.Icon icon="account" color="#8F52FB" />}
          />

          <TextInput
            label="Enter Your Password *"
            mode="outlined"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry={!showPassword}
            left={<TextInput.Icon icon="lock" color="#8F52FB" />}
            right={
              <TextInput.Icon
                icon={showPassword ? "eye-off" : "eye"}
                color="#8F52FB"
                onPress={handleTogglePasswordVisibility}
              />
            }
          />

          <View style={styles.buttonContainer}>
            <LinearGradient
              colors={["#F35668", "#8F52FB"]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientButton}
            >
              <Button
                mode="contained"
                onPress={handleSubmit}
                contentStyle={{ height: 50 }}
                labelStyle={{ color: "#FFF" }}
                icon="send"
                style={styles.button}
              >
                Submit
              </Button>
            </LinearGradient>
          </View>

          <View style={{ paddingTop: 20 }}>
            <Text style={styles.loginText}>Forget Password</Text>

            <Title style={styles.loginLink} onPress={() => navigation.navigate("SignupQRFormScreen")}>
              <Text variant="labelLarge" style={styles.loginText}>
                If you don't have an account?
              </Text>{" "}
              Sign up
            </Title>
          </View>
        </Card.Content>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: screenHeight,
  },
  wrapper: {
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    height: screenHeight,
    marginTop: 60,
  },
  title: {
    paddingVertical: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  topImage: {
    width: "80%",
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
  },
  input: {
    marginBottom: 15,
  },
  buttonContainer: {
    alignItems: "center",
  },
  gradientButton: {
    borderRadius: 30,
    paddingVertical: 2,
    paddingHorizontal: 2,
    width: screenWidth * 0.6,
  },
  button: {
    backgroundColor: "transparent",
    width: "100%",
  },
  loginText: {
    color: "#6b6b6b",
    textAlign: "center",
    paddingBottom: 6,
  },
  loginLink: {
    textAlign: "center",
    color: "#F35668",
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 12,
  },
});
