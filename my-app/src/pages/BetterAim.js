import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Button, Provider, Text } from "react-native-paper";
import FinalGamePage from "./FinalGamePage";

// // // Global data here
// // const name = global1.student;
// // const regno = global1.regno;
// // const avatarImg = global1.profileImage; // global1 profile pic here

const name = "Alok kumar prajapati";
const regno = "vbhb7373";
const avatarImg =
  "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png";

const BetterAim = () => {
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [dots, setDots] = useState([]);
  const [isGameActive, setIsGameActive] = useState(false);
  const [dotTimeout, setDotTimeout] = useState(null);
  const [timer, setTimer] = useState(300); // 5 minutes in seconds
  const [isNextEnabled, setIsNextEnabled] = useState(false);
  const [difficulty, setDifficulty] = useState(null);

  const objective =
    "BetterAim is a fast-paced game that sharpens your reflexes and hand-eye coordination while providing engaging gameplay.";

  const createDot = () => {
    const newDot = {
      id: Date.now(),
      left: Math.random() * 90 + "%",
      top: Math.random() * 90 + "%",
    };
    setDots((prevDots) => [...prevDots, newDot]);

    const timeoutDuration =
      difficulty === "easy"
        ? 1500
        : difficulty === "medium"
        ? 1000
        : difficulty === "hard"
        ? 500
        : 800; // Default

    const timeout = setTimeout(() => {
      setDots((prevDots) => prevDots.filter((dot) => dot.id !== newDot.id));
    }, timeoutDuration);

    setDotTimeout(timeout);
  };

  const handleDotClick = (id) => {
    setDots((prevDots) => prevDots.filter((dot) => dot.id !== id));
    setScore((prevScore) => Math.min(prevScore + 5, 100)); // Limit score to 100
    clearTimeout(dotTimeout);
  };

  useEffect(() => {
    if (isGameActive) {
      createDot();
      const interval = setInterval(createDot, 1000);

      return () => clearInterval(interval);
    }
  }, [isGameActive]);

  useEffect(() => {
    if (isGameActive) {
      const timerInterval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(timerInterval);
            setIsGameActive(false);
            setIsNextEnabled(true);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [isGameActive]);

  const startGame = () => {
    setIsGameActive(true);
    setScore(0);
    setDots([]);
    setTimer(300); // Reset timer to 5 minutes
    setIsNextEnabled(false);
  };

  const stopGame = () => {
    setIsGameActive(false); // Stop the game
    setIsNextEnabled(true); // Enable Next button when game stops
    setDots([]); // Clear remaining dots
    clearTimeout(dotTimeout); // Clear any pending timeouts
  };

  const handleClickNext = () => {
    if (!isGameActive || score === 100) {
      setIsFinished(true);
    }
  };

  const handleClickPrev = () => {
    if (!isGameActive) {
      setLevel((pev) => pev - 1);
    }
  };

  const handleClickEasy = () => {
    setDifficulty("easy");
    setLevel(2);
  };

  const handleClickMedium = () => {
    setDifficulty("medium");
    setLevel(2);
  };

  const handleClickHard = () => {
    setDifficulty("hard");
    setLevel(2);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const resetGame = () => {
    setLevel(0);
    setScore(0);
    setIsFinished(false);
    setDots([]);
    setIsGameActive(false);
    setTimer(300); // Reset timer to 5 minutes
    setIsNextEnabled(false);
    setDifficulty(null);
  };

  return (
    <Provider>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header and Score */}
        {!isFinished && (
          <View style={styles.headeritem}>
            <View style={styles.header}>
              <Text variant="titleSmall">Username: {name}</Text>
              <Text variant="titleSmall">Score: {score}</Text>
            </View>
            <View style={styles.header}>
              <Text variant="titleSmall">Register no: {regno}</Text>
            </View>
          </View>
        )}

        {/* Game Levels */}
        {level === 0 && (
          <View style={styles.centeredContainer}>
            <Text variant="headlineSmall" style={styles.title}>
              Aim Master/Dot Dash Challenge
            </Text>
            <Button
              mode="contained"
              onPress={() => setLevel((prev) => prev + 1)}
            >
              Play Game
            </Button>
          </View>
        )}

        {!isFinished && level === 1 && (
          <View>
            <Text variant="headlineLarge" style={{textAlign: "center", textTransform: "uppercase",  color: "rgba(0,0,0,0.6)", fontWeight: "bold",}}>Difficulty :</Text>
            <View style={styles.buttonGroup}>
              <Button mode="outlined" onPress={handleClickEasy}>
                Easy
              </Button>
              <Button mode="outlined" onPress={handleClickMedium}>
                Medium
              </Button>
              <Button mode="outlined" onPress={handleClickHard}>
                Hard
              </Button>
            </View>
          </View>
        )}

        {!isFinished && level === 2 && difficulty && (
          <View style={styles.gameContainer}>
            <Text style={styles.title}>BetterAim Game</Text>
            <Text style={styles.timer}>Time: {formatTime(timer)}</Text>
            <Button
              onPress={isGameActive ? stopGame : startGame}
              style={styles.startButton}
            >
              {isGameActive ? "Stop Game" : "Start Game"}
            </Button>
            <View style={styles.dotArea}>
              {isGameActive &&
                dots.map((dot) => (
                  <TouchableOpacity
                    key={dot.id}
                    style={[styles.dot, { left: dot.left, top: dot.top }]}
                    onPress={() => handleDotClick(dot.id)}
                  />
                ))}
            </View>
            <View
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <Button
                mode="contained"
                onPress={handleClickPrev}
                // disabled={!isNextEnabled}
              >
                Previous
              </Button>
              <Button
                mode="contained"
                onPress={handleClickNext}
                disabled={!isNextEnabled}
              >
                Next
              </Button>
            </View>
          </View>
        )}

        {/* Finish Screen */}
        {isFinished && (
          <FinalGamePage
            username={name}
            regno={regno}
            profileImg={avatarImg}
            objective={objective}
            score={score}
            title="Aim Master"
            rating=""
            onPlayAgain={resetGame} // pass the reset function here
          />
        )}
      </ScrollView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "pink",
    position: "relative",
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  headeritem: {
    // backgroundColor: "red",
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    right: 0,
    marginVertical: 15,
    marginHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    marginVertical: 0,
  },
  centeredContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  title: {
    marginBottom: 20,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  gameContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  timer: {
    fontSize: 18,
    marginVertical: 10,
  },
  startButton: {
    marginBottom: 20,
  },
  dotArea: {
    position: "relative",
    height: 500,
    width: "100%",
    backgroundColor: "#f0f0f0",
    overflow: "hidden",
  },
  dot: {
    position: "absolute",
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "red",
  },
});

export default BetterAim;
