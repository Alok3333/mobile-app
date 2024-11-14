// // // // // import * as React from "react";
// // // // // import { Dimensions, View, StyleSheet } from "react-native";
// // // // // import { Text, Button } from "react-native-paper";
// // // // // // import { useNavigation } from "@react-navigation/native";

// // // // // // Get screen height and width
// // // // // const screenHeight = Dimensions.get("window").height;
// // // // // const screenWidth = Dimensions.get("window").width;

// // // // // export default function EntryPageLms({ navigation }) {
// // // // //   // const navigation = useNavigation();

// // // // //   return (
// // // // //     <View style={styles.container}>
// // // // //       <View style={styles.header}>
// // // // //         {/* <Text variant="displayLarge" style={styles.welcomeText}>
// // // // //           Hi!
// // // // //         </Text>
// // // // //         <Text variant="displayLarge" style={styles.welcomeText}>
// // // // //           Welcome
// // // // //         </Text> */}
// // // // //         {/* <Text variant="labelSmall" style={styles.waitText}>
// // // // //           Your learning adventure awaits! Tap here to log in to LMS.
// // // // //           I'm waiting for you. Please click here to log in to LMS.
// // // // //         </Text> */}
// // // // //       </View>
// // // // //       <View style={styles.logo}>
// // // // //         <View style={styles.logoBox}>
// // // // //           <Text variant="displayMedium" style={styles.logoText}>
// // // // //             LMS
// // // // //           </Text>
// // // // //           <Text variant="labelSmall" style={styles.logoText2}>
// // // // //             Learning Management System
// // // // //           </Text>
// // // // //         </View>
// // // // //       </View>
// // // // //       <View style={styles.card}>
// // // // //         {/* Login Button */}
// // // // //         <Button
// // // // //           mode="contained"
// // // // //           contentStyle={{ height: 60 }}
// // // // //           style={styles.button}
// // // // //           onPress={() => navigation.navigate("LoginLmsScreen")}
// // // // //         >
// // // // //           <Text variant="titleLarge" style={{ color: "#fff" }}>
// // // // //             Login
// // // // //           </Text>
// // // // //         </Button>
// // // // //       </View>
// // // // //     </View>
// // // // //   );
// // // // // }

// // // // // const styles = StyleSheet.create({
// // // // //   container: {
// // // // //     flex: 1,
// // // // //     backgroundColor: "#fcfefa",
// // // // //     justifyContent: "flex-start", // Align items at the top
// // // // //   },
// // // // //   header: {
// // // // //     marginTop: 40,
// // // // //     paddingHorizontal: 20,
// // // // //   },
// // // // //   logo: {
// // // // //     alignItems: "center", // Align logo to the right
// // // // //     paddingHorizontal: 20,
// // // // //     marginVertical: 50, // Add some vertical space
// // // // //   },
// // // // //   logoBox: {
// // // // //     // backgroundColor: "#212640", // Box color
// // // // //     padding: 10, // Padding around the text
// // // // //     borderRadius: 10, // Rounded corners
// // // // //     justifyContent: "center", // Align text to the bottom
// // // // //     alignItems: "center", // Align text to the right
// // // // //     width: 300, // Width of the box
// // // // //     height: 300, // Height of the box
// // // // //   },
// // // // //   logoText: {
// // // // //     color: "#428ce2", // Text color
// // // // //     // fontSize: 24, // Font size
// // // // //     fontWeight: "bold",
// // // // //     textTransform: "uppercase", // Make letters uppercase
// // // // //   },
// // // // //   logoText2: {
// // // // //     color: "#4b4d5c",
// // // // //     fontWeight: "bold",
// // // // //     textTransform: "uppercase", // Make letters uppercase
// // // // //   },
// // // // //   card: {
// // // // //     paddingVertical: 50,
// // // // //     backgroundColor: "#212640",
// // // // //     borderTopLeftRadius: 50,
// // // // //     borderTopRightRadius: 50,
// // // // //     justifyContent: "center",
// // // // //     alignItems: "center",
// // // // //     width: "100%",
// // // // //     marginTop: "auto", // Push card to the bottom
// // // // //   },
// // // // //   button: {
// // // // //     width: screenWidth * 0.5, // 50% of the screen width
// // // // //     backgroundColor: "#4942cd",
// // // // //     justifyContent: "center",
// // // // //     alignItems: "center",
// // // // //     borderRadius: 20,
// // // // //     marginVertical: 100,
// // // // //   },
// // // // //   welcomeText: {
// // // // //     color: "#212640",
// // // // //     marginBottom: 0,
// // // // //     textAlign: "left",
// // // // //     fontWeight: "bold",
// // // // //   },
// // // // //   waitText: {
// // // // //     color: "#4b4d5c",
// // // // //     // textAlign: "center",
// // // // //   },
// // // // //   lmsText: {
// // // // //     color: "#4942cd",
// // // // //     textAlign: "center",
// // // // //   },
// // // // // });

