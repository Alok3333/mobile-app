import React, { useState, useEffect } from "react";
import {
  View,
  Alert,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  BackHandler,
} from "react-native";
import { Provider as PaperProvider, Button, Text } from "react-native-paper";
import HangmanCanvas from "./HangmanCanvas";
// import global1 from "./global1";
import FinalGamePage from "./FinalGamePage";
// import { useNavigation } from "@react-navigation/native";

// const name = global1.student;
// const regno = global1.regno;

// Global data here
const name = "Alok kumar prajapati";
const regno = "njnw77y77";
const avatarImg =
  "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png";

const words = [
  "REACT",
  "EDUCATION",
  "COLLEGE",
  "MAGIC",
  "HAVEFUN",
  "FEEDBACK",
  "SCHOOL",
  "LEARNING",
  "STUDENT",
  "TEACHER",
  "BOOKS",
  "HOMEWORK",
  "CLASSROOM",
  "UNIVERSITY",
  "GRADUATE",
  "KNOWLEDGE",
  "LECTURE",
  "ASSIGNMENT",
  "EXAMINATION",
  "RESEARCH",
  "DISCIPLINE",
  "CURRICULUM",
  "EDUCATION",
  "TUTORIAL",
  "SCHOLARSHIP",
  "LIBRARY",
  "STUDY",
  "LECTURER",
  "DEGREE",
  "ACADEMIC",
  "PROJECT",
  "PAPER",
  "COACHING",
  "WORKSHOP",
  "SCHOOLMATE",
  "FACULTY",
  "CLASSMATES",
  "CERTIFICATE",
  "ELECTIVE",
  "PROFESSOR",
  "MATH",
  "SCIENCE",
  "HISTORY",
  "LANGUAGE",
  "ENGLISH",
  "GEOGRAPHY",
  "ART",
  "MUSIC",
  "SPORTS",
  "CLUB",
  "FIELDTRIP",
  "PRACTICE",
  "VOLUNTEER",
  "TRIP",
  "FUN",
  "LIKE",
  "SHARE",
  "EVERYONE",
  "MANY",
  "MORE",
  "LIVE",
];

const WordGuessing = ({navigation}) => {
  // const navigation = useNavigation();
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const lettersToReveal = 2;

  const objective =
    "You should play this word guessing game to challenge your vocabulary and improve your language skills while having fun!";

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

  useEffect(() => {
    resetGame();
  }, []);

  useEffect(() => {
    if (isGameWon() || isGameLost()) {
      const timer = setTimeout(() => {
        if (isGameWon()) {
          setWins((prev) => prev + 1);
          setScore((prev) => prev + 5);
        } else {
          setLosses((prev) => prev + 1);
        }

        if (wordCount >= 20) {
          Alert.alert(
            "Game Over",
            "You've changed 20 words! The game will end."
          );
          setIsFinished(true);
        } else {
          resetGame();
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [mistakes, guessedLetters, word]);

  const chooseRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex].toUpperCase();
  };

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!word.includes(letter)) {
        setMistakes(mistakes + 1);
      }
    }
  };

  const isGameWon = () =>
    word.split("").every((letter) => guessedLetters.includes(letter));
  const isGameLost = () => mistakes >= 6;

  const resetGame = () => {
    const newWord = chooseRandomWord();
    setWord(newWord);
    setGuessedLetters(revealRandomLetters(newWord, lettersToReveal));
    setMistakes(0);
    setWordCount((prev) => prev + 1);
  };

  const revealRandomLetters = (word, count) => {
    const letters = new Set();
    while (letters.size < count) {
      const randomIndex = Math.floor(Math.random() * word.length);
      letters.add(word[randomIndex]);
    }
    return Array.from(letters);
  };

  const handleNextLevel = () => setIsFinished(true);

  const resetGamePage = () => {
    setLevel(0);
    setScore(0);
    setIsFinished(false);
    setWord("");
    setGuessedLetters([]);
    setMistakes(0);
    setWins(0);
    setLosses(0);
    setWordCount(0);
    resetGame(); // Call resetGame to reset the current word and letters
  };

  return (
    <SafeAreaView style={styles.container}>
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
          <View style={styles.headerView}>
            <Text variant="titleMedium" style={styles.headerText}>
              Wins: {wins} | Losses: {losses} | Words Changed: {wordCount}
            </Text>
          </View>
        </>
      )}

      {level === 0 && !isFinished && (
        <View style={styles.startScreen}>
          <Text variant="headlineSmall" style={{ marginBottom: 20 }}>
            Spellbound: The Word Game
          </Text>
          <Button mode="contained" onPress={() => setLevel((prev) => prev + 1)}>
            Play Game
          </Button>
        </View>
      )}

      {!isFinished && level === 1 && (
        <ScrollView>
          <View style={styles.gameContainer}>
            <Text variant="headlineSmall">Spellbound: The Word Game</Text>
            <Text variant="titleMedium" style={styles.gameDescription}>
              Start a new game, guess letters to reveal the word, and avoid
              making incorrect guesses. Have fun!
            </Text>
            <Text style={{ color: "#40513B" }}>
              We have over 50 words related to education. Guess the letters and
              have fun playing!
            </Text>
            <HangmanCanvas mistakes={mistakes} />
            <View style={styles.wordDisplay}>
              {word.split("").map((letter, index) => (
                <Text key={index} variant="titleMedium" style={styles.letter}>
                  {guessedLetters.includes(letter) ? letter : "*"}
                </Text>
              ))}
            </View>
            <View style={styles.keyboard}>
              {Array.from(Array(26)).map((_, index) => (
                <Button
                  mode="outlined"
                  key={index}
                  title={String.fromCharCode(65 + index)}
                  onPress={() => handleGuess(String.fromCharCode(65 + index))}
                  disabled={guessedLetters.includes(
                    String.fromCharCode(65 + index)
                  )}
                  style={{ margin: 5 }}
                >
                  {String.fromCharCode(65 + index)}
                </Button>
              ))}
            </View>
            {isGameWon() && (
              <Text variant="titleMedium" style={styles.resultMessage1}>
                You won!
              </Text>
            )}
            {isGameLost() && (
              <Text variant="titleMedium" style={styles.resultMessage}>
                You lost! The word was: {word}
              </Text>
            )}
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
              <Button
                mode="contained"
                onPress={resetGame}
                disabled={wordCount >= 20}
                style={{ marginHorizontal: 5 }}
              >
                Change word
              </Button>
              <Button
                mode="contained"
                onPress={handleNextLevel}
                disabled={wins < 10 && losses < 10}
                style={{ marginHorizontal: 5 }}
              >
                Next Level
              </Button>
            </View>
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
          title="Spellbound: The Word Game"
          rating=""
          onPlayAgain={resetGamePage}
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
    marginBottom: 5,
    justifyContent: "space-between",
  },
  headerView: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 20,
    justifyContent: "center",
  },
  headerText: {
    color: "#40513B",
  },
  startScreen: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginVertical: 350,
  },
  gameContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  gameDescription: {
    // fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
  wordDisplay: {
    flexDirection: "row",
    marginVertical: 20,
  },
  letter: {
    // fontSize: 24,
    marginHorizontal: 5,
    borderBottomWidth: 2,
    borderBottomColor: "#40513B",
  },
  keyboard: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 20,
  },
  resultMessage1: {
    color: "#00FF00",
    marginVertical: 20,
  },
  resultMessage: {
    color: "#FF0000",
    marginVertical: 20,
  },
});

export default WordGuessing;
