import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Alert,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Provider as PaperProvider, Button, Text } from "react-native-paper";

// import global1 from "./global1";
import FinalGamePage from "./FinalGamePage";
// const name = global1.student;
// const regno = global1.regno;

// Global data here
const name = "Alok kumar prajapati";
const regno = "njnw77y77";
const avatarImg =
  "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png";

let isNext = false;

// Main App Component
const CrosswordGridGame = () => {
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const crosswordData = [
    [
      {
        answer: "TIGER",
        hint: "The powerful predator roams the jungle",
        startx: 4,
        starty: 1,
        orientation: "down",
        position: 1,
      },
      {
        answer: "EAGLE",
        hint: "A majestic bird known for its keen eyesight",
        startx: 4,
        starty: 4,
        orientation: "across",
        position: 2,
      },
      {
        answer: "ITALIC",
        hint: "It's a style of typeface characterized by slanted letters",
        startx: 7,
        starty: 1,
        orientation: "down",
        position: 3,
      },
      {
        answer: "INFINITE",
        hint: "It describes something boundless or limitless in extent or quantity",
        startx: 1,
        starty: 2,
        orientation: "across",
        position: 4,
      },
    ],
    [
      {
        answer: "QUIVER",
        hint: "To shake or tremble slightly, often with rapid movements",
        startx: 1,
        starty: 4,
        orientation: "across",
        position: 1,
      },
      {
        answer: "TWIRL",
        hint: "To spin or rotate quickly",
        startx: 3,
        starty: 2,
        orientation: "down",
        position: 2,
      },
      {
        answer: "GAZE",
        hint: "To look steadily and intently at something, often implying concentration or contemplation",
        startx: 5,
        starty: 1,
        orientation: "down",
        position: 3,
      },
      {
        answer: "FLUTE",
        hint: "A musical instrument with a high-pitched sound",
        startx: 2,
        starty: 6,
        orientation: "across",
        position: 4,
      },
    ],
  ];

  const handleClickNext = () => {
    if (isNext) {
      setScore((pev) => pev + 99);
      setIsFinished(true);
      isNext = false;
    } else {
      Alert.alert(
        "Great effort! 😊 Please complete all the letters before moving to the next level."
      );
    }
  };

  const resetGamePage = () => {
    setScore(0);
    setLevel(0);
    setIsFinished(false);
    // setGrid(generateInitialGrid(crosswordData));
    isNext = false;
  };

  return (
    <SafeAreaView style={styles.container1}>
      {!isFinished && (
        <>
          <View style={styles.header}>
            <Text variant="titleSmall">Student: {name}</Text>
            <Text variant="titleSmall">Score: {score}</Text>
          </View>
          <View style={styles.header}>
            <Text variant="titleSmall">Register no: {regno}</Text>
          </View>
        </>
      )}

      {level === 0 && !isFinished && (
        <View style={styles.startScreen}>
          <Text variant="headlineSmall" style={{ marginBottom: 20 }}>
            Cross word guessing
          </Text>
          <Button mode="contained" buttonColor="#228B22" onPress={() => setLevel((prev) => prev + 1)}>
            Play Game
          </Button>
        </View>
      )}

      {!isFinished && level === 1 && (
        <ScrollView>
          <View style={styles.container}>
            <CrosswordGrid crosswordData={crosswordData} />
            <Button
              icon="arrow-right"
              mode="contained"
              buttonColor="#008000"
              onPress={handleClickNext}
            >
              Next
            </Button>
          </View>
        </ScrollView>
      )}

      {isFinished && (
        <FinalGamePage
          username={name}
          regno={regno}
          profileImg={avatarImg}
          objective="🧩 Engaging with this crossword game boosts cognitive skills like problem-solving and critical thinking while providing an enjoyable challenge. 📚 It encourages vocabulary expansion and improves spelling through interactive play. 🎉 Plus, players experience a sense of achievement as they complete puzzles, making it a fun way to learn and relax at the same time! 🌟"
          score={score}
          title="Cross word guessing Game"
          rating=""
          onPlayAgain={resetGamePage}
        />
      )}
    </SafeAreaView>
  );
};

