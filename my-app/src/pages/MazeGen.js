// // // import React, { useState, useEffect } from "react";
// // // import {
// // //   View,
// // //   Alert,
// // //   StyleSheet,
// // //   ScrollView,
// // //   SafeAreaView,
// // // } from "react-native";
// // // import {
// // //   Button,
// // //   TextInput,
// // //   Appbar,
// // //   Paragraph,
// // //   Title,
// // //   Caption,
// // //   Text,
// // // } from "react-native-paper";
// // // import { generateMaze } from "./mazeUtils"; // Import your maze generation logic

// // // const MazeGen = () => {
// // //   const username = "Alok"; // Global data example
// // //   const registerNo = "njnw77y77"; // Global data example
// // //   const [level, setLevel] = useState(0);
// // //   const [score, setScore] = useState(0);
// // //   const [isFinished, setIsFinished] = useState(false);
// // //   const [isReached, setIsReached] = useState(false);
// // //   const [maze, setMaze] = useState([]);
// // //   const [difficulty, setDifficulty] = useState("easy");
// // //   const [yellowSquare, setYellowSquare] = useState({ x: 0, y: 0 });
// // //   const [timer, setTimer] = useState(70);
// // //   const [isTimerActive, setIsTimerActive] = useState(false);
// // //   const [isPlaying, setIsPlaying] = useState(false);

// // //   const mazeSettings = {
// // //     easy: { width: 11, height: 11 },
// // //     medium: { width: 21, height: 21 },
// // //     hard: { width: 31, height: 31 },
// // //   };

// // //   const timerSettings = {
// // //     easy: 70,
// // //     medium: 320,
// // //     hard: 500,
// // //   };

// // //   const redDot = { x: 0, y: 0 }; // Red dot position

// // //   const createMaze = () => {
// // //     const { width, height } = mazeSettings[difficulty];
// // //     const newMaze = generateMaze(width, height);
// // //     setMaze(newMaze);
// // //     setYellowSquare({ x: 0, y: height - 1 });
// // //     setTimer(timerSettings[difficulty]);
// // //     setIsPlaying(false);
// // //     setIsTimerActive(false);
// // //   };

// // //   const moveSquare = (dx, dy) => {
// // //     if (!isPlaying) return;

// // //     const newX = yellowSquare.x + dx;
// // //     const newY = yellowSquare.y + dy;

// // //     if (
// // //       newX >= 0 &&
// // //       newX < maze[0].length &&
// // //       newY >= 0 &&
// // //       newY < maze.length &&
// // //       maze[newY][newX] === 0
// // //     ) {
// // //       setYellowSquare({ x: newX, y: newY });

// // //       if (newX === redDot.x && newY === redDot.y) {
// // //         Alert.alert("Congratulations!", "You reached the target red dot!");
// // //         setIsReached(true);
// // //       }
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     let interval;
// // //     if (isTimerActive && timer > 0) {
// // //       interval = setInterval(() => {
// // //         setTimer((prev) => prev - 1);
// // //       }, 1000);
// // //     } else if (timer === 0) {
// // //       setIsTimerActive(false);
// // //       setIsPlaying(false);
// // //       Alert.alert("Time's up!", "You can now proceed to the next level.");
// // //       setIsReached(false);
// // //     }
// // //     return () => clearInterval(interval);
// // //   }, [isTimerActive, timer]);

// // //   const handleFinished = () => {
// // //     let calculatedScore = isReached ? 100 : Math.floor(Math.random() * 11) + 10;
// // //     setScore(calculatedScore);
// // //     setLevel((prev) => prev + 1);
// // //     setIsFinished(true);
// // //   };

// // //   const handlePlay = () => {
// // //     setIsPlaying(true);
// // //     setIsTimerActive(true);
// // //   };

// // //   return (
// // //     <SafeAreaView style={styles.container}>
// // //       {!isFinished && (
// // //         <>
// // //           <View style={styles.header}>
// // //             <Text variant="titleSmall">Username: {username}</Text>
// // //             <Text variant="titleSmall">Register no: {registerNo}</Text>
// // //           </View>
// // //           <View style={styles.header}>
// // //             <Text variant="titleSmall">Score: {score}</Text>
// // //             <Text variant="titleSmall">
// // //               Time Left: {Math.floor(timer / 60)}:
// // //               {("0" + (timer % 60)).slice(-2)}
// // //             </Text>
// // //           </View>
// // //         </>
// // //       )}

// // //       {!isFinished && level === 0 && (
// // //         <View style={styles.startScreen}>
// // //           <Title>Welcome to the Maze Game!</Title>
// // //           <Button mode="contained" onPress={() => setLevel((prev) => prev + 1)}>
// // //             Play Game
// // //           </Button>
// // //         </View>
// // //       )}

