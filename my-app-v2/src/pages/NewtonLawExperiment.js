// class 9th Newton's law of force experiment

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import { Provider as PaperProvider, Button, Text } from "react-native-paper";
import * as Animatable from "react-native-animatable";

const NewtonLawExperiment = () => {
  const [force, setForce] = useState(0);
  const [mass, setMass] = useState(1);
  const [acceleration, setAcceleration] = useState(0);

  const calculateAcceleration = () => {
    const acc = force / mass; // F = m * a => a = F/m
    setAcceleration(acc);
    Alert.alert(
      "Result",
      `Applied Force: ${force} N\nMass: ${mass} kg\nAcceleration: ${acc.toFixed(
        2
      )} m/s²`
    );
  };

  const animateObject = () => {
    if (force > 0) {
      return (
        <Animatable.Image
          source={{
            uri: "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/11-2024-4-3525-Newtons_cradle_3_ball_swing_5_ball_system_cropped.gif",
          }}
          style={styles.animatedObject}
          animation="bounceIn"
          iterationCount="infinite"
          direction="alternate"
        />
      );
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text variant="headlineLarge" style={styles.title}>Force and Newton's Laws Experiment</Text>
        <Text style={styles.description}>
          Use the buttons to apply force and observe the object's acceleration.
        </Text>

        <View style={styles.forceContainer}>
          <Button
            mode="outlined"
            onPress={() => setForce((prev) => Math.max(prev - 1, 0))}
          >
            -
          </Button>
          <Text>Applied Force: {force} N</Text>
          <Button mode="outlined" onPress={() => setForce((prev) => prev + 1)}>
            +
          </Button>
        </View>

        <View style={styles.massContainer}>
          <Button
            mode="outlined"
            onPress={() => setMass((prev) => Math.max(prev - 1, 1))}
          >
            -
          </Button>
          <Text>Mass of the object: {mass} kg</Text>
          <Button mode="outlined" onPress={() => setMass((prev) => prev + 1)}>
            +
          </Button>
        </View>

        <Button
          mode="contained"
          onPress={calculateAcceleration}
          style={styles.button}
        >
          Calculate Acceleration
        </Button>

        {animateObject()}

        {acceleration > 0 && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>
              Acceleration: {acceleration.toFixed(2)} m/s²
            </Text>
          </View>
        )}
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    // fontSize: 24,
    // fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
  forceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
    width: "100%",
  },
  massContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  animatedObject: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  button: {
    marginTop: 20,
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },
  resultText: {
    fontSize: 18,
  },
});

export default NewtonLawExperiment;
