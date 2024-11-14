// SplashScreen.js
import React, { useEffect } from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;

const SplashScreenLms = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("LoginLmsScreen"); // Navigate to Login screen
    }, 3000); // Show splash screen for 3 seconds

    return () => clearTimeout(timer); // Clear timeout on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/9-2024-11-2048-FullLogo_Transparent_NoBuffer.png",
        }}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#010219", // Splash screen background color
  },
  logo: {
    width: screenWidth * 0.5, // Responsive width
    height: undefined,
    aspectRatio: 1, // Maintain aspect ratio
  },
});

export default SplashScreenLms;