// // //       {!isFinished && level === 1 && (
// // //         <ScrollView contentContainerStyle={styles.gameContainer}>
// // //           <TextInput
// // //             label="Select Difficulty"
// // //             value={difficulty}
// // //             onChangeText={setDifficulty}
// // //             style={styles.input}
// // //           />
// // //           <Button mode="contained" onPress={createMaze}>
// // //             Generate Maze
// // //           </Button>
// // //           <View style={styles.maze}>
// // //             {maze.map((row, y) =>
// // //               row.map((cell, x) => (
// // //                 <View
// // //                   key={`${x}-${y}`}
// // //                   style={[
// // //                     styles.cell,
// // //                     { backgroundColor: cell === 1 ? "black" : "white" },
// // //                   ]}
// // //                 >
// // //                   {x === redDot.x && y === redDot.y && (
// // //                     <View style={styles.redDot} />
// // //                   )}
// // //                   {x === yellowSquare.x && y === yellowSquare.y && (
// // //                     <View style={styles.yellowSquare} />
// // //                   )}
// // //                 </View>
// // //               ))
// // //             )}
// // //           </View>
// // //           <View style={styles.buttonContainer}>
// // //             <Button mode="outlined" onPress={handlePlay}>
// // //               {isPlaying ? "Pause" : "Play"}
// // //             </Button>
// // //             <Button
// // //               mode="outlined"
// // //               onPress={handleFinished}
// // //               disabled={timer > 0 && !isReached}
// // //             >
// // //               Next
// // //             </Button>
// // //           </View>
// // //         </ScrollView>
// // //       )}

// // //       {isFinished && (
// // //         <FinalGamePage
// // //           username={username}
// // //           regno={registerNo}
// // //           score={score}
// // //           title="Maze Generation Game"
// // //         />
// // //       )}
// // //     </SafeAreaView>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     padding: 16,
// // //     backgroundColor: "#fff",
// // //   },
// // //   header: {
// // //     flexDirection: "row",
// // //     justifyContent: "space-between",
// // //     marginBottom: 0,
// // //   },
// // //   startScreen: {
// // //     flex: 1,
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //   },
// // //   gameContainer: {
// // //     // alignItems: "center",
// // //   },
// // //   maze: {
// // //     flexDirection: "row",
// // //     flexWrap: "wrap",
// // //     width: "100%",
// // //     maxWidth: 350, // Adjust as necessary
// // //   },
// // //   cell: {
// // //     width: 20,
// // //     height: 20,
// // //     borderColor: "grey",
// // //     borderWidth: 1,
// // //   },
// // //   redDot: {
// // //     width: "100%",
// // //     height: "100%",
// // //     backgroundColor: "red",
// // //     borderRadius: 10,
// // //   },
// // //   yellowSquare: {
// // //     width: "100%",
// // //     height: "100%",
// // //     backgroundColor: "yellow",
// // //   },
// // //   buttonContainer: {
// // //     flexDirection: "row",
// // //     justifyContent: "space-around",
// // //     marginTop: 20,
// // //   },
// // // });

// // // export default MazeGen;

// // // ------------------------------------------------------

// // // import React, { useState, useEffect } from "react";
// // // import {
// // //   View,
// // //   StyleSheet,
// // //   Alert,
// // // } from "react-native";
// // // import { Provider as PaperProvider, Appbar, Button, Text } from "react-native-paper";

// // // // Maze generation logic
// // // const generateMaze = (width, height) => {
// // //   const maze = Array.from({ length: height }, () => Array(width).fill(1));

// // //   const carve = (x, y) => {
// // //     maze[y][x] = 0;

// // //     const directions = [
// // //       { dx: 2, dy: 0 }, // East
// // //       { dx: -2, dy: 0 }, // West
// // //       { dx: 0, dy: 2 }, // South
// // //       { dx: 0, dy: -2 }, // North
// // //     ];

// // //     for (let i = directions.length - 1; i > 0; i--) {
// // //       const j = Math.floor(Math.random() * (i + 1));
// // //       [directions[i], directions[j]] = [directions[j], directions[i]];
// // //     }

// // //     directions.forEach(({ dx, dy }) => {
// // //       const nx = x + dx;
// // //       const ny = y + dy;
// // //       if (
// // //         nx >= 0 &&
// // //         ny >= 0 &&
// // //         nx < width &&
// // //         ny < height &&
// // //         maze[ny][nx] === 1
// // //       ) {
// // //         maze[y + dy / 2][x + dx / 2] = 0; // Carve a path
// // //         carve(nx, ny);
// // //       }
// // //     });
// // //   };

// // //   carve(0, 0);
// // //   return maze;
// // // };

