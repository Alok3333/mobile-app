import * as React from "react";
import { Dimensions, Image, View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
// import Login from "./login";

// Get screen height
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const RobotImage =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-16-5428-robotImg.gif";

export default function Index() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#F35668", "#8F52FB"]}
        style={styles.gradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      />

      <View style={styles.container}>
        <Text variant="headlineLarge" style={styles.welcomeText}>
          Welcome to AI Mentor
        </Text>
        <Image source={{ uri: RobotImage }} style={styles.robotImage} />
      </View>
      {/* </ScrollView> */}

      <View style={styles.card}>
        <Text style={styles.title} variant="headlineSmall">
          Learn Anytime, Anywhere!
        </Text>

        {/* First Button */}
        <LinearGradient
          colors={["#F35668", "#8F52FB"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 30,
            marginVertical: 15,
          }}
        >
          <Button mode="contained" icon="arrow-right" style={styles.button}>
            <Text
              variant="labelLarge"
              style={{ color: "#fff" }}
              onPress={() => navigation.navigate("Login")}
            >
              Click here to login
            </Text>
          </Button>
        </LinearGradient>

        {/* Second Button */}
        <LinearGradient
          colors={["#F35668", "#8F52FB"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 30,
            marginVertical: 15,
          }}
        >
          {/* <Link href="/home"> */}
          <Button mode="contained" icon="arrow-right" style={styles.button}>
            <Text variant="labelLarge" style={{ color: "#fff" }} onPress={() => navigation.navigate("Home")}>
              Click here to start learning
            </Text>
          </Button>
          {/* </Link> */}
        </LinearGradient>

        <Text
          variant="bodyMedium"
          style={{ color: "gray", marginTop: 6 }}
          // onPress={() => navigation.navigate("Login")}
        >
          Click here to know more about AI Mentor
        </Text>
      </View>
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

  container: {
    paddingVertical: 10,
    alignItems: "center",
  },
  button: {
    width: screenWidth * 0.6, // 50% of the screen width
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },

  robotImage: {
    height: 280,
    width: 280,
  },
  welcomeText: {
    color: "#ffffff",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    position: "absolute",
    bottom: 0,
    right: 0,
    paddingVertical: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
    paddingTop: 12,
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 20,
    color: "#F35668",
  },
});
