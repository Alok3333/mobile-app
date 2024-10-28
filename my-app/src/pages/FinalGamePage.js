import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ProgressBarAndroid,
} from "react-native";
import {
  Avatar,
  Button,
  Title,
  Paragraph,
  ProgressBar,
  Text,
} from "react-native-paper";

const FinalGamePage = ({
  username,
  regno,
  profileImg,
  objective,
  score,
  title,
  rating,
  onPlayAgain,
}) => {
  const progressValue = score; // Set progress value (0-100)

  // Function to determine color based on progress value
  const getProgressColor = (value) => {
    if (value >= 91) return "#4caf50"; // Green
    if (value >= 71) return "#ffeb3b"; // Yellow
    if (value >= 51) return "#ff9800"; // Orange
    return "#f44336"; // Red
  };

  const [congra, setCongra] = useState("");

  useEffect(() => {
    if (progressValue >= 91 && progressValue <= 100) {
      setCongra("Outstanding");
    } else if (progressValue >= 71 && progressValue <= 90) {
      setCongra("Great Job");
    } else if (progressValue >= 51 && progressValue <= 70) {
      setCongra("Decent Effort");
    } else {
      setCongra("Keep Trying");
    }
  }, [progressValue]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text variant="headlineSmall" style={styles.title}>
          {title}
        </Text>

        <View style={styles.header}>
          <Image
            source={{
              uri: "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/9-2024-11-2048-FullLogo_Transparent_NoBuffer.png",
            }}
            style={styles.logo}
          />
          {/* <Button
            mode="contained"
            onPress={() => window.print()}
            style={styles.printButton}
          >
            Print Result
          </Button> */}
        </View>

        <View style={styles.profileContainer}>
          <Avatar.Image
            size={100}
            source={{ uri: profileImg }}
            style={styles.avatar}
          />
          <View style={styles.profileDetails}>
            <Text variant="titleLarge">{username}</Text>
            <Text variant="titleSmall" style={styles.regno}>
              {regno}
            </Text>
          </View>
        </View>

        <View style={styles.objectiveContainer}>
          <Text variant="titleMedium">Objective:</Text>
          <Paragraph>{objective}</Paragraph>
          <Text style={styles.ratingText}>{rating}</Text>
        </View>

        <View style={styles.scoreContainer}>
          <Text variant="titleLarge" style={styles.scoreLabel}>
            Overall Score
          </Text>
          {/* <ProgressBar
            progress={progressValue / 100} // Normalize progress value
            color={getProgressColor(progressValue)} // Set color based on value
            style={styles.progressBar}
          /> */}
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            color={getProgressColor(progressValue)}
            progress={progressValue / 100}
            style={styles.progressBar}
          />
          <Text style={styles.progressText}>{`${progressValue}`}</Text>
          <Text style={styles.congraText}>"{congra}"</Text>
        </View>

        <Button
          mode="contained"
          style={styles.playAgainButton}
          onPress={onPlayAgain}
        >
          Play Again
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#4c82af",
  },
  content: {
    alignItems: "center",
  },
  title: {
    color: "#FFF",
    textAlign: "center",
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: "contain",
  },
  printButton: {
    backgroundColor: "#4c82af",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fbd37d",
    padding: 10,
    width: "100%",
  },
  avatar: {
    marginRight: 16,
  },
  profileDetails: {
    flex: 1,
  },
  objectiveContainer: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    width: "100%",
    marginBottom: 20,
  },
  objectiveText: {
    marginTop: 8,
  },
  ratingText: {
    fontWeight: "600",
    fontSize: 16,
    marginTop: 8,
  },
  scoreContainer: {
    alignItems: "center",
    backgroundColor: "#c1dfe1",
    padding: 20,
    width: "100%",
    marginBottom: 20,
  },
  scoreLabel: {
    marginBottom: 10,
  },
  progressBar: {
    width: "100%",
    height: 28,
    borderRadius: 4,
  },
  progressText: {
    marginTop: 8,
    fontSize: 16,
  },
  progressValue: {
    fontSize: 36,
    fontWeight: "600",
  },
  congraText: {
    marginTop: 10,
    textAlign: "center",
  },
  playAgainButton: {
    marginTop: 30,
    width: "50%",
  },
});

export default FinalGamePage;