// // // // Main component
// // // const MazeGen = () => {
// // //   const [level, setLevel] = useState(0);
// // //   const [score, setScore] = useState(0);
// // //   const [isFinished, setIsFinished] = useState(false);
// // //   const [isReached, setIsReached] = useState(false);
// // //   const [maze, setMaze] = useState([]);
// // //   const [difficulty, setDifficulty] = useState(null);
// // //   const [yellowSquare, setYellowSquare] = useState({ x: 0, y: 0 });
// // //   const [timer, setTimer] = useState(70);
// // //   const [isTimerActive, setIsTimerActive] = useState(false);
// // //   const [isPlaying, setIsPlaying] = useState(false);

// // //   const mazeSettings = {
// // //     easy: { width: 11, height: 11 },
// // //     medium: { width: 21, height: 21 },
// // //     hard: { width: 31, height: 31 },
// // //   };

// // //   const timerSettings = {
// // //     easy: 70,
// // //     medium: 320,
// // //     hard: 500,
// // //   };

// // //   const redDot = { x: 0, y: 0 }; // Red dot position

// // //   const createMaze = () => {
// // //     if (!difficulty) {
// // //       Alert.alert("Select Difficulty", "Please select a difficulty level.");
// // //       return;
// // //     }
// // //     const { width, height } = mazeSettings[difficulty];
// // //     const newMaze = generateMaze(width, height);
// // //     setMaze(newMaze);
// // //     setYellowSquare({ x: 0, y: height - 1 });
// // //     setTimer(timerSettings[difficulty]);
// // //     setIsPlaying(false);
// // //     setIsTimerActive(false);
// // //     setIsReached(false); // Reset reaching state
// // //   };

// // //   useEffect(() => {
// // //     let interval;
// // //     if (isTimerActive && timer > 0) {
// // //       interval = setInterval(() => {
// // //         setTimer((prev) => prev - 1);
// // //       }, 1000);
// // //     } else if (timer === 0) {
// // //       setIsTimerActive(false);
// // //       setIsPlaying(false);
// // //       Alert.alert("Time's up!", "You can now proceed to the next level.");
// // //       setIsReached(false);
// // //     }

// // //     return () => clearInterval(interval);
// // //   }, [isTimerActive, timer]);

// // //   const handleFinished = () => {
// // //     const calculatedScore = isReached ? 100 : Math.floor(Math.random() * 11) + 10;
// // //     setScore(calculatedScore);
// // //     setLevel((prev) => prev + 1);
// // //     setIsFinished(true);
// // //   };

// // //   const handlePlay = () => {
// // //     setIsPlaying(true);
// // //     setIsTimerActive(true);
// // //   };

// // //   return (
// // //     <PaperProvider>
// // //       <Appbar.Header>
// // //         <Appbar.Content title="Maze Generation Game" />
// // //       </Appbar.Header>

// // //       <View style={styles.container}>
// // //         {!isFinished && (
// // //           <View style={styles.header}>
// // //             <Text style={styles.headerText}>Username: User</Text>
// // //             <Text style={styles.headerText}>Register no: 123456</Text>
// // //             <Text style={styles.headerText}>
// // //               Score: {score} | Time Left: {Math.floor(timer / 60)}:{("0" + (timer % 60)).slice(-2)}
// // //             </Text>
// // //           </View>
// // //         )}

// // //         {level === 0 && (
// // //           <View style={styles.levelContainer}>
// // //             <Text style={styles.title}>Select Difficulty:</Text>
// // //             <View style={styles.buttonRow}>
// // //               <Button mode="contained" onPress={() => setDifficulty("easy")} style={styles.button}>Easy</Button>
// // //               <Button mode="contained" onPress={() => setDifficulty("medium")} style={styles.button}>Medium</Button>
// // //               <Button mode="contained" onPress={() => setDifficulty("hard")} style={styles.button}>Hard</Button>
// // //             </View>
// // //             <Button mode="contained" onPress={createMaze} style={styles.generateButton}>
// // //               Generate Maze
// // //             </Button>
// // //           </View>
// // //         )}

// // //         {!isFinished && level === 1 && maze.length > 0 && (
// // //           <View style={styles.levelContainer}>
// // //             <Text style={styles.title}>Maze:</Text>

// // //             <View style={styles.mazeContainer}>
// // //               {maze.map((row, y) =>
// // //                 row.map((cell, x) => (
// // //                   <View
// // //                     key={`${x}-${y}`}
// // //                     style={[
// // //                       styles.cell,
// // //                       { backgroundColor: cell === 1 ? "black" : "white" },
// // //                     ]}
// // //                   >
// // //                     {x === redDot.x && y === redDot.y && <View style={styles.redDot} />}
// // //                     {x === yellowSquare.x && y === yellowSquare.y && <View style={styles.yellowSquare} />}
// // //                   </View>
// // //                 ))
// // //               )}
// // //             </View>

