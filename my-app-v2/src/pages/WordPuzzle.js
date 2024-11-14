// import React, { useState } from "react";
// import { View, Text, StyleSheet, SafeAreaView, Alert, ScrollView } from "react-native";
// import { TextInput, Button, Card } from "react-native-paper";

// const WordPuzzle = () => {
//   const [userAnswers, setUserAnswers] = useState({
//     across1: Array(6).fill(""),
//     across2: Array(5).fill(""),
//     across3: Array(5).fill(""),
//     down1: Array(3).fill(""),
//     down2: Array(3).fill(""),
//     down3: Array(1).fill(""),
//   });

//   const handleInputChange = (key, index, value) => {
//     const newAnswers = { ...userAnswers };
//     newAnswers[key][index] = value.toUpperCase();
//     setUserAnswers(newAnswers);
//   };

//   const checkAnswers = () => {
//     const correctAnswers = {
//       across1: "BANANA",
//       across2: "OCEAN",
//       across3: "GREEN",
//       down1: "BAT",
//       down2: "PIG",
//       down3: "A",
//     };

//     let isCorrect = true;
//     for (let key in correctAnswers) {
//       if (userAnswers[key].join("") !== correctAnswers[key]) {
//         isCorrect = false;
//         break;
//       }
//     }

//     if (isCorrect) {
//       Alert.alert("Congratulations!", "All answers are correct!");
//     } else {
//       Alert.alert("Oops!", "Some answers are incorrect. Please try again.");
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView style={styles.scrollView}>
//         <Text style={styles.title}>Crossword Puzzle</Text>

//         <View style={styles.clueSection}>
//           <Text style={styles.subtitle}>Across</Text>
//           <View style={styles.clueContainer}>
//             <Text style={styles.clueText}>1) A fruit that is yellow and curved</Text>
//             <Text style={styles.clueText}>2) A large body of water</Text>
//             <Text style={styles.clueText}>3) A color of the rainbow</Text>
//           </View>
//         </View>

//         <View style={styles.clueSection}>
//           <Text style={styles.subtitle}>Down</Text>
//           <View style={styles.clueContainer}>
//             <Text style={styles.clueText}>1) A mammal that can fly</Text>
//             <Text style={styles.clueText}>2) A farm animal that says oink</Text>
//             <Text style={styles.clueText}>3) The first letter of the alphabet</Text>
//           </View>
//         </View>

//         <Card style={styles.gridCard}>
//           <Card.Content style={styles.cardContent}>
//             {userAnswers.across1.map((_, index) => (
//               <View
//                 key={`across1-${index}`}
//                 style={[styles.inputBox, { top: 30, left: 30 + index * 50 }]}
//               >
//                 <TextInput
//                   style={styles.textInput}
//                   maxLength={1}
//                   value={userAnswers.across1[index]}
//                   onChangeText={(text) => handleInputChange("across1", index, text)}
//                   autoCapitalize="characters"
//                 />
//               </View>
//             ))}
//             {userAnswers.across2.map((_, index) => (
//               <View
//                 key={`across2-${index}`}
//                 style={[styles.inputBox, { top: 130, left: 80 + index * 50 }]}
//               >
//                 <TextInput
//                   style={styles.textInput}
//                   maxLength={1}
//                   value={userAnswers.across2[index]}
//                   onChangeText={(text) => handleInputChange("across2", index, text)}
//                   autoCapitalize="characters"
//                 />
//               </View>
//             ))}
//             {userAnswers.across3.map((_, index) => (
//               <View
//                 key={`across3-${index}`}
//                 style={[styles.inputBox, { top: 180, left: 130 + index * 50 }]}
//               >
//                 <TextInput
//                   style={styles.textInput}
//                   maxLength={1}
//                   value={userAnswers.across3[index]}
//                   onChangeText={(text) => handleInputChange("across3", index, text)}
//                   autoCapitalize="characters"
//                 />
//               </View>
//             ))}
//             {userAnswers.down1.map((_, index) => (
//               <View
//                 key={`down1-${index}`}
//                 style={[styles.inputBox, { top: 80 + index * 50, left: 30 }]}
//               >
//                 <TextInput
//                   style={styles.textInput}
//                   maxLength={1}
//                   value={userAnswers.down1[index]}
//                   onChangeText={(text) => handleInputChange("down1", index, text)}
//                   autoCapitalize="characters"
//                 />
//               </View>
//             ))}
//             {userAnswers.down2.map((_, index) => (
//               <View
//                 key={`down2-${index}`}
//                 style={[styles.inputBox, { top: 180 + index * 50, left: 80 }]}
//               >
//                 <TextInput
//                   style={styles.textInput}
//                   maxLength={1}
//                   value={userAnswers.down2[index]}
//                   onChangeText={(text) => handleInputChange("down2", index, text)}
//                   autoCapitalize="characters"
//                 />
//               </View>
//             ))}
//             {userAnswers.down3.map((_, index) => (
//               <View
//                 key={`down3-${index}`}
//                 style={[styles.inputBox, { top: 80 + index * 50, left: 80 }]}
//               >
//                 <TextInput
//                   style={styles.textInput}
//                   maxLength={1}
//                   value={userAnswers.down3[index]}
//                   onChangeText={(text) => handleInputChange("down3", index, text)}
//                   autoCapitalize="characters"
//                 />
//               </View>
//             ))}
//           </Card.Content>
//         </Card>