// // // // // // some content => => => => => => => => => => => => => =>
// // // // // // "Ready to dive in? Click here to access your LMS!"
// // // // // // "Join us on your learning journey! Click here to log in to LMS."
// // // // // // "Your learning adventure awaits! Tap here to log in to LMS."
// // // // // // "Unlock your potential! Click here to enter the LMS."
// // // // // // => => => => => => => => => => => => => => => => => => => => =>

// // // import * as React from "react";
// // // import { Dimensions, View, StyleSheet, Animated, Easing } from "react-native";
// // // import { Text, Button } from "react-native-paper";
// // // import { useFocusEffect } from "@react-navigation/native";

// // // // Get screen height and width
// // // const screenHeight = Dimensions.get("window").height;
// // // const screenWidth = Dimensions.get("window").width;

// // // export default function EntryPageLms({ navigation }) {
// // //   const fadeAnim = React.useRef(new Animated.Value(0)).current;
// // //   const bounceAnim = React.useRef(new Animated.Value(0)).current;
// // //   const shimmerAnim = React.useRef(new Animated.Value(1)).current;
// // //   const pulseAnim = React.useRef(new Animated.Value(1)).current;
// // //   const slideUpAnim = React.useRef(new Animated.Value(screenHeight)).current;

// // //   useFocusEffect(
// // //     React.useCallback(() => {
// // //       // Fade-in and bounce for logo
// // //       Animated.timing(fadeAnim, {
// // //         toValue: 1,
// // //         duration: 1000,
// // //         useNativeDriver: true,
// // //       }).start();

// // //       Animated.spring(bounceAnim, {
// // //         toValue: 1,
// // //         friction: 4,
// // //         tension: 80,
// // //         useNativeDriver: true,
// // //       }).start();

// // //       // Shimmer effect on logo
// // //       Animated.loop(
// // //         Animated.sequence([
// // //           Animated.timing(shimmerAnim, {
// // //             toValue: 0.3,
// // //             duration: 800,
// // //             easing: Easing.inOut(Easing.ease),
// // //             useNativeDriver: true,
// // //           }),
// // //           Animated.timing(shimmerAnim, {
// // //             toValue: 1,
// // //             duration: 800,
// // //             easing: Easing.inOut(Easing.ease),
// // //             useNativeDriver: true,
// // //           }),
// // //         ])
// // //       ).start();

// // //       // Button pulse animation
// // //       Animated.loop(
// // //         Animated.sequence([
// // //           Animated.timing(pulseAnim, {
// // //             toValue: 1.1,
// // //             duration: 700,
// // //             easing: Easing.inOut(Easing.ease),
// // //             useNativeDriver: true,
// // //           }),
// // //           Animated.timing(pulseAnim, {
// // //             toValue: 1,
// // //             duration: 700,
// // //             easing: Easing.inOut(Easing.ease),
// // //             useNativeDriver: true,
// // //           }),
// // //         ])
// // //       ).start();