// // //             <View style={styles.buttonContainer}>
// // //               <Button mode="outlined" onPress={handlePlay}>{isPlaying ? "Pause" : "Play"}</Button>
// // //               <Button mode="outlined" onPress={handleFinished} disabled={timer > 0 && !isReached}>Next</Button>
// // //             </View>
// // //           </View>
// // //         )}

// // //         {isFinished && (
// // //           <View style={styles.finishContainer}>
// // //             <Text>Game Finished!</Text>
// // //             <Text>Score: {score}</Text>
// // //             <Button mode="contained" onPress={() => { setLevel(0); setIsFinished(false); setMaze([]); }}>Restart</Button>
// // //           </View>
// // //         )}
// // //       </View>
// // //     </PaperProvider>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     padding: 20,
// // //   },
// // //   header: {
// // //     marginBottom: 20,
// // //   },
// // //   headerText: {
// // //     fontSize: 16,
// // //     fontWeight: "bold",
// // //   },
// // //   levelContainer: {
// // //     flex: 1,
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //   },
// // //   title: {
// // //     fontSize: 24,
// // //     marginBottom: 20,
// // //   },
// // //   buttonRow: {
// // //     flexDirection: "row",
// // //     justifyContent: "space-between",
// // //     width: '100%',
// // //     marginBottom: 20,
// // //   },
// // //   button: {
// // //     flex: 1,
// // //     marginHorizontal: 5,
// // //   },
// // //   generateButton: {
// // //     marginTop: 20,
// // //   },
// // //   mazeContainer: {
// // //     flexDirection: "row",
// // //     flexWrap: "wrap",
// // //     width: '100%',
// // //     justifyContent: "center",
// // //   },
// // //   cell: {
// // //     width: 20,
// // //     height: 20,
// // //     borderWidth: 1,
// // //     borderColor: "grey",
// // //   },
// // //   redDot: {
// // //     width: "100%",
// // //     height: "100%",
// // //     backgroundColor: "red",
// // //     borderRadius: 10,
// // //   },
// // //   yellowSquare: {
// // //     width: "100%",
// // //     height: "100%",
// // //     backgroundColor: "yellow",
// // //   },
// // //   buttonContainer: {
// // //     flexDirection: "row",
// // //     justifyContent: "space-between",
// // //     marginTop: 20,
// // //   },
// // //   finishContainer: {
// // //     alignItems: "center",
// // //   },
// // // });

// // // export default MazeGen;


// // import React, { useState, useEffect } from 'react';
// // import { View, Text, StyleSheet, Dimensions, Alert } from 'react-native';
// // import { Button, Provider, DefaultTheme, withTheme } from 'react-native-paper';
// // import { generateMaze } from './mazeUtils';

// // const theme = {
// //   ...DefaultTheme,
// //   colors: {
// //     ...DefaultTheme.colors,
// //     primary: '#3498db',
// //     accent: '#f1c40f',
// //   },
// // };

// // const MazeGen = () => {
// //   const [level, setLevel] = useState(0);
// //   const [score, setScore] = useState(0);
// //   const [isFinished, setIsFinished] = useState(false);
// //   const [isReached, setIsReached] = useState(false);
// //   const [maze, setMaze] = useState([]);
// //   const [difficulty, setDifficulty] = useState('easy');
// //   const [yellowSquare, setYellowSquare] = useState({ x: 0, y: 0 });
// //   const [timer, setTimer] = useState(70); // Default timer set to easy level
// //   const [isTimerActive, setIsTimerActive] = useState(false);
// //   const [isPlaying, setIsPlaying] = useState(false); // New state for play mode

// //   const mazeSettings = {
// //     easy: { width: 11, height: 11 },
// //     medium: { width: 21, height: 21 },
// //     hard: { width: 31, height: 31 },
// //   };

// //   const timerSettings = {
// //     easy: 70,
// //     medium: 320,
// //     hard: 500,
// //   };

// //   const redDot = { x: 0, y: 0 }; // Red dot position

// //   const createMaze = () => {
// //     const { width, height } = mazeSettings[difficulty];
// //     const newMaze = generateMaze(width, height);
// //     setMaze(newMaze);
// //     setYellowSquare({ x: 0, y: height - 1 }); // Reset yellow square position when maze is generated
// //     setTimer(timerSettings[difficulty]); // Set the timer based on difficulty
// //     setIsPlaying(false); // Reset play state
// //     setIsTimerActive(false); // Ensure timer is not active when maze is created
// //   };

// //   const moveSquare = (dx, dy) => {
// //     if (!isPlaying) return; // Prevent movement if not in play mode

// //     const newX = yellowSquare.x + dx;
// //     const newY = yellowSquare.y + dy;