// CrosswordGrid Component
const CrosswordGrid = ({ crosswordData }) => {
  let level = 0;

  const generateInitialGrid = (crosswordData) => {
    const initialGrid = Array(7)
      .fill(0)
      .map(() => Array(8).fill("X"));
    crosswordData[level].forEach(({ answer, startx, starty, orientation }) => {
      let x = startx - 1;
      let y = starty - 1;

      for (let i = 0; i < answer.length; i++) {
        if (orientation === "across") {
          initialGrid[y][x + i] = "";
        } else if (orientation === "down") {
          initialGrid[y + i][x] = "";
        }
      }
    });
    return initialGrid;
  };

  const generateAnswerGrid = (crosswordData) => {
    const answerGrid = Array(7)
      .fill(0)
      .map(() => Array(8).fill("X"));
    crosswordData[level].forEach(({ answer, startx, starty, orientation }) => {
      let x = startx - 1;
      let y = starty - 1;

      for (let i = 0; i < answer.length; i++) {
        if (orientation === "across") {
          answerGrid[y][x + i] = answer[i];
        } else if (orientation === "down") {
          answerGrid[y + i][x] = answer[i];
        }
      }
    });
    return answerGrid;
  };

  const [grid, setGrid] = useState(generateInitialGrid(crosswordData));

  useEffect(() => {
    setGrid(generateInitialGrid(crosswordData));
  }, [crosswordData]);

  const handleInputChange = (row, col, text) => {
    const newGrid = [...grid];
    newGrid[row][col] = text.toUpperCase();
    setGrid(newGrid);
  };

  const handleGenerate = () => {
    level = (level + 1) % 2;
    setGrid(generateInitialGrid(crosswordData));
  };

  const handleVerify = () => {
    const answerGrid = generateAnswerGrid(crosswordData);
    const isCorrect = JSON.stringify(grid) === JSON.stringify(answerGrid);
    Alert.alert(
      isCorrect
        ? "Congratulations! Your crossword is correct."
        : "Incorrect. Please try again."
    );
    if (isCorrect) {
      isNext = true;
    }
  };

  const handleReset = () => {
    setGrid(generateInitialGrid(crosswordData));
  };

  const handleSolve = () => {
    const answerGrid = generateAnswerGrid(crosswordData);
    setGrid(answerGrid);
  };

  const renderGrid = () => (
    <View>
      {grid.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => (
            <View key={colIndex} style={styles.cellContainer}>
              {crosswordData[level].map((entry) => {
                const { startx, starty, position } = entry;
                if (rowIndex + 1 === starty && colIndex + 1 === startx) {
                  return (
                    <Text key={`digit-${position}`} style={styles.smallDigit}>
                      {position}
                    </Text>
                  );
                }
                return null;
              })}
              <TextInput
                style={[
                  styles.cell,
                  grid[rowIndex][colIndex] === "X" ? styles.staticCell : null,
                ]}
                value={cell}
                editable={grid[rowIndex][colIndex] !== "X"}
                onChangeText={(text) =>
                  handleInputChange(rowIndex, colIndex, text)
                }
                maxLength={1}
              />
            </View>
          ))}
        </View>
      ))}
    </View>
  );

  const renderQuestions = () => {
    const questions = { across: [], down: [] };

    crosswordData[level].forEach(({ hint, orientation, position }) => {
      const questionText = `${position}. ${hint}`;
      questions[orientation].push(
        <Text key={`question-${position}`} style={styles.questionText}>
          {questionText}
        </Text>
      );
    });

    return (
      <View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Across</Text>
        </View>
        <View style={styles.questionsContainer}>
          {questions.across.map((question, index) => (
            <View key={`across-question-container-${index}`}>{question}</View>
          ))}
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Down</Text>
        </View>
        <View style={styles.questionsContainer}>
          {questions.down.map((question, index) => (
            <View key={`down-question-container-${index}`}>{question}</View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderQuestions()}
      {renderGrid()}
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          buttonColor="#228B22"
          title="Generate"
          onPress={handleGenerate}
        >
          Generate
        </Button>
        <View style={styles.gap} />
        <Button
          mode="contained"
          buttonColor="#228B22"
          title="Verify"
          onPress={handleVerify}
        >
          Verify
        </Button>
        <View style={styles.gap} />
        <Button
          mode="contained"
          buttonColor="#228B22"
          title="Reset"
          onPress={handleReset}
        >
          Reset
        </Button>
        <View style={styles.gap} />
        {/* <Button
          mode="contained"
          buttonColor="#228B22"
          title="Solve"
          onPress={handleSolve}
        >
          Solve
        </Button> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    marginBottom: 5,
    justifyContent: "space-between",
  },
  startScreen: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginVertical: 350,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 80,
  },
  row: {
    flexDirection: "row",
  },
  cellContainer: {
    position: "relative",
  },
  cell: {
    borderWidth: 1,
    margin: 1,
    borderColor: "#228B22",
    width: 30,
    height: 30,
    textAlign: "center",
  },
  staticCell: {
    borderColor: "transparent",
    color: "white",
  },
  smallDigit: {
    position: "absolute",
    top: 2,
    left: 2,
    fontSize: 10,
    fontWeight: "bold",
  },
  questionsContainer: {
    justifyContent: "space-between",
    marginBottom: 10,
    padding: 10,
  },
  questionText: {
    fontSize: 16,
    fontStyle: "italic",
  },
  headingContainer: {
    marginTop: 10,
    marginBottom: 5,
  },
  headingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#228B22",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 40,
    marginHorizontal: 10,
  },
  gap: {
    width: 10,
  },
});

export default CrosswordGridGame;