//         <Button mode="contained" onPress={checkAnswers} style={styles.button}>
//           Check Answers
//         </Button>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 20,
//   },
//   scrollView: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   subtitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginTop: 20,
//   },
//   clueContainer: {
//     marginBottom: 10,
//   },
//   clueText: {
//     fontSize: 16,
//   },
//   gridCard: {
//     marginTop: 20,
//     position: "relative",
//     height: 400,
//   },
//   cardContent: {
//     position: "relative",
//     height: "100%",
//   },
//   inputBox: {
//     position: "absolute",
//     justifyContent: "center",
//     alignItems: "center",
//     width: 40,
//     height: 40,
//     borderWidth: 1,
//     borderColor: "#ccc",
//   },
//   textInput: {
//     width: 40,
//     height: 40,
//     textAlign: "center",
//     fontSize: 18,
//     backgroundColor: "#fff",
//   },
//   button: {
//     marginTop: 20,
//     marginBottom: 20,
//   },
// });

// export default WordPuzzle;

import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Text, Button, Alert } from "react-native";

let level = 0;

const generateInitialGrid = (crosswordData) => {
  // Ensure crosswordData exists and has data
  if (!crosswordData || !crosswordData[level]) return [];

  const gridSize = 12; // Increased grid size for flexibility
  const initialGrid = Array(gridSize)
    .fill(0)
    .map(() => Array(gridSize).fill("X"));

  // Populate the grid based on crosswordData
  crosswordData[level].forEach(({ answer, startx, starty, orientation }) => {
    let x = startx - 1;
    let y = starty - 1;

    for (let i = 0; i < answer.length; i++) {
      if (orientation === "across") {
        if (x + i < gridSize) initialGrid[y][x + i] = "";
      } else if (orientation === "down") {
        if (y + i < gridSize) initialGrid[y + i][x] = "";
      }
    }
  });

  return initialGrid;
};

const generateAnswerGrid = (crosswordData) => {
  if (!crosswordData || !crosswordData[level]) return [];

  const gridSize = 12;
  const answerGrid = Array(gridSize)
    .fill(0)
    .map(() => Array(gridSize).fill("X"));

  crosswordData[level].forEach(({ answer, startx, starty, orientation }) => {
    let x = startx - 1;
    let y = starty - 1;

    for (let i = 0; i < answer.length; i++) {
      if (orientation === "across") {
        if (x + i < gridSize) answerGrid[y][x + i] = answer[i];
      } else if (orientation === "down") {
        if (y + i < gridSize) answerGrid[y + i][x] = answer[i];
      }
    }
  });

  return answerGrid;
};