// //     // Check if the new position is within bounds and on a white cell
// //     if (
// //       newX >= 0 &&
// //       newX < maze[0].length &&
// //       newY >= 0 &&
// //       newY < maze.length &&
// //       maze[newY][newX] === 0
// //     ) {
// //       setYellowSquare({ x: newX, y: newY });

// //       // Check if the yellow square reaches the red dot
// //       if (newX === redDot.x && newY === redDot.y) {
// //         Alert.alert('Congratulations! You reached the target red dot!');
// //         setIsReached(true);
// //       }
// //     }
// //   };

// //   useEffect(() => {
// //     let interval;
// //     if (isTimerActive && timer > 0) {
// //       interval = setInterval(() => {
// //         setTimer((prev) => prev - 1);
// //       }, 1000);
// //     } else if (timer === 0) {
// //       setIsTimerActive(false);
// //       setIsPlaying(false); // Stop the game if time runs out
// //       Alert.alert("Time's up! You can now proceed to the next level.");
// //       setIsReached(false); // Disable further moves
// //     }

// //     return () => clearInterval(interval);
// //   }, [isTimerActive, timer]);

// //   const handleFinished = () => {
// //     let calculatedScore = 0;
// //     if (isReached) {
// //       calculatedScore = 100; // Full score for completion within time
// //     } else {
// //       calculatedScore = Math.floor(Math.random() * 11) + 10; // Random score between 30 and 50
// //     }
// //     setScore(calculatedScore);
// //     setLevel((prev) => prev + 1);
// //     setIsFinished(true);
// //   };

// //   const handlePlay = () => {
// //     setIsPlaying(true); // Set play state to true
// //     setIsTimerActive(true); // Start the timer
// //   };

// //   return (
// //     <Provider theme={theme}>
// //       <View style={styles.container}>
// //         {level === 0 && (
// //           <View>
// //             <Text style={styles.title}>Maze Generation Game</Text>
// //             <Button
// //               mode="contained"
// //               onPress={() => setLevel((prev) => prev + 1)}
// //  style={styles.button}
// //             >
// //               Play Game
// //             </Button>
// //           </View>
// //         )}
// //         {!isFinished && level === 1 && (
// //           <View>
// //             <Text style={styles.title}>Maze Generation Game</Text>
// //             <View style={styles.selectContainer}>
// //               <Text style={styles.selectLabel}>Difficulty:</Text>
// //               <Button
// //                 mode="outlined"
// //                 onPress={() => setDifficulty('easy')}
// //                 style={styles.selectButton}
// //               >
// //                 Easy
// //               </Button>
// //               <Button
// //                 mode="outlined"
// //                 onPress={() => setDifficulty('medium')}
// //                 style={styles.selectButton}
// //               >
// //                 Medium
// //               </Button>
// //               <Button
// //                 mode="outlined"
// //                 onPress={() => setDifficulty('hard')}
// //                 style={styles.selectButton}
// //               >
// //                 Hard
// //               </Button>
// //             </View>
// //             <Button
// //               mode="contained"
// //               onPress={createMaze}
// //               style={styles.button}
// //             >
// //               Generate Maze
// //             </Button>
// //             <View style={styles.mazeContainer}>
// //               {maze.map((row, y) =>
// //                 row.map((cell, x) => (
// //                   <View
// //                     key={`${x}-${y}`}
// //                     style={{
// //                       width: 20,
// //                       height: 20,
// //                       backgroundColor: cell === 1 ? 'black' : 'white',
// //                       borderWidth: 1,
// //                       borderColor: 'grey',
// //                     }}
// //                   >
// //                     {/* Render red dot and yellow square */}
// //                     {x === redDot.x && y === redDot.y && (
// //                       <View
// //                         style={{
// //                           width: 20,
// //                           height: 20,
// //                           backgroundColor: 'red',
// //                           borderRadius: 10,
// //                         }}
// //                       />
// //                     )}
// //                     {x === yellowSquare.x && y === yellowSquare.y && (
// //                       <View
// //                         style={{
// //                           width: 20,
// //                           height: 20,
// //                           backgroundColor: 'yellow',
// //                           borderRadius: 0,
// //                         }}
// //                       />
// //                     )}
// //                   </View>
// //                 ))
// //               )}
// //             </View>
// //             <View style={styles.buttonContainer}>
// //               <Button
// //                 mode="outlined"
// //                 color="green"
// //                 onPress={handlePlay}
// //                 style={styles.button}
// //               >
// //                 {isPlaying ? 'Pause' : 'Play'}
// //               </Button>
// //               <Button
// //                 mode="outlined"
// //                 color="red"
// //                 onPress={handleFinished}
// //                 disabled={timer > 0 && !isReached}
// //                 style={styles.button}
// //               >
// //                 Next
// //               </Button>
// //             </View>
// //           </View>
// //         )}
// //         {isFinished && (
// //           <View>
// //             <Text style={styles.title}>Congratulations! You finished the game!</Text>
// //             <Text style={styles.score}>Your score: {score}</Text>
// //           </View>
// //         )}
// //       </View>
// //     </Provider>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     padding: 20,
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginBottom: 20,
// //   },
// //   button: {
// //     marginVertical: 10,
// //   },
// //   selectContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     marginVertical: 20,
// //   },
// //   selectLabel: {
// //     fontSize: 16,
// //   },
// //   selectButton: {
// //     marginHorizontal: 10,
// //   },
// //   mazeContainer: {
// //     flexDirection: 'row',
// //     flexWrap: 'wrap',
// //     justifyContent: 'center',
// //   },
// //   buttonContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     marginVertical: 20,
// //   },
// //   score: {
// //     fontSize: 18,
// //     marginBottom: 20,
// //   },
// // });

