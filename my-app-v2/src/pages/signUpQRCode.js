import * as React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { Card, Button, Text } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const screenHeight = Dimensions.get("window").height;

const QRimage =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-17-5229-QR.png";

export default function SignupQRFormScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#F35668", "#8F52FB"]}
        style={styles.gradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      />
      <Card style={styles.wrapper}>
        <Text variant="titleSmall">
          Step 1: Make the payment using the below QR code
        </Text>
        <Card.Cover source={{ uri: QRimage }} style={styles.qrimage} />

        <Text variant="titleSmall" style={{ marginBottom: 40 }}>
          Step 2: Click on the below button to sign up, once the payment is
          completed.
        </Text>

        <LinearGradient
          colors={["#F35668", "#8F52FB"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={{
            marginHorizontal: "auto",
            paddingVertical: 2,
            paddingHorizontal: 2,
            borderRadius: 30,
          }}
        >
          <Button
            mode="contained"
            onPress={() => navigation.navigate("SubmissionFormScreen")}
            contentStyle={{ height: 50 }}
            labelStyle={{ color: "#FFF" }}
            icon="send"
            style={{ backgroundColor: "transparent" }}
          >
            Click here to Sign up
          </Button>
        </LinearGradient>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: screenHeight,
  },
  wrapper: {
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    marginTop: 60,
    // paddingBottom: 100,
    height: screenHeight,
  },
  title: {
    paddingTop: 20,
    // fontSize: 36,
    fontWeight: "bold",
  },

  loginText: {
    color: "#6b6b6b",
  },
  loginLink: {
    color: "#F35668",
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    paddingTop: 10,
    fontSize: 14,
  },

  qrimage: {
    width: 160,
    height: 160,
    alignSelf: "center",
    marginVertical: 50,
  },
  footerText: {
    textAlign: "center",
    paddingVertical: 10,
    // fontSize: 14,
  },
});