// // //       // Slide-up animation for the LMS card
// // //       Animated.spring(slideUpAnim, {
// // //         toValue: 0,
// // //         friction: 6,
// // //         tension: 70,
// // //         useNativeDriver: true,
// // //       }).start();
// // //     }, [])
// // //   );

// // //   return (
// // //     <View style={styles.container}>
// // //       <View style={styles.header}>
// // //         <Animated.View
// // //           style={[
// // //             styles.logoBox,
// // //             { opacity: fadeAnim, transform: [{ scale: bounceAnim }] },
// // //           ]}
// // //         >
// // //           <Animated.Text
// // //             style={[styles.logoText, { opacity: shimmerAnim }]}
// // //           >
// // //             LMS
// // //           </Animated.Text>
// // //           <Text variant="labelSmall" style={styles.logoText2}>
// // //             Learning Management System
// // //           </Text>
// // //         </Animated.View>
// // //       </View>

// // //       <Animated.View style={[styles.card, { transform: [{ translateY: slideUpAnim }] }]}>
// // //         <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
// // //           <Button
// // //             mode="contained"
// // //             contentStyle={{ height: 60 }}
// // //             style={styles.button}
// // //             onPress={() => navigation.navigate("LoginLmsScreen")}
// // //           >
// // //             <Text variant="titleLarge" style={{ color: "#fff" }}>
// // //               Login
// // //             </Text>
// // //           </Button>
// // //         </Animated.View>
// // //       </Animated.View>
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: "#f0f4f8", // Soft background color
// // //     justifyContent: "space-around",
// // //   },
// // //   header: {
// // //     alignItems: "center",
// // //     marginTop: 50,
// // //   },
// // //   logoBox: {
// // //     padding: 20,
// // //     borderRadius: 20,
// // //     backgroundColor: "#ffffff",
// // //     shadowColor: "#000",
// // //     shadowOffset: { width: 0, height: 10 },
// // //     shadowOpacity: 0.4,
// // //     shadowRadius: 20,
// // //     elevation: 15,
// // //     alignItems: "center",
// // //     width: screenWidth * 0.7,
// // //   },
// // //   logoText: {
// // //     color: "#428ce2",
// // //     fontWeight: "bold",
// // //     textTransform: "uppercase",
// // //     fontSize: 28,
// // //   },
// // //   logoText2: {
// // //     color: "#4b4d5c",
// // //     fontWeight: "bold",
// // //     textTransform: "uppercase",
// // //     fontSize: 14,
// // //   },
// // //   card: {
// // //     backgroundColor: "#212640",
// // //     borderTopLeftRadius: 50,
// // //     borderTopRightRadius: 50,
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //     width: "100%",
// // //     paddingVertical: 120,
// // //     position: "absolute",
// // //     bottom: 0,
// // //   },
// // //   button: {
// // //     width: screenWidth * 0.6,
// // //     backgroundColor: "#4942cd",
// // //     borderRadius: 25,
// // //   },
// // // });

// // import * as React from "react";
// // import { Dimensions, View, StyleSheet, Animated, Easing, ImageBackground } from "react-native";
// // import { Text, Button } from "react-native-paper";
// // import { useFocusEffect } from "@react-navigation/native";

// // // Get screen height and width
// // const screenHeight = Dimensions.get("window").height;
// // const screenWidth = Dimensions.get("window").width;

// // export default function EntryPageLms({ navigation }) {
// //   const fadeAnim = React.useRef(new Animated.Value(0)).current;
// //   const bounceAnim = React.useRef(new Animated.Value(0)).current;
// //   const shimmerAnim = React.useRef(new Animated.Value(1)).current;
// //   const pulseAnim = React.useRef(new Animated.Value(1)).current;
// //   const slideUpAnim = React.useRef(new Animated.Value(screenHeight)).current;

// //   useFocusEffect(
// //     React.useCallback(() => {
// //       // Fade-in and bounce for logo
// //       Animated.timing(fadeAnim, {
// //         toValue: 1,
// //         duration: 1000,
// //         useNativeDriver: true,
// //       }).start();

