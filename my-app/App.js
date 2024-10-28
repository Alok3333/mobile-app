// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import FindDiff from "./src/pages/FindDiff"; // Your FindDiff game screen
// import MazeGen from "./src/pages/MazeGen"; // Your maze game screen
// import FinalGamePage from "./src/pages/FinalGamePage"; // Your final screen
// import BetterAim from "./src/pages/BetterAim";
// import CardItem from "./src/pages/CardItem";
// import Courses from "./src/pages/courses";
// import ElectricalEngineeringScreen from "./src/pages/ElectricalEngineeringScreen";
// import PhysicalLabsScreen from "./src/pages/PhysicalLabsScreen";
// import ChemicalLabsScreen from "./src/pages/ChemicalLabsScreen";
// import ElectronicsLabsScreen from "./src/pages/ElectronicsLabsScreen";
// import ComputerScienceScreen from "./src/pages/ComputerScienceScreen";
// import WordGuessing from "./src/pages/WordGuessing";
// import UltimateBattleGame from "./src/pages/UltimateBattleGame";
// import DiceGame from "./src/pages/DiceGame";
// import PacManGame from "./src/pages/PacManGame";
// import CrosswordGrid from "./src/pages/CrosswordGrid";
// import ImgPuzzle from "./src/pages/ImgPuzzle";

// import Index from "./src/pages/index";
// import Home from "./src/pages/home";
// import Login from "./src/pages/login";
// import CourseModuleScreen from "./src/pages/courseModules";
// import SignupQRFormScreen from "./src/pages/signUpQRCode";
// import SubmissionFormScreen from "./src/pages/registrationForm";
// import VideoPage from "./src/pages/videoPage";
// import CourseModulesDetailsScreen from "./src/pages/courseModulesDetails";
// import CourseActivityScreen from "./src/pages/courseActivity";
// import InternshipMainScreen from "./src/pages/internshipMain";
// import InternshipsScreen from "./src/pages/internship";
// import InternshipActivityScreen from "./src/pages/internshipActivity";

// import EntryPageLms from "./src/pages/EntryPageLms";
// import LoginLmsScreen from "./src/pages/loginLmsScreen";
// import HomeLms from "./src/pages/HomeLms";
// import CourseListLms from "./src/pages/CoursesLms";

// // import { Drawer } from 'react-native-paper';

// // import SlideBar from "./src/pages/SlideBar";

// const Stack = createNativeStackNavigator();

// export default function App() {
//   const [active, setActive] = React.useState("");

//   return (
//     <NavigationContainer>
//       {/* <SlideBar> */}
//       <Stack.Navigator initialRouteName="EntryPageLms">
//         <Stack.Screen
//           name="EntryPageLms"
//           component={EntryPageLms}
//           options={{ title: "LMS" }} // Customize title for MazeGen
//         />
//         <Stack.Screen
//           name="LoginLmsScreen"
//           component={LoginLmsScreen}
//           options={{ title: "Login" }} // Customize title for MazeGen
//         />
//         <Stack.Screen
//           name="HomeLms"
//           component={HomeLms}
//           options={{ title: "Home" }} // Customize title for MazeGen
//         />
//         <Stack.Screen
//           name="CourseListLms"
//           component={CourseListLms}
//           options={{ title: "Course List" }} // Customize title for MazeGen
//         />

//         <Stack.Screen
//           name="Index"
//           component={Index}
//           options={{ title: "Index" }} // Customize title for MazeGen
//         />
//         <Stack.Screen
//           name="Login"
//           component={Login}
//           options={{ title: "Login" }} // Customize title for MazeGen
//         />
//         <Stack.Screen
//           name="VideoPage"
//           component={VideoPage}
//           options={{ title: "AI Video" }} // Customize title for MazeGen
//         />
//         <Stack.Screen
//           name="SignupQRFormScreen"
//           component={SignupQRFormScreen}
//           options={{ title: "Signup with QR Code" }} // Customize title for MazeGen
//         />
//         <Stack.Screen
//           name="SubmissionFormScreen"
//           component={SubmissionFormScreen}
//           options={{ title: "Registration Form" }} // Customize title for MazeGen
//         />
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{ title: "Home" }} // Customize title for MazeGen
//         />
//         <Stack.Screen
//           name="CourseModuleScreen"
//           component={CourseModuleScreen}
//           options={{ title: "Course Module" }} // Customize title for MazeGen
//         />
//         <Stack.Screen
//           name="CourseModulesDetailsScreen"
//           component={CourseModulesDetailsScreen}
//           options={{ title: "Course Modules Details" }} // Customize title for MazeGen
//         />
//         <Stack.Screen
//           name="CourseActivityScreen"
//           component={CourseActivityScreen}
//           options={{ title: "Course Activity" }} // Customize title for MazeGen
//         />
//         <Stack.Screen
//           name="InternshipsScreen"
//           component={InternshipsScreen}
//           options={{ title: "Internships" }} // Customize title for MazeGen
//         />
//         <Stack.Screen
//           name="InternshipMainScreen"
//           component={InternshipMainScreen}
//           options={{ title: "Internship" }} // Customize title for MazeGen
//         />
//         <Stack.Screen
//           name="InternshipActivityScreen"
//           component={InternshipActivityScreen}
//           options={{ title: "Internship Activity" }} // Customize title for MazeGen
//         />

