// Class 6th CBSE science

import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Platform,
  View,
  Animated,
  Dimensions,
  ScrollView,
  Alert,
} from "react-native";
import { Provider as PaperProvider, Text } from "react-native-paper";

// Get device width and height for responsiveness
const { width, height } = Dimensions.get("window");

// A helper function to scale font sizes based on screen width
const scaleFont = (size) => (width / 375) * size;

export default function FunWithMagnets() {
  const [experimentStarted, setExperimentStarted] = useState(false);
  const magnetRotation1 = useRef(new Animated.Value(0)).current;
  const magnetRotation2 = useRef(new Animated.Value(0)).current;

  // New state variables for Activity 2
  const magnetRotation3 = useRef(new Animated.Value(0)).current;
  const magnetRotation4 = useRef(new Animated.Value(0)).current;

  const handleStartExperiment = () => {
    setExperimentStarted(true);
  };

  // Function to rotate Magnet 1 (Activity 1) clockwise (clockwise means adding 90 degrees)
  const rotateMagnet1 = () => {
    let newRotation = magnetRotation1._value + Math.PI / 2;

    // If the rotation exceeds 360 degrees, reset it to 0 degrees
    if (newRotation >= Math.PI * 2) {
      newRotation = 0;
    }

    Animated.timing(magnetRotation1, {
      toValue: newRotation,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      checkRotation();
    });
  };

  // Function to rotate Magnet 2 (Activity 1) counterclockwise (counterclockwise means subtracting 90 degrees)
  const rotateMagnet2 = () => {
    let newRotation = magnetRotation2._value - Math.PI / 2;

    // If the rotation goes below 0, reset it to 2π (360 degrees)
    if (newRotation <= -Math.PI * 2) {
      newRotation = 0;
    }

    Animated.timing(magnetRotation2, {
      toValue: newRotation,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      checkRotation();
    });
  };

  // Function to rotate Magnet 1 (Activity 2) clockwise (clockwise means adding 45 degrees)
  const rotateMagnet3 = () => {
    let newRotation = magnetRotation3._value + Math.PI / 4;

    // If the rotation exceeds 360 degrees, reset it to 0 degrees
    if (newRotation >= Math.PI * 2) {
      newRotation = 0;
    }

    Animated.timing(magnetRotation3, {
      toValue: newRotation,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  // Function to rotate Magnet 2 (Activity 2) counterclockwise (counterclockwise means subtracting 45 degrees)
  const rotateMagnet4 = () => {
    let newRotation = magnetRotation4._value - Math.PI / 4;

    // If the rotation goes below 0, reset it to 2π (360 degrees)
    if (newRotation <= -Math.PI * 2) {
      newRotation = 0;
    }

    Animated.timing(magnetRotation4, {
      toValue: newRotation,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  // Check if both magnets are at the specified angles (90° for Magnet 1, -180° for Magnet 2)
  const checkRotation = () => {
    // Convert the current rotation values from radians to degrees for Activity 1
    const angle1 = (magnetRotation1._value * 180) / Math.PI;
    const angle2 = (magnetRotation2._value * 180) / Math.PI;

    console.log("Angle1: ", angle1, "Angle2: ", angle2);

    // Check if Magnet 1 is at 90° and Magnet 2 is at -180°
    const isMagnet1At90 = angle1 === 90;
    const isMagnet2AtMinus180 = angle2 === -180;

    if (isMagnet1At90 && isMagnet2AtMinus180) {
      Alert.alert(
        "Special Alignment!",
        "Magnet 1 is at 90° and Magnet 2 is at -180°."
      );
    }
  };

  const handleSubmit = () => {
    Alert.alert("Submitted", "Submitted Successfull!");
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <Text variant="titleLarge" style={styles.header}>
            Activity - 1
          </Text>
          <Text
            variant="titleMedium"
            style={{
              textAlign: "center",
              marginBottom: 10,
              paddingHorizontal: 5,
            }}
          >
            1) Arrange the magnets horizontally by clicking on the rotate button
            so that they attract each other.
          </Text>

          {/* Magnet Animation */}
          <View style={styles.magnetContainer}>
            {/* First Magnet (clockwise rotation) */}
            <Animated.Image
              source={{
                uri: "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/11-2024-8-4125-Pink_And_Yellow_Illustrated_Man_Motivational_Phone_Wallpaper_-removebg-preview.png",
              }}
              style={[
                styles.magnet,
                {
                  transform: [
                    {
                      rotate: magnetRotation1.interpolate({
                        inputRange: [0, Math.PI * 2],
                        outputRange: ["0deg", "360deg"],
                      }),
                    },
                  ],
                  left: width * 0.2,
                },
              ]}
            />

            {/* Second Magnet (counterclockwise rotation) */}
            <Animated.Image
              source={{
                uri: "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/11-2024-8-4125-Pink_And_Yellow_Illustrated_Man_Motivational_Phone_Wallpaper_-removebg-preview.png",
              }}
              style={[
                styles.magnet,
                {
                  transform: [
                    {
                      rotate: magnetRotation2.interpolate({
                        inputRange: [0, Math.PI * 2],
                        outputRange: ["0deg", "360deg"],
                      }),
                    },
                  ],
                  left: width * 0.6,
                },
              ]}
            />
          </View>

          {/* Rotate Buttons below magnets */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.rotateButton}
              onPress={rotateMagnet1}
            >
              <Text style={styles.buttonText}>Rotate 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.rotateButton}
              onPress={rotateMagnet2}
            >
              <Text style={styles.buttonText}>Rotate 2</Text>
            </TouchableOpacity>
          </View>

          {/* Activity - 2 start here */}
          <Text variant="titleLarge" style={styles.header}>
            Activity - 2
          </Text>
          <Text
            variant="titleMedium"
            style={{
              textAlign: "center",
              marginBottom: 10,
              paddingHorizontal: 5,
            }}
          >
            1) Arrange the magnets horizontally by clicking on the rotate button
            so that they repel each other.
          </Text>

          {/* Magnet Animation */}
          <View style={styles.magnetContainer}>
            {/* First Magnet (clockwise rotation) */}
            <Animated.Image
              source={{
                uri: "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/11-2024-8-4125-Pink_And_Yellow_Illustrated_Man_Motivational_Phone_Wallpaper_-removebg-preview.png",
              }}
              style={[
                styles.magnet,
                {
                  transform: [
                    {
                      rotate: magnetRotation3.interpolate({
                        inputRange: [0, Math.PI * 2],
                        outputRange: ["0deg", "360deg"],
                      }),
                    },
                  ],
                  left: width * 0.2,
                },
              ]}
            />

            {/* Second Magnet (counterclockwise rotation) */}
            <Animated.Image
              source={{
                uri: "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/11-2024-8-4125-Pink_And_Yellow_Illustrated_Man_Motivational_Phone_Wallpaper_-removebg-preview.png",
              }}
              style={[
                styles.magnet,
                {
                  transform: [
                    {
                      rotate: magnetRotation4.interpolate({
                        inputRange: [0, Math.PI * 2],
                        outputRange: ["0deg", "360deg"],
                      }),
                    },
                  ],
                  left: width * 0.6,
                },
              ]}
            />
          </View>

          {/* Rotate Buttons below magnets */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.rotateButton}
              onPress={rotateMagnet3}
            >
              <Text style={styles.buttonText}>Rotate 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.rotateButton}
              onPress={rotateMagnet4}
            >
              <Text style={styles.buttonText}>Rotate 2</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.submitButtonContainer}>
            <Text
              variant="titleMedium"
              style={{
                textAlign: "center",
                color: "red",
                marginTop: 10,
                marginBottom: 10,
                paddingHorizontal: 5,
              }}
            >
              Once you will arrange the poles to submit your answer button.
            </Text>

            <TouchableOpacity
              style={styles.rotateButton}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    backgroundColor: "#f5f5f5",
  },
  scrollViewContainer: {
    paddingBottom: 30,
  },
  header: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  magnetContainer: {
    position: "relative",
    marginBottom: 20,
    height: height * 0.25,
  },
  magnet: {
    width: width * 0.2,
    height: width * 0.4,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  submitButtonContainer: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  rotateButton: {
    backgroundColor: "#6200ee",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
  },
});
