// // // // // import React, { useEffect, useState } from "react";
// // // // // import { StyleSheet, View } from "react-native";
// // // // // import { Card, Text } from "react-native-paper";

// // // // // const HomeLms = () => {
// // // // //   const [greeting, setGreeting] = useState("");
// // // // //   const userName = "John Doe"; // Replace with dynamic name if needed

// // // // //   useEffect(() => {
// // // // //     const currentHour = new Date().getHours();

// // // // //     if (currentHour < 12) {
// // // // //       setGreeting("Good Morning ☀️");
// // // // //     } else if (currentHour < 17) {
// // // // //       setGreeting("Good Afternoon 🌞");
// // // // //     } else if (currentHour < 21) {
// // // // //       setGreeting("Good Evening 🌆");
// // // // //     } else {
// // // // //       setGreeting("Good Night 🌙");
// // // // //     }
// // // // //   }, []);

// // // // //   return (
// // // // //     <View style={styles.container}>
// // // // //       <Card style={styles.card}>
// // // // //         <Card.Content>
// // // // //           <Text style={styles.greeting}>{greeting}</Text>
// // // // //           <Text style={styles.userName}>{userName}</Text>
// // // // //         </Card.Content>
// // // // //       </Card>
// // // // //     </View>
// // // // //   );
// // // // // };

// // // // // const styles = StyleSheet.create({
// // // // //   container: {
// // // // //     flex: 1,
// // // // //     backgroundColor: "#fcfefa",
// // // // //     // paddingTop: 50, // Add some padding to move the card down slightly
// // // // //   },
// // // // //   card: {
// // // // //     backgroundColor: "#212640",
// // // // //     borderBottomLeftRadius: 20,
// // // // //     borderBottomRightRadius: 20,
// // // // //     borderTopLeftRadius: 0,
// // // // //     borderTopRightRadius: 0,
// // // // //     padding: 20,
// // // // //     width: "100%",
// // // // //     maxWidth: 500,
// // // // //     alignSelf: "center", // Center the card horizontally
// // // // //     marginTop: 0, // No margin at the top
// // // // //   },
// // // // //   greeting: {
// // // // //     fontSize: 24,
// // // // //     color: "#fcfefa",
// // // // //     textAlign: "left",
// // // // //   },
// // // // //   userName: {
// // // // //     fontSize: 18,
// // // // //     color: "#fcfefa",
// // // // //     textAlign: "left",
// // // // //     marginTop: 10,
// // // // //   },
// // // // // });

// // // // // export default HomeLms;

// // import React, { useRef, useEffect, useState } from "react";
// // import {
// //   DrawerLayoutAndroid,
// //   StyleSheet,
// //   View,
// //   Alert,
// //   Image,
// //   TouchableOpacity,
// //   ScrollView,
// // } from "react-native";
// // import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
// // import { Card, Text, Avatar, IconButton, Divider } from "react-native-paper";
// // import { MaterialIcons } from "@expo/vector-icons"; // Import Material Icons for the menu icon
// // import { useNavigation } from "@react-navigation/native";

// // const DrawerApp = () => {
// //   const navigation = useNavigation();
// //   const drawer = useRef(null);
// //   const [greeting, setGreeting] = useState("");
// //   const userName = "Pooja Vasudev"; // Replace with dynamic name if needed

// //   useEffect(() => {
// //     const currentHour = new Date().getHours();

// //     if (currentHour < 12) {
// //       setGreeting("Good Morning, ☀️");
// //     } else if (currentHour < 17) {
// //       setGreeting("Good Afternoon, 🌞");
// //     } else if (currentHour < 21) {
// //       setGreeting("Good Evening, 🌆");
// //     } else {
// //       setGreeting("Good Night, 🌙");
// //     }
// //   }, []);

// //   // Handle Logout
// //   const handleLogout = () => {
// //     Alert.alert("Logout Confirmation", "Are you sure you want to logout?", [
// //       {
// //         text: "Cancel",
// //         style: "cancel",
// //       },
// //       {
// //         text: "OK",
// //         onPress: () => navigation.navigate("EntryPageLms"),
// //       },
// //     ]);
// //   };