// //       Animated.spring(bounceAnim, {
// //         toValue: 1,
// //         friction: 4,
// //         tension: 80,
// //         useNativeDriver: true,
// //       }).start();

// //       // Shimmer effect on logo
// //       Animated.loop(
// //         Animated.sequence([
// //           Animated.timing(shimmerAnim, {
// //             toValue: 0.3,
// //             duration: 800,
// //             easing: Easing.inOut(Easing.ease),
// //             useNativeDriver: true,
// //           }),
// //           Animated.timing(shimmerAnim, {
// //             toValue: 1,
// //             duration: 800,
// //             easing: Easing.inOut(Easing.ease),
// //             useNativeDriver: true,
// //           }),
// //         ])
// //       ).start();

// //       // Button pulse animation
// //       Animated.loop(
// //         Animated.sequence([
// //           Animated.timing(pulseAnim, {
// //             toValue: 1.1,
// //             duration: 700,
// //             easing: Easing.inOut(Easing.ease),
// //             useNativeDriver: true,
// //           }),
// //           Animated.timing(pulseAnim, {
// //             toValue: 1,
// //             duration: 700,
// //             easing: Easing.inOut(Easing.ease),
// //             useNativeDriver: true,
// //           }),
// //         ])
// //       ).start();

// //       // Slide-up animation for the LMS card
// //       Animated.spring(slideUpAnim, {
// //         toValue: 0,
// //         friction: 6,
// //         tension: 70,
// //         useNativeDriver: true,
// //       }).start();
// //     }, [])
// //   );

// //   return (
// //     <ImageBackground
// //       source={{ uri: 'https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-29-3258-Pink%20And%20Yellow%20Illustrated%20Man%20Motivational%20Phone%20Wallpaper%20.png' }} // Replace with your image URL
// //       style={styles.background}
// //       resizeMode="cover" // Ensures the image covers the entire background
// //     >
// //       <View style={styles.container}>
// //         {/* <View style={styles.header}>
// //           <Animated.View
// //             style={[
// //               styles.logoBox,
// //               { opacity: fadeAnim, transform: [{ scale: bounceAnim }] },
// //             ]}
// //           >
// //             <Animated.Text
// //               style={[styles.logoText, { opacity: shimmerAnim }]}
// //             >
// //               LMS
// //             </Animated.Text>
// //             <Text variant="labelSmall" style={styles.logoText2}>
// //               Learning Management System
// //             </Text>
// //           </Animated.View>
// //         </View> */}

// //         <Animated.View style={[styles.card, { transform: [{ translateY: slideUpAnim }] }]}>
// //           <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
// //             <Button
// //               mode="contained"
// //               contentStyle={{ height: 60 }}
// //               style={styles.button}
// //               onPress={() => navigation.navigate("LoginLmsScreen")}
// //             >
// //               <Text variant="titleLarge" style={{ color: "#fff" }}>
// //                 Login
// //               </Text>
// //             </Button>
// //           </Animated.View>
// //         </Animated.View>
// //       </View>
// //     </ImageBackground>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   background: {
// //     flex: 1,
// //     justifyContent: "center",
// //   },
// //   container: {
// //     flex: 1,
// //     // backgroundColor: "rgba(240, 244, 248, 0.8)", // Slightly transparent overlay
// //     justifyContent: "space-around",
// //   },
// //   header: {
// //     alignItems: "center",
// //     marginTop: 50,
// //   },
// //   logoBox: {
// //     padding: 20,
// //     borderRadius: 20,
// //     backgroundColor: "#ffffff",
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 10 },
// //     shadowOpacity: 0.4,
// //     shadowRadius: 20,
// //     elevation: 15,
// //     alignItems: "center",
// //     width: screenWidth * 0.7,
// //   },
// //   logoText: {
// //     color: "#428ce2",
// //     fontWeight: "bold",
// //     textTransform: "uppercase",
// //     fontSize: 28,
// //   },
// //   logoText2: {
// //     color: "#4b4d5c",
// //     fontWeight: "bold",
// //     textTransform: "uppercase",
// //     fontSize: 14,
// //   },
// //   card: {
// //     backgroundColor: "#212640",
// //     borderTopLeftRadius: 50,
// //     borderTopRightRadius: 50,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     width: "100%",
// //     paddingVertical: 36,
// //     position: "absolute",
// //     bottom: 0,
// //   },
// //   button: {
// //     width: screenWidth * 0.6,
// //     backgroundColor: "#4942cd",
// //     borderRadius: 25,
// //   },
// // });

