import React from "react";
import { View, Image, Dimensions, StyleSheet, ScrollView } from "react-native";
import {
  Avatar,
  Card,
  Title,
  Paragraph,
  TouchableRipple,
  Text,
} from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const screenHeight = Dimensions.get("window").height;

const icon1 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-17-485-homeIcon.png";
const icon2 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-17-4828-internshipIcon.png";
const icon3 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-21-10-certificate1.png";
const icon4 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-17-4646-favoriteIcon.png";
const icon5 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-17-4755-generalIcon.png";
const icon6 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-17-4817-internetIcon.png";
const icon7 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-17-4840-linkIcon.png";
const icon8 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-17-5155-messageIcon.png";
const icon9 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-17-1411-updatesIcon.png";

const menuList = [
  { menuTitle: "Course module", icon: icon1, link: "CourseModuleScreen" },
  { menuTitle: "Internship", icon: icon2, link: "InternshipMainScreen" },
  { menuTitle: "Certificates", icon: icon3, link: "/" },
  { menuTitle: "Favorite", icon: icon4, link: "/" },
  { menuTitle: "Feature Policies", icon: icon5, link: "/" },
  { menuTitle: "General", icon: icon6, link: "/" },
  { menuTitle: "Experiment & Games", icon: icon7, link: "Courses" },
  { menuTitle: "Notifications", icon: icon8, link: "/" },
  { menuTitle: "Updates", icon: icon9, link: "/" },
];

const profileImg =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-17-5218-profile2.png";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      {/* Gradient background */}
      <LinearGradient
        colors={["#F35668", "#8F52FB"]}
        style={styles.gradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      />
      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile Section */}
        <View style={styles.profileWrapper}>
          <View style={styles.glassCircle}>
            <Avatar.Image
              source={{ uri: profileImg }}
              size={100}
              style={{ backgroundColor: "transparent" }}
            />
          </View>
          <View style={styles.textWrapper}>
            <Text variant="headlineMedium" style={styles.welcomeText}>
              Welcome,
            </Text>
            <Text variant="titleMedium" style={styles.nameText}>
              Sonali Kumari Keshri
            </Text>
          </View>
        </View>

        {/* Quick Actions */}
        <Card style={styles.glassCard}>
          <Card.Content>
            <Title style={styles.cardTitle}>Explore</Title>
            <View style={styles.iconRow}>
              {menuList.map((item, index) => (
                <TouchableRipple
                  key={index}
                  style={styles.iconContainer}
                  onPress={() => navigation.navigate(item.link)}
                  rippleColor="rgba(0, 150, 255, 0.2)"
                >
                  <View style={styles.iconInnerBox}>
                    <Image source={{ uri: item.icon }} style={styles.icon} />
                    <Paragraph style={styles.iconText}>
                      {item.menuTitle}
                    </Paragraph>
                  </View>
                </TouchableRipple>
              ))}
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
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
  profileWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 150, 255, 0.3)",
    padding: 20,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  glassCircle: {
    marginRight: 16,
    borderColor: "rgba(255, 255, 255, 0.4)",
    borderWidth: 4,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 12,
  },
  textWrapper: {
    flexDirection: "column",
  },
  welcomeText: {
    fontWeight: "bold",
    color: "#fff",
  },
  nameText: {
    color: "#fff",
  },
  scrollContent: {
    paddingTop: 160,
  },
  glassCard: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    margin: 20,
    paddingTop: 30,
    paddingBottom: 20,
    shadowRadius: 4,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  iconRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  iconContainer: {
    width: "30%", // Ensure each icon takes up 30% of the row
    alignItems: "center",
    marginVertical: 10,
  },
  iconInnerBox: {
    alignItems: "center",
  },
  icon: {
    width: 100,
    height: 100,
  },
  iconText: {
    color: "#fff",
    marginTop: 5,
    fontSize: 14,
    textAlign: "center",
  },
});