// //   const navigationView = () => (
// //     <SafeAreaView style={[styles.container, styles.navigationContainer]}>
// //       <Text variant="headlineMedium" style={styles.appName}>
// //         LMS
// //       </Text>
// //       <Divider />
// //       <Text variant="titleMedium" style={styles.paragraph}>
// //         Account Information
// //       </Text>
// //       <Text variant="titleMedium" style={styles.paragraph}>
// //         Notifications
// //       </Text>
// //       <Text variant="titleMedium" style={styles.paragraph}>
// //         Privacy Policy
// //       </Text>
// //       <Text
// //         variant="titleMedium"
// //         style={styles.paragraph}
// //         onPress={handleLogout}
// //       >
// //         Logout
// //       </Text>
// //     </SafeAreaView>
// //   );

// //   return (
// //     <SafeAreaProvider>
// //       <DrawerLayoutAndroid
// //         ref={drawer}
// //         drawerWidth={300}
// //         renderNavigationView={navigationView}
// //       >
// //         <SafeAreaView style={styles.container}>
// //           <MaterialIcons
// //             name="menu"
// //             size={30}
// //             color="black"
// //             onPress={() => drawer.current.openDrawer()}
// //             style={styles.menuIcon}
// //           />
// //           <HomeLms greeting={greeting} userName={userName} />
// //         </SafeAreaView>
// //       </DrawerLayoutAndroid>
// //     </SafeAreaProvider>
// //   );
// // };

// // const HomeLms = ({ greeting, userName }) => {
// //   const navigation = useNavigation();
// //   const [showCategories, setShowCategories] = useState(false);
// //   const categories = [
// //     { name: "Courses", icon: "book", link: "CourseListLms" },
// //     { name: "My Subjects", icon: "subject" },
// //     { name: "My Classes", icon: "group" },
// //     { name: "Attendance Report", icon: "check-circle" },
// //     { name: "Assignments", icon: "assignment" },
// //     { name: "Study Materials", icon: "folder-open" },
// //     { name: "Quizzes", icon: "quiz" },
// //     { name: "Notifications", icon: "notifications" },
// //     { name: "Profile", icon: "person" },
// //   ];

// //   const toggleCategories = () => {
// //     setShowCategories((prev) => !prev);
// //   };

