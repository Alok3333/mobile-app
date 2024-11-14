import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
  SafeAreaView,
} from "react-native";
import {
  Button,
  Text,
  Appbar,
  Provider as PaperProvider,
} from "react-native-paper";
import FinalGamePage from "./FinalGamePage"; // Adjust the import path

const PacManGame = () => {
  // const name = global1.student;
  // const regno = global1.regno;

  // Global data here
  const name = "Alok kumar prajapati";
  const regno = "njnw77y77";
  const avatarImg =
    "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png";

  const pacmanImage =
    "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-9-2550-Pacman_HD-removebg-preview.png";
  const screenImg =
    "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-9-290-pacmanScreenImg.png";

  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [pacman, setPacman] = useState({ x: 6, y: 4 });
  const [ghosts, setGhosts] = useState([
    { x: 1, y: 1 },
    { x: 1, y: 2 },
    { x: 1, y: 3 },
  ]);
  const [map, setMap] = useState([
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 2, 2, 1, 1, 5, 1, 1, 2, 2, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ]);
  const [gameOver, setGameOver] = useState(false);
  const [alertShown, setAlertShown] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // New state to manage game status

  // Game Objective
  const objective =
    "🎮 Real-time movement and strategic decisions keep players invested and motivated. 🌈 Colorful graphics enhance the gaming experience, attracting a wide audience. 🏆 The scoring system encourages competition and skill improvement, adding to replay value. 👾 Simple keyboard controls make the game accessible to players of all skill levels.";

  const movePacman = (dx, dy) => {
    if (gameOver || !isPlaying) return; // Only move if the game is active

    const newX = pacman.x + dx;
    const newY = pacman.y + dy;

    if (
      newX >= 0 &&
      newX < map[0].length &&
      newY >= 0 &&
      newY < map.length &&
      map[newY][newX] !== 1
    ) {
      if (map[newY][newX] === 2) {
        setScore((prev) => Math.min(100, Math.max(0, prev + 2)));
      }

      setMap((prevMap) => {
        const newMap = [...prevMap];
        newMap[pacman.y][pacman.x] = 3; // Mark the old position
        setPacman({ x: newX, y: newY });
        newMap[newY][newX] = 5; // Mark the new position
        return newMap;
      });

      checkWinningCondition();
    }
  };

  const moveGhostsRandomly = () => {
    if (gameOver || !isPlaying) return; // Only move if the game is active

    const directions = [
      { dx: -1, dy: 0 },
      { dx: 1, dy: 0 },
      { dx: 0, dy: -1 },
      { dx: 0, dy: 1 },
    ];

    setGhosts((prevGhosts) => {
      const newGhosts = prevGhosts.map((ghost) => {
        let moved = false;
        let newX, newY;

        while (!moved) {
          const randomDirection =
            directions[Math.floor(Math.random() * directions.length)];
          newX = ghost.x + randomDirection.dx;
          newY = ghost.y + randomDirection.dy;

          if (
            newX >= 0 &&
            newX < map[0].length &&
            newY >= 0 &&
            newY < map.length &&
            map[newY][newX] !== 1
          ) {
            moved = true;
          }
        }

        return { x: newX, y: newY };
      });

      // Check for collisions with Pac-Man after ghosts have moved
      const collision = newGhosts.some(
        (ghost) => ghost.x === pacman.x && ghost.y === pacman.y
      );
      if (collision && !alertShown) {
        setGameOver(true);
        setAlertShown(true);
        Alert.alert("Game Over", "You collided with a ghost", [
          {
            text: "OK",
            onPress: () => {
              setIsGameOver(true);
              setIsPlaying(false); // Stop the game
            },
          },
        ]);
      }

      return newGhosts;
    });
  };

  const checkWinningCondition = () => {
    if (!map.some((row) => row.includes(2))) {
      if (!alertShown) {
        setGameOver(true);
        setAlertShown(true);
        Alert.alert(
          "Congratulations!",
          "You collected all the coins. You win!",
          [
            {
              text: "OK",
              onPress: () => {
                setIsGameOver(true);
                setIsPlaying(false); // Stop the game
              },
            },
          ]
        );
      }
    }
  };

  useEffect(() => {
    const ghostInterval = setInterval(() => {
      if (isPlaying) {
        moveGhostsRandomly();
        checkWinningCondition();
      }
    }, 200);

    return () => {
      clearInterval(ghostInterval);
    };
  }, [gameOver, isPlaying]);

  const renderCell = (type) => {
    switch (type) {
      case 1: // Wall
        return <View style={[styles.cell, styles.wall]} />;
      case 2: // Coin
        return <View style={[styles.cell, styles.coin]} />;
      case 3: // Ground
        return <View style={[styles.cell, styles.ground]} />;
      case 5: // Pacman
        return <Image source={{ uri: pacmanImage }} style={styles.pacman} />;
      default:
        return null;
    }
  };

  const handleClickNext = () => {
    if (isGameOver || score >= 25) {
      setIsFinished(true);
      setIsPlaying(false);
    } else {
      Alert.alert(
        "Aim for a score of 25 or higher. Keep playing and improve your skills!"
      );
    }
  };

  const resetGamePage = () => {
    setLevel(0);
    setScore(0);
    setIsFinished(false);
    setIsGameOver(false);
    setIsPlaying(false);
    setPacman({ x: 6, y: 4 });
    setGhosts([
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 1, y: 3 },
    ]);
    setMap([
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
      [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
      [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
      [1, 2, 2, 2, 1, 1, 5, 1, 1, 2, 2, 2, 1],
      [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
      [1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1],
      [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]);
    setAlertShown(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {!isFinished && (
        // <View style={styles.container}>
        //   <Text style={styles.username}>Student: {name}</Text>
        //   <Text style={styles.registerNo}>Register No: {regno}</Text>
        // </View>
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

      {level === 0 && (
        <View style={styles.startScreen}>
          <Text variant="headlineSmall" style={{ marginBottom: 20 }}>
            Pac-Man: The Coin Collector
          </Text>
          <Button
            mode="contained"
            onPress={() => {
              setLevel(1);
              setIsPlaying(true);
            }}
          >
            Play Game
          </Button>
        </View>
      )}

      {!isFinished && level === 1 && (
        <ScrollView>
          <View style={styles.gameContainer}>
            {map.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.row}>
                {row.map((cell, colIndex) => (
                  <View key={colIndex} style={styles.cell}>
                    {renderCell(cell)}
                    {ghosts.map((ghost, index) =>
                      ghost.x === colIndex && ghost.y === rowIndex ? (
                        <View key={index} style={styles.ghost} />
                      ) : null
                    )}
                  </View>
                ))}
              </View>
            ))}
          </View>
          <View style={styles.buttonContainer}>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Button mode="contained" onPress={() => movePacman(0, -1)}>
                Up
              </Button>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Button mode="contained" onPress={() => movePacman(-1, 0)}>
                Left
              </Button>
              <Button mode="contained" onPress={() => movePacman(1, 0)}>
                Right
              </Button>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Button mode="contained" onPress={() => movePacman(0, 1)}>
                Down
              </Button>
            </View>
          </View>
          <Button mode="outlined" onPress={handleClickNext}>
            Next
          </Button>
        </ScrollView>
      )}

      {isFinished && (
        <FinalGamePage
          username={name}
          regno={regno}
          profileImg={avatarImg}
          objective={objective}
          score={score}
          title="Pac-Man: The Coin Collector"
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
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    marginBottom: 5,
    justifyContent: "space-between",
  },
  registerNo: {
    fontSize: 18,
    fontWeight: "bold",
  },
  startScreen: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  startImage: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  gameContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginTop: 150,
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    width: 40,
    height: 40,
    position: "relative",
  },
  wall: {
    backgroundColor: "#5e318c",
  },
  coin: {
    backgroundColor: "gold",
    borderRadius: 15,
    position: "absolute",
    left: 12,
    top: 12,
    width: 10,
    height: 10,
  },
  ground: {
    backgroundColor: "lightgrey",
  },
  pacman: {
    width: 40,
    height: 40,
  },
  ghost: {
    position: "absolute",
    top: 5,
    left: 5,
    backgroundColor: "red",
    width: 30,
    height: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  buttonContainer: {
    marginVertical: 20,
  },
});

export default PacManGame;