const CrosswordGrid = ({ crosswordData }) => {
  const [grid, setGrid] = useState(generateInitialGrid(crosswordData));
  const [submitVer, setSubmitVer] = useState(false);

  useEffect(() => {
    setGrid(generateInitialGrid(crosswordData));
  }, [crosswordData]);

  const handleInputChange = (row, col, text) => {
    const newGrid = [...grid];
    newGrid[row][col] = text.toUpperCase();
    setGrid(newGrid);
  };

  const handleGenerate = () => {
    level = (level + 1) % crosswordData.length;
    setGrid(generateInitialGrid(crosswordData));
  };

  const handleVerify = () => {
    const answerGrid = generateAnswerGrid(crosswordData);
    const isCorrect = JSON.stringify(grid) === JSON.stringify(answerGrid);
    if (isCorrect) {
      Alert.alert("Congratulations!", "Your crossword is correct.");
      setSubmitVer(true);
    } else {
      Alert.alert("Incorrect", "Please try again.");
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

  const handleSubmit = () => {
    Alert.alert("Submitted!", "Submitted Successfully!");
    setSubmitVer(false);
  };

  return (
    <View style={styles.container}>
      {renderQuestions()}
      {renderGrid()}
      <View style={styles.buttonContainer}>
        {/* <Button color={'#9d96dc'}
                        title="Generate"
                        onPress={handleGenerate} 
                        style={styles.button} /> */}
        <View style={styles.gap} />
        <Button
          color={"#9d96dc"}
          title="Verify"
          onPress={handleVerify}
          style={styles.button}
        />
        <View style={styles.gap} />
        <Button
          color={"#9d96dc"}
          title="Reset"
          onPress={handleReset}
          style={styles.button}
        />
        <View style={styles.gap} />
        <Button
          color={"#9d96dc"}
          title="Solve"
          onPress={handleSolve}
          style={styles.button}
        />
      </View>
      {submitVer && (
        <Button
          color={"#9d96dc"}
          title="Submit"
          onPress={handleSubmit}
          style={{ marginTop: 30 }}
        />
      )}
    </View>
  );
};

const WordPuzzle = () => {
  const crosswordData = [
    [
      {
        answer: "EXTINCT",
        hint: "Species which have vanished.",
        startx: 1,
        starty: 1,
        orientation: "across",
        position: 1,
      },
      {
        answer: "ENDANGERED",
        hint: "Species on the verge of extinction.",
        startx: 1,
        starty: 2,
        orientation: "down",
        position: 2,
      },
      {
        answer: "BIODIVERSITY",
        hint: "Variety of plants, animals, and microorganisms found in an area.",
        startx: 1,
        starty: 5,
        orientation: "across",
        position: 3,
      },
      {
        answer: "IUCN",
        hint: "A book carrying information about endangered species.",
        startx: 4,
        starty: 1,
        orientation: "down",
        position: 4,
      },
    ],
    [
      {
        answer: "DEFORSTATION",
        hint: "Consequence of deforestation.",
        startx: 5,
        starty: 1,
        orientation: "across",
        position: 5,
      },
      {
        answer: "ENDEMIC",
        hint: "Species found only in a particular habitat.",
        startx: 3,
        starty: 4,
        orientation: "down",
        position: 6,
      },
    ],
  ];

  return (
    <View style={styles.container}>
      <CrosswordGrid crosswordData={crosswordData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    borderColor: "#9d96dc",
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
    // fontSize: 10,
    // fontWeight: "bold",
  },
  questionsContainer: {
    justifyContent: "space-between",
    marginBottom: 10,
    padding: 10,
  },
  questionText: {
    // fontSize: 16,
    // fontStyle: "italic",
  },
  headingContainer: {
    marginTop: 10,
    marginBottom: 5,
  },
  headingText: {
    // fontSize: 18,
    // fontWeight: "bold",
    color: "#9d96dc",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    flex: 1,
  },
  gap: {
    width: 10,
  },
});

export default WordPuzzle;