// //   return (
// //     <View style={styles.homeContainer}>
// //       <Card style={styles.card}>
// //         <Card.Content>
// //           <View style={styles.profileContainer}>
// //             <Image
// //               source={{
// //                 uri: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
// //               }} // Replace with a valid image URL
// //               style={styles.profilePic}
// //             />
// //             <View>
// //               <Text variant="headlineSmall" style={styles.greeting}>
// //                 {greeting}
// //               </Text>
// //               <Text variant="bodyLarge" style={styles.userName}>
// //                 {userName}
// //               </Text>
// //             </View>
// //           </View>
// //         </Card.Content>
// //       </Card>
// //       <ScrollView>
// //         <View style={styles.categoriesContainer}>
// //           <View style={styles.categoriesHeader}>
// //             <Text style={styles.categoriesTitle}>Categories</Text>
// //             <TouchableOpacity onPress={toggleCategories}>
// //               <Text style={styles.showAll}>
// //                 {showCategories ? "Hide" : "Show All"}
// //               </Text>
// //             </TouchableOpacity>
// //           </View>
// //           <View style={styles.categoriesRow}>
// //             {categories
// //               .slice(0, showCategories ? 9 : 6)
// //               .map((category, index) => (
// //                 <TouchableOpacity
// //                   key={index}
// //                   style={styles.categoryBox}
// //                   onPress={() =>
// //                     category.link ? navigation.navigate(category.link) : null
// //                   }
// //                 >
// //                   <MaterialIcons
// //                     name={category.icon}
// //                     size={30}
// //                     // color="#428ce2"
// //                     color="#FFC300"
// //                   />
// //                   <Text variant="labelMedium" style={styles.categoryText}>
// //                     {category.name}
// //                   </Text>
// //                 </TouchableOpacity>
// //               ))}
// //           </View>
// //         </View>
// //         {/* <View style={styles.categoriesContainer}>
// //           <View style={styles.categoriesHeader}>
// //             <Text style={styles.categoriesTitle}>Top Courses</Text>
// //           </View>
// //           {Array.from({ length: 8 }).map((_, index) => (
// //             <Card
// //               key={index}
// //               style={{
// //                 backgroundColor: "#fcfefa",
// //                 marginVertical: 10,
// //                 borderRadius: 10,
// //               }}
// //             >
// //               <Card.Title
// //                 title={`Course Title ${index + 1}`}
// //                 subtitle={`Course Subtitle ${index + 1}`}
// //                 left={(props) => <Avatar.Icon {...props} icon="folder" />}
// //               />
// //             </Card>
// //           ))}
// //         </View> */}
// //       </ScrollView>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// //   navigationContainer: {
// //     backgroundColor: "#fcfefa",
// //     paddingTop: 50,
// //   },
// //   appName: {
// //     fontWeight: "bold",
// //     textAlign: "center",
// //     marginBottom: 20,
// //     color: "#212640",
// //   },
// //   profileContainer: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   profilePic: {
// //     width: 100,
// //     height: 100,
// //     borderRadius: 30,
// //     marginRight: 16,
// //   },
// //   homeContainer: {
// //     flex: 1,
// //     backgroundColor: "#4b4d5c",
// //     justifyContent: "flex-start",
// //   },
// //   card: {
// //     backgroundColor: "#212640",
// //     borderBottomLeftRadius: 20,
// //     borderBottomRightRadius: 20,
// //     borderTopLeftRadius: 0,
// //     borderTopRightRadius: 0,
// //     padding: 10,
// //     width: "100%",
// //     maxWidth: 500,
// //     alignSelf: "center",
// //     marginTop: 0,
// //   },
// //   greeting: {
// //     color: "#4b4d5c",
// //     fontWeight: "bold",
// //     textAlign: "left",
// //   },
// //   userName: {
// //     color: "#fcfefa",
// //     textAlign: "left",
// //   },
// //   categoriesContainer: {
// //     marginTop: 20,
// //     marginHorizontal: 20,
// //   },
// //   categoriesHeader: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //   },
// //   categoriesTitle: {
// //     fontSize: 20,
// //     fontWeight: "bold",
// //     color: "#fcfefa",
// //   },
// //   showAll: {
// //     color: "#fcfefa",
// //     marginVertical: 10,
// //   },
// //   categoriesRow: {
// //     flexDirection: "row",
// //     flexWrap: "wrap",
// //     justifyContent: "space-between",
// //   },
// //   categoryBox: {
// //     backgroundColor: "#fcfefa",
// //     borderRadius: 10,
// //     padding: 20,
// //     flexBasis: "30%",
// //     margin: 5,
// //     alignItems: "center",
// //   },
// //   categoryText: {
// //     marginTop: 10,
// //     textAlign: "center",
// //   },
// //   paragraph: {
// //     padding: 16,
// //   },
// //   menuIcon: {
// //     padding: 10,
// //     backgroundColor: "#212640",
// //     color: "#fff",
// //   },
// // });

// // export default DrawerApp;

// import React, { useRef, useEffect, useState } from "react";
// import {
//   DrawerLayoutAndroid,
//   StyleSheet,
//   View,
//   Alert,
//   Image,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
// import { Card, Text, Divider } from "react-native-paper";
// import { MaterialIcons } from "@expo/vector-icons";
// import { useNavigation, useFocusEffect } from "@react-navigation/native";

