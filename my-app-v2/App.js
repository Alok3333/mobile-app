// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import {
//   createDrawerNavigator,
//   DrawerItemList,
// } from "@react-navigation/drawer";
// import { MaterialIcons } from "@expo/vector-icons"; // Import MaterialIcons
// import {
//   Alert,
//   TouchableOpacity,
//   StyleSheet,
//   View,
//   Image,
//   Dimensions,
// } from "react-native";
// import { Text } from "react-native-paper";
// import SplashScreenLms from "./src/pages/SplashScreenLms";
// import HomeLms from "./src/pages/HomeLms";
// import AccountInformationScreen from "./src/pages/AccountInformationScreen";
// import NotificationsScreen from "./src/pages/NotificationsScreen";
// import PrivacyPolicyScreen from "./src/pages/PrivacyPolicyScreen";
// import CourseListLms from "./src/pages/CoursesLms";
// import NotesLms from "./src/pages/NotesLms";
// import AttendanceReportLms from "./src/pages/AttendanceReportLms";
// import MyClassScreen from "./src/pages/MyClassScreen";
// import MentorScreen from "./src/pages/MentorScreen"; // pending
// import ViewStudyScreen from "./src/pages/ViewStudyScreen";
// import AssignmentsLms from "./src/pages/AssignmentsLms";
// import StudyMaterialsListLms from "./src/pages/StudyMaterialsListLms";
// import ProgressTrackingScreen from "./src/pages/ProgressTrackingScreen";
// import DetailScreen from "./src/pages/DetailScreen";
// import ViewAssignmentLms from "./src/pages/ViewAssignmentLms";
// import FeedbackLms from "./src/pages/FeedbackLms";
// import CategoryFeedback from "./src/pages/CategoryFeedback";
// import LoginLmsScreen from "./src/pages/loginLmsScreen";
// import ForgotPasswordLms from "./src/pages/ForgotPasswordLms";



// // lab experiments
// import OnionParts from "./src/pages/OnionParts";
// import FunWithMagnets from "./src/pages/FunWithMagnets";
// import HumanPartsLabeling from "./src/pages/HumanPartsLabeling";
// import IndiaMapApp from "./src/pages/IndiaMapApp";
// import WordPuzzle from "./src/pages/WordPuzzle";
// import EmojiSticker from "./src/pages/EmojiSticker";

// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// const { width } = Dimensions.get("window"); // Get the device width

// const CustomDrawerContent = (props) => {
//   const userName = "Pooja Vasudev"; // Replace with the user's name
//   const regNo = "Reg No: 123456"; // Replace with the user's registration number