// import * as React from "react";
// import {
//   Dimensions,
//   View,
//   StyleSheet,
//   Animated,
//   Easing,
//   ImageBackground,
// } from "react-native";
// import { Text, Button } from "react-native-paper";
// import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient
// import { useFocusEffect } from "@react-navigation/native";

// // Get screen height and width
// const screenHeight = Dimensions.get("window").height;
// const screenWidth = Dimensions.get("window").width;

// export default function EntryPageLms({ navigation }) {
//   const fadeAnim = React.useRef(new Animated.Value(0)).current;
//   const bounceAnim = React.useRef(new Animated.Value(0)).current;
//   const shimmerAnim = React.useRef(new Animated.Value(1)).current;
//   const pulseAnim = React.useRef(new Animated.Value(1)).current;
//   const slideUpAnim = React.useRef(new Animated.Value(screenHeight)).current;

//   useFocusEffect(
//     React.useCallback(() => {
//       // Fade-in and bounce for logo
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 1000,
//         useNativeDriver: true,
//       }).start();

//       Animated.spring(bounceAnim, {
//         toValue: 1,
//         friction: 4,
//         tension: 80,
//         useNativeDriver: true,
//       }).start();

//       // Shimmer effect on logo
//       Animated.loop(
//         Animated.sequence([
//           Animated.timing(shimmerAnim, {
//             toValue: 0.3,
//             duration: 800,
//             easing: Easing.inOut(Easing.ease),
//             useNativeDriver: true,
//           }),
//           Animated.timing(shimmerAnim, {
//             toValue: 1,
//             duration: 800,
//             easing: Easing.inOut(Easing.ease),
//             useNativeDriver: true,
//           }),
//         ])
//       ).start();

//       // Button pulse animation
//       Animated.loop(
//         Animated.sequence([
//           Animated.timing(pulseAnim, {
//             toValue: 1.1,
//             duration: 700,
//             easing: Easing.inOut(Easing.ease),
//             useNativeDriver: true,
//           }),
//           Animated.timing(pulseAnim, {
//             toValue: 1,
//             duration: 700,
//             easing: Easing.inOut(Easing.ease),
//             useNativeDriver: true,
//           }),
//         ])
//       ).start();

//       // Slide-up animation for the LMS card
//       Animated.spring(slideUpAnim, {
//         toValue: 0,
//         friction: 6,
//         tension: 70,
//         useNativeDriver: true,
//       }).start();
//     }, [])
//   );