// // export default MazeGen;

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
// import { Button, Provider, DefaultTheme } from 'react-native-paper';
// import { generateMaze } from './mazeUtils';

// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: '#3498db',
//     accent: '#f1c40f',
//   },
// };

// const MazeGen = () => {
//   const [level, setLevel] = useState(0);
//   const [score, setScore] = useState(0);
//   const [isFinished, setIsFinished] = useState(false);
//   const [isReached, setIsReached] = useState(false);
//   const [maze, setMaze] = useState([]);
//   const [difficulty, setDifficulty] = useState('easy');
//   const [yellowSquare, setYellowSquare] = useState({ x: 0, y: 0 });
//   const [timer, setTimer] = useState(70);
//   const [isTimerActive, setIsTimerActive] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const mazeSettings = {
//     easy: { width: 11, height: 12 },
//     medium: { width: 21, height: 21 },
//     hard: { width: 31, height: 31 },
//   };

//   const timerSettings = {
//     easy: 70,
//     medium: 320,
//     hard: 500,
//   };

//   const redDot = { x: 0, y: 0 };

//   const createMaze = () => {
//     const { width, height } = mazeSettings[difficulty];
//     const newMaze = generateMaze(width, height);
//     setMaze(newMaze);
//     setYellowSquare({ x: 0, y: height - 1 });
//     setTimer(timerSettings[difficulty]);
//     setIsPlaying(false);
//     setIsTimerActive(false);
//   };

//   const moveSquare = (dx, dy) => {
//     if (!isPlaying) return;

//     const newX = yellowSquare.x + dx;
//     const newY = yellowSquare.y + dy;

//     if (
//       newX >= 0 &&
//       newX < maze[0].length &&
//       newY >= 0 &&
//       newY < maze.length &&
//       maze[newY][newX] === 0
//     ) {
//       setYellowSquare({ x: newX, y: newY });

//       if (newX === redDot.x && newY === redDot.y) {
//         Alert.alert('Congratulations! You reached the target red dot!');
//         setIsReached(true);
//       }
//     }
//   };

//   useEffect(() => {
//     let interval;
//     if (isTimerActive && timer > 0) {
//       interval = setInterval(() => {
//         setTimer((prev) => prev - 1);
//       }, 1000);
//     } else if (timer === 0) {
//       setIsTimerActive(false);
//       setIsPlaying(false);
//       Alert.alert("Time's up! You can now proceed to the next level.");
//       setIsReached(false);
//     }

//     return () => clearInterval(interval);
//   }, [isTimerActive, timer]);

//   const handleFinished = () => {
//     let calculatedScore = isReached ? 100 : Math.floor(Math.random() * 11) + 10;
//     setScore(calculatedScore);
//     setLevel((prev) => prev + 1);
//     setIsFinished(true);
//   };

//   const handlePlay = () => {
//     setIsPlaying(true);
//     setIsTimerActive(true);
//   };

