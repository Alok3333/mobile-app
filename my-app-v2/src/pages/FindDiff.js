import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Alert,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  BackHandler,
} from "react-native";
import { Button, TextInput, Title, Text, Paragraph } from "react-native-paper";
import FinalGamePage from "./FinalGamePage";
// import { useNavigation } from "@react-navigation/native";
// import global1 from "./global1";

// const name = global1.student;
// const regno = global1.regno;

// Global data here
const name = "Alok";
const regno = "njnw77y77";
const avatarImg =
  "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png";

// Dummy data for the game
const imageData = [
  {
    id: 1,
    img1: "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-7-2344-diff1.png",
    img2: "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-7-2449-diff2.png",
    differences: 9,
  },
  {
    id: 2,
    img1: "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-7-2533-diff3.png",
    img2: "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-7-269-diff4.png",
    differences: 10,
  },
];

const FindDiff = ({navigation}) => {
  // const navigation = useNavigation(); // Initialize navigation
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  // Game Objective
  const objective =
    'Embark on an exciting adventure with our "Find the Differences" game! Challenge your keen eye as you discover hidden differences between pairs of images.';

  // Disable back button and header back button
  useEffect(() => {
    const backAction = () => {
      if (level > 0) {
        Alert.alert("Warning", "You can't go back during the game!", [
          { text: "OK" },
        ]);
        return true; // Prevent back navigation
      }
      return false; // Allow back navigation
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    const unsubscribe = navigation.addListener("beforeRemove", (e) => {
      if (level > 0) {
        e.preventDefault(); // Prevent back action
        Alert.alert("Warning", "You can't go back during the game!", [
          { text: "OK" },
        ]);
      }
    });

    return () => {
      backHandler.remove();
      unsubscribe(); // Clean up listener
    };
  }, [level, navigation]);

  const handleAnswerChange = (text) => {
    setUserAnswers(text);
  };

  const handleSubmit = () => {
    const correctAnswers = imageData[currentImageIndex].differences;

    if (userAnswers.trim().length === 0) {
      Alert.alert("Input Error", "Please enter your answer.");
      return;
    }

    const userAnswerCount = parseInt(userAnswers.trim(), 10);

    if (userAnswerCount === correctAnswers) {
      Alert.alert(
        "Awesome!",
        `🎉 That's correct! You've found all ${correctAnswers} differences! Keep up the great work and click 'Next' to continue your adventure! 🚀`
      );
      setIsSubmit(true);
      setUserAnswers("");
    } else {
      Alert.alert(
        "Oops!",
        "It seems you missed a few differences. Don't worry, every great player learns from their mistakes! Try again one more time!",
        [
          {
            text: "Try Again",
            // onPress: resetGame,
          },
        ]
      );
    }
  };

  const handleNext1 = () => {
    if (isSubmit) {
      setLevel((prev) => prev + 1);
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
      setScore((prev) => prev + 50);
      setIsSubmit(false);
    }
  };

  const handleNext2 = () => {
    if (isSubmit) {
      setScore((prev) => prev + 50);
      setIsFinished(true); // Open the final page
    }
  };

  const resetGame = () => {
    setLevel(0);
    setScore(0);
    setIsFinished(false);
    setCurrentImageIndex(0);
    setUserAnswers("");
    setIsSubmit(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {!isFinished && (
        <>
          <View style={styles.header}>
            <Text variant="titleSmall">Student: {name}</Text>
            <Text variant="titleSmall">Score: {score}</Text>
          </View>
          <View>
            <Text variant="titleSmall">Register no: {regno}</Text>
          </View>
        </>
      )}

      {level === 0 && (
        <View style={styles.startScreen}>
          <Text variant="headlineSmall" style={styles.title}>
            Find the Differences!
          </Text>
          <Button mode="contained" onPress={() => setLevel((prev) => prev + 1)}>
            Play Game
          </Button>
        </View>
      )}

      {!isFinished && level === 1 && (
        <ScrollView style={styles.gameContainer}>
          <Title>Find the Differences!</Title>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: imageData[currentImageIndex].img1 }}
              style={styles.image}
            />
            <Image
              source={{ uri: imageData[currentImageIndex].img2 }}
              style={styles.image}
            />
          </View>
          <TextInput
            label="Enter the number of differences"
            value={userAnswers}
            onChangeText={handleAnswerChange}
            style={styles.input}
          />
          <View style={styles.buttonContainer}>
            <Button mode="contained" onPress={handleSubmit}>
              Submit
            </Button>
            <Button mode="outlined" onPress={handleNext1}>
              Next
            </Button>
          </View>
        </ScrollView>
      )}

      {!isFinished && level === 2 && (
        <ScrollView style={styles.gameContainer}>
          <Title>Find the Differences!</Title>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: imageData[currentImageIndex].img1 }}
              style={styles.image}
            />
            <Image
              source={{ uri: imageData[currentImageIndex].img2 }}
              style={styles.image}
            />
          </View>
          <TextInput
            label="Enter the number of differences"
            value={userAnswers}
            onChangeText={handleAnswerChange}
            style={styles.input}
          />
          <View style={styles.buttonContainer}>
            <Button mode="contained" onPress={handleSubmit}>
              Submit
            </Button>
            <Button mode="outlined" onPress={handleNext2}>
              Finish
            </Button>
          </View>
        </ScrollView>
      )}

      {isFinished && (
        <FinalGamePage
          username={name}
          regno={regno}
          profileImg={avatarImg}
          objective={objective}
          score={score}
          title="Find the Differences!"
          rating=""
          onPlayAgain={resetGame} // Pass the reset function here
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 0,
  },
  startScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: 20,
  },
  gameContainer: {
    marginVertical: 15,
  },
  imageContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    minHeight: 260,
    resizeMode: "cover",
  },
  input: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default FindDiff;