//   return (
//     <View style={styles.drawerContent}>
//       <View style={styles.drawerHeader}>
//         <Image
//           source={{
//             uri: "https://i.pinimg.com/474x/d6/a2/33/d6a2336464f9b3ed9dff784fc03e3fdf.jpg", // Profile picture URL
//           }}
//           style={styles.profileImage}
//         />
//         <Text variant="titleMedium" style={styles.drawerUserName}>
//           {userName}
//         </Text>
//         <Text variant="bodySmall" style={styles.drawerRegNo}>
//           {regNo}
//         </Text>
//       </View>
//       <View style={styles.divider} />
//       <DrawerItemList {...props} />
//       <View style={styles.divider} />
//       <TouchableOpacity
//         style={styles.logoutButton}
//         onPress={() => handleLogout(props.navigation)}
//       >
//         <Text variant="labelLarge" style={styles.logoutText}>
//           Logout
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const handleLogout = (navigation) => {
//   Alert.alert("Logout Confirmation", "Are you sure you want to logout?", [
//     {
//       text: "Cancel",
//       style: "cancel",
//     },
//     {
//       text: "OK",
//       onPress: () => navigation.navigate("LoginLmsScreen"),
//     },
//   ]);
// };

// const MainDrawerNavigator = () => {
//   return (
//     <Drawer.Navigator
//       initialRouteName="HomeLms"
//       drawerContent={(props) => <CustomDrawerContent {...props} />}
//       screenOptions={{
//         drawerStyle: {
//           backgroundColor: "#010219",
//           width: width * 0.65,
//         },
//         drawerActiveTintColor: "#212640",
//         drawerActiveBackgroundColor: "#02bcb5",
//         drawerInactiveTintColor: "#fcfefa",
//         drawerLabelStyle: {
//           fontSize: 14,
//           // fontWeight: "bold", // Add bold font style to labels
//         },
//       }}
//     >
//       <Drawer.Screen
//         name="Home"
//         component={HomeLms}
//         options={{
//           drawerIcon: ({ color }) => (
//             <MaterialIcons name="home" size={24} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Student Information"
//         component={AccountInformationScreen}
//         options={{
//           drawerIcon: ({ color }) => (
//             <MaterialIcons name="account-circle" size={24} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Notifications"
//         component={NotificationsScreen}
//         options={{
//           drawerIcon: ({ color }) => (
//             <MaterialIcons name="notifications" size={24} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Privacy Policy"
//         component={PrivacyPolicyScreen}
//         options={{
//           drawerIcon: ({ color }) => (
//             <MaterialIcons name="privacy-tip" size={24} color={color} />
//           ),
//         }}
//       />
//     </Drawer.Navigator>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="EmojiSticker">
//         <Stack.Screen
//           name="EmojiSticker"
//           component={EmojiSticker}
//           options={{ title: "EmojiSticker" }}
//         />
        
//         <Stack.Screen
//           name="SplashScreenLms"
//           component={SplashScreenLms}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="LoginLmsScreen"
//           component={LoginLmsScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="ForgotPasswordLms"
//           component={ForgotPasswordLms}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="MainDrawer"
//           component={MainDrawerNavigator}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="CourseListLms"
//           component={CourseListLms}
//           options={{ title: "Courses" }}
//         />
//         <Stack.Screen
//           name="AssignmentsLms"
//           component={AssignmentsLms}
//           options={{ title: "Assignments" }}
//         />
//         <Stack.Screen
//           name="FeedbackLms"
//           component={FeedbackLms}
//           options={{ title: "Feedback" }}
//         />

//         <Stack.Screen
//           name="CategoryFeedback"
//           component={CategoryFeedback}
//           options={{ title: "Category Feedback" }}
//         />
//         <Stack.Screen
//           name="NotesLms"
//           component={NotesLms}
//           options={{ title: "Notes" }}
//         />
//         <Stack.Screen
//           name="StudyMaterialsListLms"
//           component={StudyMaterialsListLms}
//           options={{ title: "Study Materials" }}
//         />
//         <Stack.Screen
//           name="DetailScreen"
//           component={DetailScreen}
//           options={{ title: "Detail" }}
//         />
//         <Stack.Screen
//           name="ViewAssignmentLms"
//           component={ViewAssignmentLms}
//           options={{ title: "View Assignment" }}
//         />
//         <Stack.Screen
//           name="MyClassScreen"
//           component={MyClassScreen}
//           options={{ title: "My Classes" }}
//         />
//         <Stack.Screen
//           name="AttendanceReportLms"
//           component={AttendanceReportLms}
//           options={{ title: "Attendance Report" }}
//         />
//         <Stack.Screen
//           name="MentorScreen"
//           component={MentorScreen}
//           options={{ title: "Mentor" }}
//         />
//         <Stack.Screen
//           name="ViewStudyScreen"
//           component={ViewStudyScreen}
//           options={{ title: "View Study Material" }}
//         />
//         <Stack.Screen
//           name="ProgressTrackingScreen"
//           component={ProgressTrackingScreen}
//           options={{ title: "Progress Tracking" }}
//         />

//         {/* <Stack.Screen
//           name="Syllabus"
//           component={Syllabus}
//           options={{ title: "Syllabus" }}
//         /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   drawerContent: {
//     flex: 1,
//     paddingTop: 0,
//   },
//   drawerHeader: {
//     backgroundColor: "#010219",
//     padding: 20,
//   },
//   profileImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   drawerUserName: {
//     color: "#fcfefa",
//     // fontWeight: "bold",
//     // fontSize: 16,
//     // marginBottom: 5,
//   },
//   drawerRegNo: {
//     color: "#fcfefa",
//     // fontSize: 14,
//   },
//   divider: {
//     height: 1,
//     backgroundColor: "#02bcb5",
//     marginBottom: 10,
//   },
//   logoutButton: {
//     padding: 14,
//     backgroundColor: "#02bcb5",
//     borderRadius: 5,
//     marginTop: 16,
//     marginHorizontal: 10,
//     alignItems: "center",
//   },
//   logoutText: {
//     color: "#212640",
//     textAlign: "center",
//   },
// });

// export default App;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons"; // Import MaterialIcons
import {
  Alert,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Dimensions,
} from "react-native";
import { Text } from "react-native-paper";
import SplashScreenLms from "./src/pages/SplashScreenLms";
import HomeLms from "./src/pages/HomeLms";
import AccountInformationScreen from "./src/pages/AccountInformationScreen";
import NotificationsScreen from "./src/pages/NotificationsScreen";
import PrivacyPolicyScreen from "./src/pages/PrivacyPolicyScreen";
import CourseListLms from "./src/pages/CoursesLms";
import NotesLms from "./src/pages/NotesLms";
import AttendanceReportLms from "./src/pages/AttendanceReportLms";
import MyClassScreen from "./src/pages/MyClassScreen";
import MentorScreen from "./src/pages/MentorScreen"; // pending
import ViewStudyScreen from "./src/pages/ViewStudyScreen";
import AssignmentsLms from "./src/pages/AssignmentsLms";
import StudyMaterialsListLms from "./src/pages/StudyMaterialsListLms";
import ProgressTrackingScreen from "./src/pages/ProgressTrackingScreen";
import DetailScreen from "./src/pages/DetailScreen";
import ViewAssignmentLms from "./src/pages/ViewAssignmentLms";
import FeedbackLms from "./src/pages/FeedbackLms";
import CategoryFeedback from "./src/pages/CategoryFeedback";
import LoginLmsScreen from "./src/pages/loginLmsScreen";
import ForgotPasswordLms from "./src/pages/ForgotPasswordLms";

// lab experiments
import OnionParts from "./src/pages/OnionParts";
import FunWithMagnets from "./src/pages/FunWithMagnets";
import HumanPartsLabeling from "./src/pages/HumanPartsLabeling";
import IndiaMapApp from "./src/pages/IndiaMapApp";
import WordPuzzle from "./src/pages/WordPuzzle";
import EmojiSticker from "./src/pages/EmojiSticker";
import DragAndDropScreen from "./src/pages/dragandDrop";
import dragtest from "./src/pages/dragtest";
import testdrag from "./src/pages/testdrag";

// Import GestureHandlerRootView
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const { width } = Dimensions.get("window"); // Get the device width

const CustomDrawerContent = (props) => {
  const userName = "Pooja Vasudev"; // Replace with the user's name
  const regNo = "Reg No: 123456"; // Replace with the user's registration number

  return (
    <View style={styles.drawerContent}>
      <View style={styles.drawerHeader}>
        <Image
          source={{
            uri: "https://i.pinimg.com/474x/d6/a2/33/d6a2336464f9b3ed9dff784fc03e3fdf.jpg", // Profile picture URL
          }}
          style={styles.profileImage}
        />
        <Text variant="titleMedium" style={styles.drawerUserName}>
          {userName}
        </Text>
        <Text variant="bodySmall" style={styles.drawerRegNo}>
          {regNo}
        </Text>
      </View>
      <View style={styles.divider} />
      <DrawerItemList {...props} />
      <View style={styles.divider} />
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => handleLogout(props.navigation)}
      >
        <Text variant="labelLarge" style={styles.logoutText}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const handleLogout = (navigation) => {
  Alert.alert("Logout Confirmation", "Are you sure you want to logout?", [
    {
      text: "Cancel",
      style: "cancel",
    },
    {
      text: "OK",
      onPress: () => navigation.navigate("LoginLmsScreen"),
    },
  ]);
};

const MainDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeLms"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#010219",
          width: width * 0.65,
        },
        drawerActiveTintColor: "#212640",
        drawerActiveBackgroundColor: "#02bcb5",
        drawerInactiveTintColor: "#fcfefa",
        drawerLabelStyle: {
          fontSize: 14,
          // fontWeight: "bold", // Add bold font style to labels
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeLms}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Student Information"
        component={AccountInformationScreen}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="account-circle" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="notifications" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Privacy Policy"
        component={PrivacyPolicyScreen}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="privacy-tip" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    // Wrap the entire app with GestureHandlerRootView
    // <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="OnionParts">
          <Stack.Screen
            name="OnionParts"
            component={OnionParts}
            options={{ title: "OnionParts" }}
          />
          
          <Stack.Screen
            name="SplashScreenLms"
            component={SplashScreenLms}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginLmsScreen"
            component={LoginLmsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgotPasswordLms"
            component={ForgotPasswordLms}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainDrawer"
            component={MainDrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CourseListLms"
            component={CourseListLms}
            options={{ title: "Courses" }}
          />
          <Stack.Screen
            name="AssignmentsLms"
            component={AssignmentsLms}
            options={{ title: "Assignments" }}
          />
          <Stack.Screen
            name="FeedbackLms"
            component={FeedbackLms}
            options={{ title: "Feedback" }}
          />
          <Stack.Screen
            name="CategoryFeedback"
            component={CategoryFeedback}
            options={{ title: "Category Feedback" }}
          />
          <Stack.Screen
            name="NotesLms"
            component={NotesLms}
            options={{ title: "Notes" }}
          />
          <Stack.Screen
            name="StudyMaterialsListLms"
            component={StudyMaterialsListLms}
            options={{ title: "Study Materials" }}
          />
          <Stack.Screen
            name="DetailScreen"
            component={DetailScreen}
            options={{ title: "Detail" }}
          />
          <Stack.Screen
            name="ViewAssignmentLms"
            component={ViewAssignmentLms}
            options={{ title: "View Assignment" }}
          />
          <Stack.Screen
            name="MyClassScreen"
            component={MyClassScreen}
            options={{ title: "My Classes" }}
          />
          <Stack.Screen
            name="AttendanceReportLms"
            component={AttendanceReportLms}
            options={{ title: "Attendance Report" }}
          />
          <Stack.Screen
            name="MentorScreen"
            component={MentorScreen}
            options={{ title: "Mentor" }}
          />
          <Stack.Screen
            name="ViewStudyScreen"
            component={ViewStudyScreen}
            options={{ title: "View Study Material" }}
          />
          <Stack.Screen
            name="ProgressTrackingScreen"
            component={ProgressTrackingScreen}
            options={{ title: "Progress Tracking" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    // </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop: 0,
  },
  drawerHeader: {
    backgroundColor: "#010219",
    padding: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 20,
    marginBottom: 20,
  },
  drawerUserName: {
    color: "#fcfefa",
    // fontWeight: "bold",
    // fontSize: 16,
    // marginBottom: 5,
  },
  drawerRegNo: {
    color: "#fcfefa",
    // fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor: "#02bcb5",
    marginBottom: 10,
  },
  logoutButton: {
    padding: 14,
    backgroundColor: "#02bcb5",
    borderRadius: 5,
    marginTop: 16,
    marginHorizontal: 10,
    alignItems: "center",
  },
  logoutText: {
    color: "#212640",
    textAlign: "center",
  },
});

export default App;