//   return (
//     <Provider theme={theme}>
//       <ScrollView contentContainerStyle={styles.container}>
//         {level === 0 && (
//           <View>
//             <Text style={styles.title}>Maze Generation Game</Text>
//             <Button
//               mode="contained"
//               onPress={() => setLevel((prev) => prev + 1)}
//               style={styles.button}
//             >
//               Play Game
//             </Button>
//           </View>
//         )}
//         {!isFinished && level === 1 && (
//           <View>
//             <Text style={styles.title}>Maze Generation Game</Text>
//             <View style={styles.selectContainer}>
//               <Text style={styles.selectLabel}>Difficulty:</Text>
//               <Button
//                 mode="outlined"
//                 onPress={() => setDifficulty('easy')}
//                 style={styles.selectButton}
//               >
//                 Easy
//               </Button>
//               <Button
//                 mode="outlined"
//                 onPress={() => setDifficulty('medium')}
//                 style={styles.selectButton}
//               >
//                 Medium
//               </Button>
//               <Button
//                 mode="outlined"
//                 onPress={() => setDifficulty('hard')}
//                 style={styles.selectButton}
//               >
//                 Hard
//               </Button>
//             </View>
//             <Button
//               mode="contained"
//               onPress={createMaze}
//               style={styles.button}
//             >
//               Generate Maze
//             </Button>
//             <View style={styles.mazeContainer}>
//               {maze.map((row, y) =>
//                 row.map((cell, x) => (
//                   <View
//                     key={`${x}-${y}`}
//                     style={{
//                       width: 20,
//                       height: 20,
//                       backgroundColor: cell === 1 ? 'black' : 'white',
//                       borderWidth: 1,
//                       borderColor: 'grey',
//                     }}
//                   >
//                     {x === redDot.x && y === redDot.y && (
//                       <View style={styles.redDot} />
//                     )}
//                     {x === yellowSquare.x && y === yellowSquare.y && (
//                       <View style={styles.yellowSquare} />
//                     )}
//                   </View>
//                 ))
//               )}
//             </View>
//             <View style={styles.buttonContainer}>
//               <Button
//                 mode="outlined"
//                 color="green"
//                 onPress={handlePlay}
//                 style={styles.button}
//               >
//                 {isPlaying ? 'Pause' : 'Play'}
//               </Button>
//               <Button
//                 mode="outlined"
//                 color="red"
//                 onPress={handleFinished}
//                 disabled={timer > 0 && !isReached}
//                 style={styles.button}
//               >
//                 Next
//               </Button>
//             </View>
//             {/* Movement Buttons */}
//             <View style={styles.movementButtons}>
//               <Button mode="outlined" onPress={() => moveSquare(0, -1)} style={styles.movementButton}>
//                 Up
//               </Button>
//               <View style={styles.row}>
//                 <Button mode="outlined" onPress={() => moveSquare(-1, 0)} style={styles.movementButton}>
//                   Left
//                 </Button>
//                 <Button mode="outlined" onPress={() => moveSquare(1, 0)} style={styles.movementButton}>
//                   Right
//                 </Button>
//               </View>
//               <Button mode="outlined" onPress={() => moveSquare(0, 1)} style={styles.movementButton}>
//                 Down
//               </Button>
//             </View>
//           </View>
//         )}
//         {isFinished && (
//           <View>
//             <Text style={styles.title}>Congratulations! You finished the game!</Text>
//             <Text style={styles.score}>Your score: {score}</Text>
//           </View>
//         )}
//       </ScrollView>
//     </Provider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   button: {
//     marginVertical: 10,
//   },
//   selectContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginVertical: 20,
//   },
//   selectLabel: {
//     fontSize: 16,
//   },
//   selectButton: {
//     marginHorizontal: 10,
//   },
//   mazeContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginVertical: 20,
//   },
//   score: {
//     fontSize: 18,
//     marginBottom: 20,
//   },
//   movementButtons: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   movementButton: {
//     marginVertical: 5,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   redDot: {
//     width: 20,
//     height: 20,
//     backgroundColor: 'red',
//     borderRadius: 10,
//   },
//   yellowSquare: {
//     width: 20,
//     height: 20,
//     backgroundColor: 'yellow',
//   },
// });

// export default MazeGen;

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Dimensions } from 'react-native';
import { Button, Provider, DefaultTheme } from 'react-native-paper';
import { generateMaze } from './mazeUtils';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