//   return (
//     <ImageBackground
//       source={{
//         uri: "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-29-4223-Pink%20And%20Yellow%20Illustrated%20Man%20Motivational%20Phone%20Wallpaper%20%20(1).png",
//       }} // Replace with your image URL
//       style={styles.background}
//       resizeMode="cover"
//     >
//       <View style={styles.container}>
//         <Animated.View
//           style={[styles.card, { transform: [{ translateY: slideUpAnim }] }]}
//         >
//           <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
//             <LinearGradient
//               colors={[
//                 "#010219",
//                 "#010219",
//                 "#010219",
//                 "#010219",
//                 "#003491",
//                 "#02bcb5",
//               ]}
//               style={styles.gradientButton}
//             >
//               <Button
//                 mode="contained"
//                 contentStyle={{ height: 60 }}
//                 style={styles.button}
//                 onPress={() => navigation.navigate("LoginLmsScreen")}
//               >
//                 <Text variant="titleLarge" style={{ color: "#fff" }}>
//                   Login
//                 </Text>
//               </Button>
//             </LinearGradient>
//           </Animated.View>
//         </Animated.View>
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   container: {
//     flex: 1,
//     justifyContent: "space-around",
//   },
//   card: {
//     backgroundColor: "#212640",
//     borderTopLeftRadius: 50,
//     borderTopRightRadius: 50,
//     justifyContent: "center",
//     alignItems: "center",
//     width: "100%",
//     paddingVertical: 36,
//     position: "absolute",
//     bottom: 0,
//   },
//   gradientButton: {
//     width: screenWidth * 0.6,
//     borderRadius: 25,
//   },
//   button: {
//     width: "100%",
//     backgroundColor: "transparent", // Ensure background is transparent
//   },
// });

import * as React from "react";
import {
  Dimensions,
  View,
  StyleSheet,
  Animated,
  Easing,
  ImageBackground,
  Image, // Import Image
} from "react-native";
import { Text, Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient
import { useFocusEffect } from "@react-navigation/native";

// Get screen height and width
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export default function EntryPageLms({ navigation }) {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const bounceAnim = React.useRef(new Animated.Value(0)).current;
  const shimmerAnim = React.useRef(new Animated.Value(1)).current;
  const pulseAnim = React.useRef(new Animated.Value(1)).current;
  const slideUpAnim = React.useRef(new Animated.Value(screenHeight)).current;

  useFocusEffect(
    React.useCallback(() => {
      // Fade-in and bounce for logo
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();

      Animated.spring(bounceAnim, {
        toValue: 1,
        friction: 4,
        tension: 80,
        useNativeDriver: true,
      }).start();

      // Shimmer effect on logo
      Animated.loop(
        Animated.sequence([
          Animated.timing(shimmerAnim, {
            toValue: 0.3,
            duration: 800,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(shimmerAnim, {
            toValue: 1,
            duration: 800,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ])
      ).start();

      // Button pulse animation
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.1,
            duration: 700,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 700,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ])
      ).start();

      // Slide-up animation for the LMS card
      Animated.spring(slideUpAnim, {
        toValue: 0,
        friction: 6,
        tension: 70,
        useNativeDriver: true,
      }).start();
    }, [])
  );

  return (
    <ImageBackground
      source={{
        uri: "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-29-4223-Pink%20And%20Yellow%20Illustrated%20Man%20Motivational%20Phone%20Wallpaper%20%20(1).png",
      }} // Replace with your image URL
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Logo Image */}
        <Animated.View style={{ opacity: fadeAnim }}>
          <Image
            source={{
              uri: "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/9-2024-11-2048-FullLogo_Transparent_NoBuffer.png", // Replace with your logo URL
            }}
            style={styles.logo}
            resizeMode="contain"
          />
        </Animated.View>
        <Animated.View
          style={[styles.card, { transform: [{ translateY: slideUpAnim }] }]}
        >
          <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
            <LinearGradient
              colors={[
                "#010219",
                "#010219",
                "#010219",
                "#010219",
                "#003491",
                "#02bcb5",
              ]}
              style={styles.gradientButton}
            >
              <Button
                mode="contained"
                contentStyle={{ height: 60 }}
                style={styles.button}
                onPress={() => navigation.navigate("LoginLmsScreen")}
              >
                <Text variant="titleLarge" style={{ color: "#fff" }}>
                  Login
                </Text>
              </Button>
            </LinearGradient>
          </Animated.View>
        </Animated.View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center", // Center the content
  },
  logo: {
    width: screenWidth * 0.5, // Responsive width
    height: undefined,
    aspectRatio: 1, // Maintain aspect ratio
    marginBottom: 20, // Space below logo
  },
  card: {
    backgroundColor: "#212640",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 36,
    position: "absolute",
    bottom: 0,
  },
  gradientButton: {
    width: screenWidth * 0.6,
    borderRadius: 25,
  },
  button: {
    width: "100%",
    backgroundColor: "transparent", // Ensure background is transparent
  },
});
