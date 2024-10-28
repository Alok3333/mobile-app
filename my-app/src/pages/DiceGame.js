import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Alert,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Button, Text, Title, Paragraph } from "react-native-paper";
// import global1 from "./global1"; // Adjust the path as needed
import FinalGamePage from "./FinalGamePage"; // Adjust the path as needed

const dicesImage =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-16-548-dices.png";

const diceImages = [
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-16-919-dice_1.png",
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-16-938-dice_2.png",
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-16-954-dice_3.png",
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-16-1030-dice_4.png",
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-16-1057-dice_5.png",
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-16-1131-dice_6.png",
];

const DiceGame = () => {
  // const name = global1.student;
  // const regno = global1.regno;

  // Global data here
  const name = "Alok kumar prajapati";
  const regno = "njnw77y77";
  const avatarImg =
    "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png";

  const [level, setLevel] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const objective =
    "Playing this dice game offers a blend of fun and mental engagement! 🎲 It sharpens your decision-making skills as you choose numbers and strategize based on the dice rolls. The thrill of rolling the dice keeps the excitement alive, making it a great way to unwind and challenge yourself. 🌟 Plus, it's a perfect activity to enjoy with friends or family, promoting social interaction and friendly competition! 🤝🎉";

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
    setLevel((prev) => prev + 1);
  };

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => Math.min(prev + randomNumber, 100));
    } else {
      setScore((prev) => Math.max(prev - 2, 0));
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  const handleNext = () => {
    if (score >= 25) {
      setIsFinished(true);
      setLevel((prev) => prev + 1);
    } else {
      Alert.alert("You should get 25 score to go next level");
    }
  };

  const resetGamePage = () => {
    setLevel(0);
    setIsFinished(false);
    setScore(0);
    setSelectedNumber(undefined);
    setCurrentDice(1);
    setError("");
    setShowRules(false);
    setIsGameStarted(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header and Score */}
      {!isFinished && (
        <>
          <View style={styles.header}>
            <Text variant="titleSmall" style={styles.headerText}>
              Student: {name}
            </Text>
            <Text variant="titleSmall" style={styles.headerText}>
              Score: {score}
            </Text>
          </View>
          <View style={styles.header}>
            <Text variant="titleSmall" style={styles.headerText}>
              Register no: {regno}
            </Text>
          </View>
        </>
      )}

      {/* Game Levels */}
      {level === 0 && <StartGame toggle={toggleGamePlay} />}

      {!isFinished && level === 1 && (
        <ScrollView>
          {isGameStarted ? (
            <View style={styles.gameContainer}>
              <TotalScore score={score} />
              <NumberSelector
                error={error}
                setError={setError}
                selectedNumber={selectedNumber}
                setSelectedNumber={setSelectedNumber}
              />
              <RoleDice currentDice={currentDice} rollDice={rollDice} />
              <View style={styles.buttonContainer}>
                <Button mode="outlined" onPress={resetScore}>
                  Reset Score
                </Button>
                <Button onPress={() => setShowRules((prev) => !prev)}>
                  {showRules ? "Hide" : "Show"} Rules
                </Button>
                <Button mode="contained" onPress={handleNext}>
                  Next
                </Button>
              </View>
              {showRules && <Rules />}
            </View>
          ) : (
            <StartGame toggle={toggleGamePlay} />
          )}
        </ScrollView>
      )}

      {/* Finish Screen */}
      {isFinished && (
        <FinalGamePage
          username={name}
          regno={regno}
          profileImg={avatarImg}
          objective={objective}
          score={score}
          title="Dicey Decisions"
          rating=""
          onPlayAgain={resetGamePage}
        />
      )}
    </SafeAreaView>
  );
};

const TotalScore = ({ score }) => (
  <View style={styles.totalScore}>
    <Text variant="displayLarge">{score}</Text>
    <Text variant="titleMedium">Total Score</Text>
  </View>
);

const StartGame = ({ toggle }) => (
  <View style={styles.startGame}>
    <Image source={{ uri: dicesImage }} style={styles.dicesImage} />
    <Title style={styles.gameTitle}>Dicey Decisions</Title>
    <Button mode="contained" onPress={toggle}>
      Play Now
    </Button>
  </View>
);

const Rules = () => (
  <View style={styles.rules}>
    <Text variant="titleMedium">How to play the dice game</Text>
    <Paragraph>Select any number</Paragraph>
    <Paragraph>Click on the dice image</Paragraph>
    <Paragraph>
      If the selected number equals the dice number, you will get the same
      points as the dice.
    </Paragraph>
    <Paragraph>If you guess wrong, then 2 points will be deducted.</Paragraph>
  </View>
);

const RoleDice = ({ rollDice, currentDice }) => (
  <View style={styles.roleDice}>
    <Image
      source={{ uri: diceImages[currentDice - 1] }}
      style={styles.diceImage}
      onTouchEnd={rollDice}
    />
    <Text style={styles.diceInstruction}>Click on Dice to roll</Text>
  </View>
);

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  return (
    <View style={styles.numberSelector}>
      {error && <Text style={styles.errorMessage}>{error}</Text>}
      <View style={styles.numberButtons}>
        {arrNumber.map((value) => (
          <Button
            key={value}
            mode={value === selectedNumber ? "contained" : "outlined"}
            onPress={() => {
              setSelectedNumber(value);
              setError("");
            }}
            style={styles.numberButton}
          >
            {value}
          </Button>
        ))}
      </View>
      <Text>Select Number</Text>
    </View>
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
    marginBottom: 5,
    justifyContent: "space-between",
  },
  gameContainer: {
    alignItems: "center",
  },
  totalScore: {
    alignItems: "center",
    marginBottom: 20,
  },
  startGame: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: 150,
  },
  dicesImage: {
    width: "100%",
    height: 400,
    marginBottom: 20,
  },
  gameTitle: {
    fontSize: 32,
    marginBottom: 20,
  },
  rules: {
    marginTop: 20,
    marginBottom: 80,
    padding: 16,
    backgroundColor: "#fbf1f1",
    borderRadius: 8,
  },
  roleDice: {
    alignItems: "center",
    marginVertical: 150,
  },
  diceImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  diceInstruction: {
    fontSize: 18,
  },
  numberSelector: {
    alignItems: "center",
    marginVertical: 20,
  },
  errorMessage: {
    color: "#ff0000",
    fontWeight: "bold",
  },
  numberButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  numberButton: {
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
});

export default DiceGame;
