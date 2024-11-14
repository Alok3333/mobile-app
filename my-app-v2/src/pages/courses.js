import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Text, Icon } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native"; // Import this

const screenHeight = Dimensions.get("window").height;

const menuList = [
  {
    menuTitle: "Electrical Engineering",
    icon: "ballot",
    screen: "ElectricalEngineeringScreen", // Specify the target screen
  },
  {
    menuTitle: "Analytical Games",
    icon: "controller-classic",
    screen: "CardItem",
  },
  {
    menuTitle: "Physical Labs",
    icon: "earth",
    screen: "PhysicalLabsScreen",
  },
  {
    menuTitle: "Chemical Labs",
    icon: "flask",
    screen: "ChemicalLabsScreen",
  },
  {
    menuTitle: "Electronics Labs",
    icon: "lightbulb",
    screen: "ElectronicsLabsScreen",
  },
  {
    menuTitle: "Computer Science & Engineering",
    icon: "laptop",
    screen: "ComputerScienceScreen",
  },
];

export default function HomeScreen() {
  const navigation = useNavigation(); // Initialize navigation
  const [activeTab, setActiveTab] = useState("All Courses");

  const renderCards = () => {
    return menuList.map((item, index) => {
      return (
        <TouchableOpacity
          style={styles.courseItem}
          key={item.menuTitle}
          onPress={() => handleNavigateToCardItem(item.screen, index)}
        >
          <Icon source={item.icon} color="white" style={styles.icon} size={80} />
          <Text variant="titleMedium" style={styles.courseText}>
            {item.menuTitle}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  const handleNavigateToCardItem = (screen, index) => {
    navigation.navigate(screen, { item: menuList[index] }); // Navigate to CardItem
  };

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#F35668", "#8F52FB"]}
        style={styles.gradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      />

      {/* Profile Section */}
      <View style={styles.profileWrapper}>
        <View style={styles.textWrapper}>
          <Text variant="headlineMedium" style={styles.welcomeText}>
            All Experiment & Games
          </Text>
        </View>
      </View>

      {/* Cards Section */}
      <ScrollView vertical contentContainerStyle={styles.cardsContainer}>
        <View style={styles.cardsRow}>{renderCards()}</View>
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
  },
  textWrapper: {
    flexDirection: "column",
    margin: "auto",
  },
  welcomeText: {
    fontWeight: "bold",
    textAlign: "center",
  },
  nameText: {
    textAlign: "center",
    color: "#fff",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingVertical: 10,
    marginTop: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: "#8F52FB",
  },
  tabText: {
    fontSize: 16,
    color: "#555",
  },
  activeTabText: {
    color: "#fff",
  },

  icon: {
    alignSelf: "center", // Center icon horizontally
    marginBottom: 10,
  },

  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 10,
    marginTop: 20,
    paddingBottom: 60,
  },
  courseItem: {
    width: "48%", // Adjusted to fit two items in a row
    margin: "1%", // Added margin to create space between items
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 20,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  cardsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  courseText: {
    textAlign: "center",
    marginBottom: 20,
  },
});