// Set maze settings based on screen size
const mazeSettings = {
  easy: { width: Math.floor(width / 20), height: Math.floor(height / 20) },
  medium: { width: Math.floor(width / 15), height: Math.floor(height / 15) },
  hard: { width: Math.floor(width / 10), height: Math.floor(height / 10) },
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

const MazeGen = () => {
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isReached, setIsReached] = useState(false);
  const [maze, setMaze] = useState([]);
  const [difficulty, setDifficulty] = useState('easy');
  const [yellowSquare, setYellowSquare] = useState({ x: 0, y: 0 });
  const [timer, setTimer] = useState(70);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const timerSettings = {
    easy: 70,
    medium: 320,
    hard: 500,
  };

  const redDot = { x: 0, y: 0 };

  const createMaze = () => {
    const { width, height } = mazeSettings[difficulty];
    const newMaze = generateMaze(width, height);
    setMaze(newMaze);
    setYellowSquare({ x: 0, y: height - 1 });
    setTimer(timerSettings[difficulty]);
    setIsPlaying(false);
    setIsTimerActive(false);
  };

  const moveSquare = (dx, dy) => {
    if (!isPlaying) return;

    const newX = yellowSquare.x + dx;
    const newY = yellowSquare.y + dy;

    if (
      newX >= 0 &&
      newX < maze[0].length &&
      newY >= 0 &&
      newY < maze.length &&
      maze[newY][newX] === 0
    ) {
      setYellowSquare({ x: newX, y: newY });

      if (newX === redDot.x && newY === redDot.y) {
        Alert.alert('Congratulations! You reached the target red dot!');
        setIsReached(true);
      }
    }
  };

  useEffect(() => {
    let interval;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerActive(false);
      setIsPlaying(false);
      Alert.alert("Time's up! You can now proceed to the next level.");
      setIsReached(false);
    }

    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  const handleFinished = () => {
    const calculatedScore = isReached ? 100 : Math.floor(Math.random() * 11) + 10;
    setScore(calculatedScore);
    setLevel((prev) => prev + 1);
    setIsFinished(true);
  };

  const handlePlay = () => {
    setIsPlaying(true);
    setIsTimerActive(true);
  };

  return (
    <Provider theme={theme}>
      <ScrollView contentContainerStyle={styles.container}>
        {level === 0 && (
          <View>
            <Text style={styles.title}>Maze Generation Game</Text>
            <Button
              mode="contained"
              onPress={() => setLevel((prev) => prev + 1)}
              style={styles.button}
            >
              Play Game
            </Button>
          </View>
        )}
        {!isFinished && level === 1 && (
          <View>
            <Text style={styles.title}>Maze Generation Game</Text>
            <View style={styles.selectContainer}>
              <Text style={styles.selectLabel}>Difficulty:</Text>
              <Button
                mode="outlined"
                onPress={() => setDifficulty('easy')}
                style={styles.selectButton}
              >
                Easy
              </Button>
              <Button
                mode="outlined"
                onPress={() => setDifficulty('medium')}
                style={styles.selectButton}
              >
                Medium
              </Button>
              <Button
                mode="outlined"
                onPress={() => setDifficulty('hard')}
                style={styles.selectButton}
              >
                Hard
              </Button>
            </View>
            <Button
              mode="contained"
              onPress={createMaze}
              style={styles.button}
            >
              Generate Maze
            </Button>
            <View style={styles.mazeContainer}>
              {maze.map((row, y) =>
                row.map((cell, x) => (
                  <View
                    key={`${x}-${y}`}
                    style={{
                      width: width / mazeSettings[difficulty].width, // Dynamic width
                      height: height / mazeSettings[difficulty].height, // Dynamic height
                      backgroundColor: cell === 1 ? 'black' : 'white',
                      borderWidth: 1,
                      borderColor: 'grey',
                    }}
                  >
                    {x === redDot.x && y === redDot.y && <View style={styles.redDot} />}
                    {x === yellowSquare.x && y === yellowSquare.y && <View style={styles.yellowSquare} />}
                  </View>
                ))
              )}
            </View>
            <View style={styles.buttonContainer}>
              <Button
                mode="outlined"
                color="green"
                onPress={handlePlay}
                style={styles.button}
              >
                {isPlaying ? 'Pause' : 'Play'}
              </Button>
              <Button
                mode="outlined"
                color="red"
                onPress={handleFinished}
                disabled={timer > 0 && !isReached}
                style={styles.button}
              >
                Next
              </Button>
            </View>
            {/* Movement Buttons */}
            <View style={styles.movementButtons}>
              <Button mode="outlined" onPress={() => moveSquare(0, -1)} style={styles.movementButton}>
                Up
              </Button>
              <View style={styles.row}>
                <Button mode="outlined" onPress={() => moveSquare(-1, 0)} style={styles.movementButton}>
                  Left
                </Button>
                <Button mode="outlined" onPress={() => moveSquare(1, 0)} style={styles.movementButton}>
                  Right
                </Button>
              </View>
              <Button mode="outlined" onPress={() => moveSquare(0, 1)} style={styles.movementButton}>
                Down
              </Button>
            </View>
          </View>
        )}
        {isFinished && (
          <View>
            <Text style={styles.title}>Congratulations! You finished the game!</Text>
            <Text style={styles.score}>Your score: {score}</Text>
          </View>
        )}
      </ScrollView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    marginVertical: 10,
  },
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  selectLabel: {
    fontSize: 16,
  },
  selectButton: {
    marginHorizontal: 10,
  },
  mazeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  score: {
    fontSize: 18,
    marginBottom: 20,
  },
  movementButtons: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  movementButton: {
    marginVertical: 5,
    width: 100, // Set a width for movement buttons
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  redDot: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  yellowSquare: {
    width: 20,
    height: 20,
    backgroundColor: 'yellow',
  },
});

export default MazeGen;
