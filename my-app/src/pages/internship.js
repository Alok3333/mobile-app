import React, { useState } from "react";
import {
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Text } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
// import { Link } from 'expo-router';

const screenHeight = Dimensions.get("window").height;

const icon1 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-19-812-technical.png";
const icon2 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-23-622-arts.png";
const icon3 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-19-4435-bussiness.png";
const icon4 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-19-5442-finance2.png";
const icon5 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-23-550-science (2).png";
const icon6 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-19-620-vocational.png";
const icon7 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-23-652-education.png";

const menuList = [
  { menuTitle: "Bussiness", icon: icon3, link: "InternshipActivityScreen" },
  { menuTitle: "Techninal ", icon: icon1, link: "/internshipBranch" },
  { menuTitle: "Science", icon: icon5, link: "/internshipBranch" },
  { menuTitle: "Finance", icon: icon4, link: "/internshipBranch" },
  { menuTitle: "Arts", icon: icon2, link: "/internshipBranch" },
  { menuTitle: "General", icon: icon6, link: "/internshipBranch" },
  { menuTitle: "Education", icon: icon7, link: "/internshipBranch" },
];

const renderCards = () => {
  const navigation = useNavigation();
  return menuList.map((item, index) => {
    return (
      <TouchableOpacity
        style={styles.courseItem}
        key={item.menuTitle}
        onPress={() => navigation.navigate(item.link)}
      >
        {/* <Link href={item.link} style={{ flex: 1 }}> */}
        <Image source={{ uri: item.icon }} style={styles.courseIcon} />
        <Text variant="titleMedium" style={styles.courseText}>
          {item.menuTitle}
        </Text>
        {/* </Link> */}
      </TouchableOpacity>
    );
  });
};

export default function InternshipsScreen() {
  const [activeTab, setActiveTab] = useState("Internships");

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
            My Internships
          </Text>
          <Text variant="titleMedium" style={styles.nameText}>
            Apply your learnings to solve business problems
          </Text>
        </View>
      </View>

      {/* Tab Section */}
      <View style={styles.tabContainer}>
        {["Internships", "In Progress", "Completed"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              variant="labelLarge"
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
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
    // fontWeight: 'bold',
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
    color: "#555",
  },
  activeTabText: {
    color: "#fff",
  },

  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 10,
    marginTop: 20,
    paddingBottom: 60,
  },

  cardsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  courseItem: {
    width: "48%",
    margin: "1%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 20,
    padding: 10,
    justifyContent: "center",
  },
  courseIcon: {
    width: 50,
    height: 50,
    alignSelf: "center",
    margin: 20,
  },
  courseText: {
    textAlign: "center",
    marginBottom: 20,
  },
});