// const DrawerApp = () => {
//   const navigation = useNavigation();
//   const drawer = useRef(null);
//   const [greeting, setGreeting] = useState("");
//   const userName = "Pooja Vasudev";

//   useEffect(() => {
//     const currentHour = new Date().getHours();

//     if (currentHour < 12) {
//       setGreeting("Good Morning, ☀️");
//     } else if (currentHour < 17) {
//       setGreeting("Good Afternoon, 🌞");
//     } else if (currentHour < 21) {
//       setGreeting("Good Evening, 🌆");
//     } else {
//       setGreeting("Good Night, 🌙");
//     }
//   }, []);

//   const handleLogout = () => {
//     Alert.alert("Logout Confirmation", "Are you sure you want to logout?", [
//       {
//         text: "Cancel",
//         style: "cancel",
//       },
//       {
//         text: "OK",
//         onPress: () => navigation.navigate("EntryPageLms"),
//       },
//     ]);
//   };

//   const navigationView = () => (
//     <SafeAreaView style={[styles.container, styles.navigationContainer]}>
//       <Text variant="headlineMedium" style={styles.appName}>
//         LMS
//       </Text>
//       <Divider />
//       <Text variant="titleMedium" style={styles.paragraph}>
//         Account Information
//       </Text>
//       <Text variant="titleMedium" style={styles.paragraph}>
//         Notifications
//       </Text>
//       <Text variant="titleMedium" style={styles.paragraph}>
//         Privacy Policy
//       </Text>
//       <Text
//         variant="titleMedium"
//         style={styles.paragraph}
//         onPress={handleLogout}
//       >
//         Logout
//       </Text>
//     </SafeAreaView>
//   );

//   useFocusEffect(
//     React.useCallback(() => {
//       // Close the drawer when the screen is focused
//       const closeDrawer = () => {
//         if (drawer.current) {
//           drawer.current.closeDrawer();
//         }
//       };

//       const unsubscribe = navigation.addListener("focus", closeDrawer);

//       return unsubscribe; // Cleanup subscription
//     }, [navigation])
//   );

//   return (
//     <SafeAreaProvider>
//       <DrawerLayoutAndroid
//         ref={drawer}
//         drawerWidth={300}
//         renderNavigationView={navigationView}
//       >
//         <SafeAreaView style={styles.container}>
//           <MaterialIcons
//             name="menu"
//             size={30}
//             color="black"
//             onPress={() => drawer.current.openDrawer()}
//             style={styles.menuIcon}
//           />
//           <HomeLms greeting={greeting} userName={userName} />
//         </SafeAreaView>
//       </DrawerLayoutAndroid>
//     </SafeAreaProvider>
//   );
// };

// const HomeLms = ({ greeting, userName }) => {
//   const navigation = useNavigation();
//   const [showCategories, setShowCategories] = useState(false);
//   const categories = [
//     { name: "Courses", icon: "book", link: "CourseListLms" },
//     { name: "My Subjects", icon: "subject" },
//     { name: "My Classes", icon: "group" },
//     { name: "Attendance Report", icon: "check-circle" },
//     { name: "Assignments", icon: "assignment" },
//     { name: "Study Materials", icon: "folder-open" },
//     { name: "Quizzes", icon: "quiz" },
//     { name: "Notifications", icon: "notifications" },
//     { name: "Profile", icon: "person" },
//   ];

//   const toggleCategories = () => {
//     setShowCategories((prev) => !prev);
//   };

