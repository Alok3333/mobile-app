import React, { useState } from "react";
import { View, StyleSheet, Alert, FlatList } from "react-native";
import {
  Button,
  TextInput,
  Title,
  Text,
  Subheading,
  Paragraph,
} from "react-native-paper";
// import global1 from "./global1"; // Adjust the path as needed
import FinalGamePage from "./FinalGamePage"; // Adjust the path as needed

// const name = global1.student;
// const regno = global1.regno;

// Global data here
const name = "Alok kumar prajapati";
const regno = "njnw77y77";
const avatarImg =
  "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png";

function Square({ value, onSquareClick, color, isWinningSquare }) {
  return (
    <Button
      mode="contained"
      onPress={onSquareClick}
      style={[
        styles.square,
        { backgroundColor: isWinningSquare ? "#00FF00" : "#e0e0e0" },
      ]}
      labelStyle={{ color }}
    >
      {value}
    </Button>
  );
}

function Board({ xIsNext, squares, onPlay, player1, player2 }) {
  const winner = calculateWinner(squares);
  const status = winner
    ? `${winner === "X" ? player1 : player2} Wins!`
    : `Next player: ${xIsNext ? player1 : player2}`;

  const winningSquares = winner ? calculateWinningSquares(squares) : [];
  const isTie = !winner && squares.every((square) => square !== null);

  if (isTie) {
    Alert.alert("It's a tie! Play again.");
    return null; // Return null to prevent rendering the board after tie alert
  }

  return (
    <View style={styles.board}>
      <Subheading>{status}</Subheading>
      <View style={styles.row}>
        {[0, 1, 2].map((i) => (
          <Square
            key={i}
            value={squares[i]}
            onSquareClick={() => handleClick(i)}
            color={getSquareColor(squares[i])}
            isWinningSquare={winningSquares.includes(i)}
          />
        ))}
      </View>
      <View style={styles.row}>
        {[3, 4, 5].map((i) => (
          <Square
            key={i}
            value={squares[i]}
            onSquareClick={() => handleClick(i)}
            color={getSquareColor(squares[i])}
            isWinningSquare={winningSquares.includes(i)}
          />
        ))}
      </View>
      <View style={styles.row}>
        {[6, 7, 8].map((i) => (
          <Square
            key={i}
            value={squares[i]}
            onSquareClick={() => handleClick(i)}
            color={getSquareColor(squares[i])}
            isWinningSquare={winningSquares.includes(i)}
          />
        ))}
      </View>
    </View>
  );

  function handleClick(i) {
    if (winner || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  function getSquareColor(value) {
    if (value === "X") return "#0000FF";
    if (value === "O") return "#FF0000";
    return "#333";
  }
}

export default function UltimateBattleGame() {
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isNextEnabled, setIsNextEnabled] = useState(false);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const objective =
    'Dive into "X vs O: The Ultimate Battle" 🎮, where strategy meets fun in a classic showdown of Tic-Tac-Toe! Challenge your friends or family 👨‍👩‍👧‍👦 in a competitive environment while honing your critical thinking skills 🧠. With vibrant visuals and engaging gameplay, every match is a new opportunity to outsmart your opponent 🥳. Plus, with random score rewards for wins and ties, the excitement never ends! 🎉';

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);

    const winner = calculateWinner(nextSquares);
    const isTie = !winner && nextSquares.every((square) => square !== null);
    setIsNextEnabled(winner || isTie);
  }

  const startGame = () => {
    if (player1 && player2) {
      setIsGameStarted(true);
      setHistory([Array(9).fill(null)]);
      setCurrentMove(0);
      setIsNextEnabled(false);
    }
  };

  const handleToPlayAgain = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setIsNextEnabled(false);
    setIsFinished(false);
  };

  const handleNext = () => {
    const winner = calculateWinner(currentSquares);
    const isTie = !winner && currentSquares.every((square) => square !== null);

    if (winner) {
      const randomScore = Math.floor(Math.random() * 11) + 90; // Random number between 90 and 100
      setScore(randomScore);
    } else if (isTie) {
      const randomScore = Math.floor(Math.random() * 21) + 20; // Random number between 20 and 40
      setScore(randomScore);
    }

    setIsFinished(true);
  };

  const resetGamePage = () => {
    // Resetting the state variables
    setLevel(0);
    setScore(0);
    setIsFinished(false);
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setPlayer1("");
    setPlayer2("");
    setIsGameStarted(false);
    setIsNextEnabled(false);
  };

  return (
    <View style={styles.container}>
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

      {level === 0 && (
        <View style={styles.startScreen}>
          <Text variant="headlineSmall" style={{ marginBottom: 20 }}>
            X vs O: The Ultimate Battle
          </Text>
          <Button mode="contained" onPress={() => setLevel(1)}>
            Play Game
          </Button>
        </View>
      )}

      {!isFinished && level === 1 && (
        <View style={styles.gameContainer}>
          {!isGameStarted ? (
            <View>
              <Title>X vs O: The Ultimate Battle</Title>
              <Subheading>Enter Player Names</Subheading>
              <TextInput
                label="Player 1 (X)"
                value={player1}
                onChangeText={setPlayer1}
                style={styles.input}
              />
              <TextInput
                label="Player 2 (O)"
                value={player2}
                onChangeText={setPlayer2}
                style={styles.input}
              />
              <Button mode="contained" onPress={startGame}>
                Start Game
              </Button>
            </View>
          ) : (
            <View>
              <Board
                xIsNext={xIsNext}
                squares={currentSquares}
                onPlay={handlePlay}
                player1={player1}
                player2={player2}
              />
              <View style={styles.buttons}>
                <Button mode="outlined" onPress={handleToPlayAgain}>
                  Play again
                </Button>
                <Button
                  mode="outlined"
                  onPress={handleNext}
                  disabled={!isNextEnabled}
                >
                  Next
                </Button>
              </View>
            </View>
          )}
        </View>
      )}

      {isFinished && (
        <FinalGamePage
          username={name}
          regno={regno}
          profileImg={avatarImg}
          objective={objective}
          score={score}
          title="X vs O: The Ultimate Battle"
          rating=""
          onPlayAgain={resetGamePage}
        />
      )}
    </View>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function calculateWinningSquares(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [a, b, c]; // Return the winning squares
    }
  }
  return [];
}

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
  startScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gameContainer: {
    flex: 1,
    justifyContent: "center",
  },
  board: {
    alignItems: "center",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
  },
  square: {
    width: 60,
    height: 60,
    margin: 5,
    justifyContent: "center",
  },
  input: {
    marginBottom: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