//         <Stack.Screen
//           name="Courses"
//           component={Courses}
//           options={{ title: "List" }} // Customize title for MazeGen
//         />
//         <Stack.Screen
//           name="CardItem"
//           component={CardItem}
//           options={{ title: "List of game" }} // Customize title for MazeGen
//         />
//         <Stack.Screen
//           name="ElectricalEngineeringScreen"
//           component={ElectricalEngineeringScreen}
//           options={{ title: "List of Electrical Engineering" }} // Customize title for MazeGen
//         />
//         <Stack.Screen
//           name="PhysicalLabsScreen"
//           component={PhysicalLabsScreen}
//           options={{ title: "List of Physical Labs" }} // Customize title for MazeGen
//         />
//         <Stack.Screen
//           name="ChemicalLabsScreen"
//           component={ChemicalLabsScreen}
//           options={{ title: "List of Chemical Labs" }} // Customize title for MazeGen
//         />
//         <Stack.Screen
//           name="ElectronicsLabsScreen"
//           component={ElectronicsLabsScreen}
//           options={{ title: "List of Electronics Labs" }} // Customize title for MazeGen
//         />
//         <Stack.Screen
//           name="ComputerScienceScreen"
//           component={ComputerScienceScreen}
//           options={{ title: "List of Computer Science" }} // Customize title for MazeGen
//         />
//         <Stack.Screen
//           name="FindDiff"
//           component={FindDiff}
//           options={{ title: "Find the Differences" }} // Customize title for FindDiff
//         />
//         <Stack.Screen
//           name="BetterAim"
//           component={BetterAim}
//           options={{ title: "BetterAim Game" }} // Customize title for MazeGen
//         />
//         <Stack.Screen
//           name="WordGuessing"
//           component={WordGuessing}
//           options={{ title: "Spellbound: The Word Game" }} // Customize title for MazeGen
//         />
//         <Stack.Screen
//           name="UltimateBattleGame"
//           component={UltimateBattleGame}
//           options={{ title: "X vs O: The Ultimate Battle" }} // Customize title for MazeGen
//         />
//         <Stack.Screen
//           name="DiceGame"
//           component={DiceGame}
//           options={{ title: "Dicey Decisions" }} // Customize title for MazeGen
//         />
//         <Stack.Screen
//           name="PacManGame"
//           component={PacManGame}
//           options={{ title: "PacMan Game" }} // Customize title for MazeGen
//         />
//         <Stack.Screen
//           name="CrosswordGrid"
//           component={CrosswordGrid}
//           options={{ title: "Cross Word Puzzle Game" }} // Customize title for MazeGen
//         />
//         <Stack.Screen
//           name="ImgPuzzle"
//           component={ImgPuzzle}
//           options={{ title: "Image Puzzle Game" }} // Customize title for MazeGen
//         />

//         <Stack.Screen
//           name="MazeGen"
//           component={MazeGen}
//           options={{ title: "Maze Generation Game" }} // Customize title for MazeGen
//         />
//         <Stack.Screen
//           name="FinalGamePage"
//           component={FinalGamePage}
//           options={{ title: "Game Over" }} // Customize title for the final page
//         />
//       </Stack.Navigator>
//       {/* </SlideBar> */}
//     </NavigationContainer>
//   );
// }

// // // // // ***************************final code ----------------------------

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FindDiff from "./src/pages/FindDiff";
import MazeGen from "./src/pages/MazeGen";
import FinalGamePage from "./src/pages/FinalGamePage";
import HomeLms from "./src/pages/HomeLms";
import CourseListLms from "./src/pages/CoursesLms";
import EntryPageLms from "./src/pages/EntryPageLms";
import LoginLmsScreen from "./src/pages/loginLmsScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeLms">
        <Drawer.Screen name="HomeLms" component={HomeLms} />
        <Drawer.Screen name="CourseListLms" component={CourseListLms} />
        <Drawer.Screen name="EntryPageLms" component={EntryPageLms} />
        <Drawer.Screen name="LoginLmsScreen" component={LoginLmsScreen} />
        {/* Add more screens as needed */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