//   return (
//     <View style={styles.homeContainer}>
//       <Card style={styles.card}>
//         <Card.Content>
//           <View style={styles.profileContainer}>
//             <Image
//               source={{
//                 uri: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//               }}
//               style={styles.profilePic}
//             />
//             <View>
//               <Text variant="headlineSmall" style={styles.greeting}>
//                 {greeting}
//               </Text>
//               <Text variant="bodyLarge" style={styles.userName}>
//                 {userName}
//               </Text>
//             </View>
//           </View>
//         </Card.Content>
//       </Card>
//       <ScrollView>
//         <View style={styles.categoriesContainer}>
//           <View style={styles.categoriesHeader}>
//             <Text style={styles.categoriesTitle}>Categories</Text>
//             <TouchableOpacity onPress={toggleCategories}>
//               <Text style={styles.showAll}>
//                 {showCategories ? "Hide" : "Show All"}
//               </Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.categoriesRow}>
//             {categories
//               .slice(0, showCategories ? 9 : 6)
//               .map((category, index) => (
//                 <TouchableOpacity
//                   key={index}
//                   style={styles.categoryBox}
//                   onPress={() =>
//                     category.link ? navigation.navigate(category.link) : null
//                   }
//                 >
//                   <MaterialIcons
//                     name={category.icon}
//                     size={30}
//                     color="#FFC300"
//                   />
//                   <Text variant="labelMedium" style={styles.categoryText}>
//                     {category.name}
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   navigationContainer: {
//     backgroundColor: "#fcfefa",
//     paddingTop: 50,
//   },
//   appName: {
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 20,
//     color: "#212640",
//   },
//   profileContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   profilePic: {
//     width: 100,
//     height: 100,
//     borderRadius: 30,
//     marginRight: 16,
//   },
//   homeContainer: {
//     flex: 1,
//     backgroundColor: "#4b4d5c",
//     justifyContent: "flex-start",
//   },
//   card: {
//     backgroundColor: "#212640",
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     borderTopLeftRadius: 0,
//     borderTopRightRadius: 0,
//     padding: 10,
//     width: "100%",
//     maxWidth: 500,
//     alignSelf: "center",
//     marginTop: 0,
//   },
//   greeting: {
//     color: "#4b4d5c",
//     fontWeight: "bold",
//     textAlign: "left",
//   },
//   userName: {
//     color: "#fcfefa",
//     textAlign: "left",
//   },
//   categoriesContainer: {
//     marginTop: 20,
//     marginHorizontal: 20,
//   },
//   categoriesHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   categoriesTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#fcfefa",
//   },
//   showAll: {
//     color: "#fcfefa",
//     marginVertical: 10,
//   },
//   categoriesRow: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },
//   categoryBox: {
//     backgroundColor: "#fcfefa",
//     borderRadius: 10,
//     padding: 20,
//     flexBasis: "30%",
//     margin: 5,
//     alignItems: "center",
//   },
//   categoryText: {
//     marginTop: 10,
//     textAlign: "center",
//   },
//   paragraph: {
//     padding: 16,
//   },
//   menuIcon: {
//     padding: 10,
//     backgroundColor: "#212640",
//     color: "#fff",
//   },
// });

// export default DrawerApp;

import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Alert, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, Text } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeLms = () => {
  const navigation = useNavigation();
  const [greeting, setGreeting] = useState("Good Morning, ☀️"); // Default greeting
  const userName = "Pooja Vasudev";

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) setGreeting("Good Morning, ☀️");
    else if (currentHour < 17) setGreeting("Good Afternoon, 🌞");
    else if (currentHour < 21) setGreeting("Good Evening, 🌆");
    else setGreeting("Good Night, 🌙");
  }, []);

  const handleLogout = () => {
    Alert.alert("Logout Confirmation", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "OK", onPress: () => navigation.navigate("EntryPageLms") },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <MaterialIcons
        name="menu"
        size={30}
        color="black"
        onPress={() => navigation.toggleDrawer()}
        style={styles.menuIcon}
      />
      <View style={styles.homeContainer}>
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.profileContainer}>
              <Image
                source={{
                  uri: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                }}
                style={styles.profilePic}
              />
              <View>
                <Text variant="headlineSmall" style={styles.greeting}>
                  {greeting}
                </Text>
                <Text variant="bodyLarge" style={styles.userName}>
                  {userName}
                </Text>
              </View>
            </View>
          </Card.Content>
        </Card>
        <ScrollView>
          {/* Add your category buttons or content here */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // Other styles...
});

export default HomeLms;
