// // // // // // // // import React, { useState } from 'react';
// // // // // // // // import { View, Text, Image, StyleSheet, PanResponder, Alert } from 'react-native';
// // // // // // // // import { Provider as PaperProvider, Button } from 'react-native-paper';

// // // // // // // // const onionParts = [
// // // // // // // //   { id: 1, name: 'Outer Skin', position: { top: 50, left: 20 }, dropped: false },
// // // // // // // //   { id: 2, name: 'Flesh', position: { top: 120, left: 50 }, dropped: false },
// // // // // // // //   { id: 3, name: 'Root', position: { top: 200, left: 60 }, dropped: false },
// // // // // // // // ];

// // // // // // // // const dropZones = [
// // // // // // // //   { name: 'Outer Skin', position: { top: 440, left: 120, width: 120, height: 40 } },
// // // // // // // //   { name: 'Flesh', position: { top: 120, left: 50, width: 200, height: 100 } },
// // // // // // // //   { name: 'Root', position: { top: 230, left: 60, width: 60, height: 30 } },
// // // // // // // // ];

// // // // // // // // const Syllabus = () => {
// // // // // // // //   const [positions, setPositions] = useState(onionParts);

// // // // // // // //   const panResponders = positions.map((part) => {
// // // // // // // //     const panResponder = PanResponder.create({
// // // // // // // //       onStartShouldSetPanResponder: () => true,
// // // // // // // //       onMoveShouldSetPanResponder: () => true,
// // // // // // // //       onPanResponderGrant: () => {
// // // // // // // //         setPositions(prev => prev.map(p => (p.id === part.id ? { ...p, isDragging: true } : p)));
// // // // // // // //       },
// // // // // // // //       onPanResponderMove: (evt, gestureState) => {
// // // // // // // //         setPositions(prev =>
// // // // // // // //           prev.map(p =>
// // // // // // // //             p.id === part.id
// // // // // // // //               ? {
// // // // // // // //                   ...p,
// // // // // // // //                   position: {
// // // // // // // //                     top: p.position.top + gestureState.dy,
// // // // // // // //                     left: p.position.left + gestureState.dx,
// // // // // // // //                   },
// // // // // // // //                 }
// // // // // // // //               : p
// // // // // // // //           )
// // // // // // // //         );
// // // // // // // //       },
// // // // // // // //       onPanResponderRelease: () => {
// // // // // // // //         const droppedOnZone = dropZones.find(zone => isOverlapping(part, zone));
// // // // // // // //         if (droppedOnZone) {
// // // // // // // //           // Snap to zone
// // // // // // // //           setPositions(prev =>
// // // // // // // //             prev.map(p =>
// // // // // // // //               p.id === part.id
// // // // // // // //                 ? { ...p, position: { ...droppedOnZone.position, dropped: true } }
// // // // // // // //                 : p
// // // // // // // //             )
// // // // // // // //           );
// // // // // // // //         } else {
// // // // // // // //           // Reset to original position if not dropped in a zone
// // // // // // // //           resetPosition(part.id);
// // // // // // // //         }
// // // // // // // //         setPositions(prev => prev.map(p => ({ ...p, isDragging: false })));
// // // // // // // //       },
// // // // // // // //     });

// // // // // // // //     return { part, panResponder };
// // // // // // // //   });

// // // // // // // //   const isOverlapping = (part, zone) => {
// // // // // // // //     return (
// // // // // // // //       part.position.left < zone.left + zone.width &&
// // // // // // // //       part.position.left + 100 > zone.left && // assuming draggable width
// // // // // // // //       part.position.top < zone.top + zone.height &&
// // // // // // // //       part.position.top + 30 > zone.top // assuming draggable height
// // // // // // // //     );
// // // // // // // //   };

// // // // // // // //   const resetPosition = (id) => {
// // // // // // // //     setPositions(prev =>
// // // // // // // //       prev.map(p => (p.id === id ? { ...p, position: onionParts.find(o => o.id === id).position } : p))
// // // // // // // //     );
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <PaperProvider>
// // // // // // // //       <View style={styles.container}>
// // // // // // // //         <Text style={styles.title}>Label the Onion Parts</Text>
// // // // // // // //         <Image
// // // // // // // //           source={{ uri: 'https://foto.wuestenigel.com/wp-content/uploads/api/purple-onion-and-garlic-with-pepper.jpeg' }} // Replace with actual onion image URL
// // // // // // // //           style={styles.onionImage}
// // // // // // // //         />
// // // // // // // //         {dropZones.map((zone, index) => (
// // // // // // // //           <View key={index} style={[styles.dropZone, zone.position]}>
// // // // // // // //             <Text style={styles.dropZoneText}>{zone.name}</Text>
// // // // // // // //           </View>
// // // // // // // //         ))}
// // // // // // // //         {positions.map(({ id, name, position }, index) => (
// // // // // // // //           <View
// // // // // // // //             key={id}
// // // // // // // //             style={[styles.label, { top: position.top, left: position.left }]}
// // // // // // // //             {...panResponders[index].panResponder.panHandlers}
// // // // // // // //           >
// // // // // // // //             <Text style={styles.draggable}>{name}</Text>
// // // // // // // //           </View>
// // // // // // // //         ))}
// // // // // // // //         <Button mode="contained" onPress={() => Alert.alert('Experiment Completed!')} style={styles.button}>
// // // // // // // //           Finish Experiment
// // // // // // // //         </Button>
// // // // // // // //       </View>
// // // // // // // //     </PaperProvider>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // const styles = StyleSheet.create({
// // // // // // // //   container: {
// // // // // // // //     flex: 1,
// // // // // // // //     justifyContent: 'center',
// // // // // // // //     alignItems: 'center',
// // // // // // // //     padding: 20,
// // // // // // // //     backgroundColor: '#f9f9f9',
// // // // // // // //   },
// // // // // // // //   title: {
// // // // // // // //     fontSize: 24,
// // // // // // // //     fontWeight: 'bold',
// // // // // // // //     marginBottom: 20,
// // // // // // // //     textAlign: 'center',
// // // // // // // //   },
// // // // // // // //   onionImage: {
// // // // // // // //     width: '100%',
// // // // // // // //     height: 300,
// // // // // // // //     resizeMode: 'contain',
// // // // // // // //     position: 'absolute',
// // // // // // // //     zIndex: 1, // Ensures the image is below the drop zones
// // // // // // // //   },
// // // // // // // //   label: {
// // // // // // // //     position: 'absolute',
// // // // // // // //     zIndex: 2, // Ensures labels are above the image
// // // // // // // //   },
// // // // // // // //   draggable: {
// // // // // // // //     padding: 10,
// // // // // // // //     backgroundColor: '#007BFF',
// // // // // // // //     color: '#fff',
// // // // // // // //     borderRadius: 5,
// // // // // // // //     textAlign: 'center',
// // // // // // // //   },
// // // // // // // //   dropZone: {
// // // // // // // //     position: 'absolute',
// // // // // // // //     borderColor: 'transparent',
// // // // // // // //     borderWidth: 1,
// // // // // // // //     opacity: 0.5,
// // // // // // // //     backgroundColor: 'rgba(255, 255, 255, 0.7)',
// // // // // // // //     justifyContent: 'center',
// // // // // // // //     alignItems: 'center',
// // // // // // // //     borderRadius: 5,
// // // // // // // //     zIndex: 3, // Ensures drop zones are above the image and labels
// // // // // // // //   },
// // // // // // // //   dropZoneText: {
// // // // // // // //     textAlign: 'center',
// // // // // // // //     color: '#000',
// // // // // // // //   },
// // // // // // // //   button: {
// // // // // // // //     marginTop: 20,
// // // // // // // //   },
// // // // // // // // });

// // // // // // // // export default Syllabus;

// // // // // ////////////////////// first expeiment class 6th cbse board

// Class 6th CBSE science

import React, { useState } from "react";
import { View, Image, StyleSheet, Alert, TextInput } from "react-native";
import { Provider as PaperProvider, Button, Text } from "react-native-paper";

const onionParts = [
  { id: 1, position: { top: "0%", left: "10%" } }, // Outer Skin
  { id: 2, position: { top: "45%", left: "40%" } }, // Flesh2
  { id: 3, position: { top: "11%", left: "72%" } }, // Flesh4
  { id: 4, position: { top: "82%", left: "53%" } }, // Root
];

const Syllabus = () => {
  const [answers, setAnswers] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
  });

  const checkAnswers = () => {
    const correctAnswers = ["foliar stem", "bulb scale", "tunic", "root"]; // Correct answers
    const userAnswers = Object.values(answers).map((answer) =>
      answer.trim().toLowerCase()
    ); // Convert answers to lowercase

    const isCorrect = userAnswers.every(
      (answer, index) => answer === correctAnswers[index]
    );

    if (isCorrect) {
      Alert.alert("Correct!", "All answers are correct!");
      setAnswers({ 1: "", 2: "", 3: "", 4: "" });
    } else {
      Alert.alert("Try Again!", "Some answers are incorrect.");
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text variant="headlineLarge" style={styles.title}>
          Food - Label the Onion Parts
        </Text>
        <Text variant="titleMedium" style={styles.instruction}>
          Choose the correct word for each part of the onion and write it in the
          corresponding box:
        </Text>
        <Text style={styles.hint}>
          Tunic, Bulb Scale (fleshy modified leaves), Root, Foliar stem
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/11-2024-7-330-purple-onion.png",
            }}
            style={styles.onionImage}
          />
          {onionParts.map((part) => (
            <View
              key={part.id}
              style={[
                styles.dot,
                { top: part.position.top, left: part.position.left },
              ]}
            >
              <TextInput
                style={styles.input}
                placeholder={`Enter ${part.id}`}
                value={answers[part.id]}
                onChangeText={
                  (text) =>
                    setAnswers((prev) => ({
                      ...prev,
                      [part.id]: text.toLowerCase(),
                    })) // Convert input to lowercase
                }
              />
            </View>
          ))}
        </View>
        <Button mode="contained" onPress={checkAnswers} style={styles.button}>
          Check Answers
        </Button>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
  },
  instruction: {
    textAlign: "center",
    marginBottom: 10,
  },
  hint: {
    marginHorizontal: 10,
    marginVertical: 20,
    color: "blue",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    alignItems: "center",
  },
  onionImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  dot: {
    position: "absolute",
    alignItems: "center",
    zIndex: 2,
  },
  input: {
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
    width: 120,
    marginTop: 5,
  },
  button: {
    marginTop: 20,
  },
});

export default Syllabus;

// // // // import React, { useState } from "react";
// // // // import { View, Text, StyleSheet, Alert } from "react-native";
// // // // import { Provider as PaperProvider, Button } from "react-native-paper";
// // // // import Slider from '@react-native-community/slider';

// // // // const Syllabus = () => {
// // // //   const [force, setForce] = useState(0);
// // // //   const [mass, setMass] = useState(1);
// // // //   const [acceleration, setAcceleration] = useState(0);

// // // //   const calculateAcceleration = () => {
// // // //     const acc = force / mass; // F = m * a => a = F/m
// // // //     setAcceleration(acc);
// // // //     Alert.alert(
// // // //       "Result",
// // // //       `Applied Force: ${force} N\nMass: ${mass} kg\nAcceleration: ${acc.toFixed(2)} m/s²`
// // // //     );
// // // //   };

// // // //   return (
// // // //     <PaperProvider>
// // // //       <View style={styles.container}>
// // // //         <Text style={styles.title}>Force and Newton's Laws Experiment</Text>
// // // //         <Text style={styles.description}>
// // // //           Use the slider to apply force and observe the acceleration of the object.
// // // //         </Text>

// // // //         <View style={styles.sliderContainer}>
// // // //           <Text>Applied Force: {force} N</Text>
// // // //           <Slider
// // // //             value={force}
// // // //             minimumValue={0}
// // // //             maximumValue={100}
// // // //             onValueChange={(value) => setForce(value)}
// // // //             style={styles.slider}
// // // //           />
// // // //         </View>

// // // //         <View style={styles.sliderContainer}>
// // // //           <Text>Mass of the object: {mass} kg</Text>
// // // //           <Slider
// // // //             value={mass}
// // // //             minimumValue={1}
// // // //             maximumValue={10}
// // // //             onValueChange={(value) => setMass(value)}
// // // //             style={styles.slider}
// // // //           />
// // // //         </View>

// // // //         <Button mode="contained" onPress={calculateAcceleration} style={styles.button}>
// // // //           Calculate Acceleration
// // // //         </Button>

// // // //         {acceleration > 0 && (
// // // //           <View style={styles.resultContainer}>
// // // //             <Text style={styles.resultText}>
// // // //               Acceleration: {acceleration.toFixed(2)} m/s²
// // // //             </Text>
// // // //           </View>
// // // //         )}
// // // //       </View>
// // // //     </PaperProvider>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     padding: 20,
// // // //     backgroundColor: "#f9f9f9",
// // // //   },
// // // //   title: {
// // // //     fontSize: 24,
// // // //     fontWeight: "bold",
// // // //     marginBottom: 20,
// // // //     textAlign: "center",
// // // //   },
// // // //   description: {
// // // //     textAlign: "center",
// // // //     marginBottom: 20,
// // // //   },
// // // //   sliderContainer: {
// // // //     width: "100%",
// // // //     alignItems: "center",
// // // //     marginVertical: 10,
// // // //   },
// // // //   slider: {
// // // //     width: "80%",
// // // //   },
// // // //   button: {
// // // //     marginTop: 20,
// // // //   },
// // // //   resultContainer: {
// // // //     marginTop: 20,
// // // //     padding: 10,
// // // //     borderColor: "#ccc",
// // // //     borderWidth: 1,
// // // //     borderRadius: 5,
// // // //   },
// // // //   resultText: {
// // // //     fontSize: 18,
// // // //   },
// // // // });

// // // // export default Syllabus;

// // // ////////////////////////////////////// Motion, Force and Work(Newton’s laws) class 9th

// // import React, { useState } from "react";
// // import {
// //   View,
// //   StyleSheet,
// //   Alert,
// //   Image,
// //   TouchableOpacity,
// // } from "react-native";
// // import { Provider as PaperProvider, Button, Text } from "react-native-paper";
// // import * as Animatable from "react-native-animatable";

// // const Syllabus = () => {
// //   const [force, setForce] = useState(0);
// //   const [mass, setMass] = useState(1);
// //   const [acceleration, setAcceleration] = useState(0);

// //   const calculateAcceleration = () => {
// //     const acc = force / mass; // F = m * a => a = F/m
// //     setAcceleration(acc);
// //     Alert.alert(
// //       "Result",
// //       `Applied Force: ${force} N\nMass: ${mass} kg\nAcceleration: ${acc.toFixed(
// //         2
// //       )} m/s²`
// //     );
// //   };

// //   const animateObject = () => {
// //     if (force > 0) {
// //       return (
// //         <Animatable.Image
// //           source={{
// //             uri: "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/11-2024-4-3525-Newtons_cradle_3_ball_swing_5_ball_system_cropped.gif",
// //           }}
// //           style={styles.animatedObject}
// //           animation="bounceIn"
// //           iterationCount="infinite"
// //           direction="alternate"
// //         />
// //       );
// //     }
// //   };

// //   return (
// //     <PaperProvider>
// //       <View style={styles.container}>
// //         <Text variant="headlineLarge" style={styles.title}>Force and Newton's Laws Experiment</Text>
// //         <Text style={styles.description}>
// //           Use the buttons to apply force and observe the object's acceleration.
// //         </Text>

// //         <View style={styles.forceContainer}>
// //           <Button
// //             mode="outlined"
// //             onPress={() => setForce((prev) => Math.max(prev - 1, 0))}
// //           >
// //             -
// //           </Button>
// //           <Text>Applied Force: {force} N</Text>
// //           <Button mode="outlined" onPress={() => setForce((prev) => prev + 1)}>
// //             +
// //           </Button>
// //         </View>

// //         <View style={styles.massContainer}>
// //           <Button
// //             mode="outlined"
// //             onPress={() => setMass((prev) => Math.max(prev - 1, 1))}
// //           >
// //             -
// //           </Button>
// //           <Text>Mass of the object: {mass} kg</Text>
// //           <Button mode="outlined" onPress={() => setMass((prev) => prev + 1)}>
// //             +
// //           </Button>
// //         </View>

// //         <Button
// //           mode="contained"
// //           onPress={calculateAcceleration}
// //           style={styles.button}
// //         >
// //           Calculate Acceleration
// //         </Button>

// //         {animateObject()}

// //         {acceleration > 0 && (
// //           <View style={styles.resultContainer}>
// //             <Text style={styles.resultText}>
// //               Acceleration: {acceleration.toFixed(2)} m/s²
// //             </Text>
// //           </View>
// //         )}
// //       </View>
// //     </PaperProvider>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     padding: 20,
// //     backgroundColor: "#f9f9f9",
// //   },
// //   title: {
// //     // fontSize: 24,
// //     // fontWeight: "bold",
// //     marginBottom: 20,
// //     textAlign: "center",
// //   },
// //   description: {
// //     textAlign: "center",
// //     marginBottom: 20,
// //   },
// //   forceContainer: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //     marginVertical: 20,
// //     width: "100%",
// //   },
// //   massContainer: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //     width: "100%",
// //   },
// //   animatedObject: {
// //     width: 200,
// //     height: 200,
// //     marginTop: 20,
// //   },
// //   button: {
// //     marginTop: 20,
// //   },
// //   resultContainer: {
// //     marginTop: 20,
// //     padding: 10,
// //     borderColor: "#ccc",
// //     borderWidth: 1,
// //     borderRadius: 5,
// //   },
// //   resultText: {
// //     fontSize: 18,
// //   },
// // });

// // export default Syllabus;

// // ///////////////////////////////////// class 10th TranspirationExperiment

// // import React, { useState } from "react";
// // import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
// // import { Button, Card } from "react-native-paper";
// // import { Animated } from "react-native";

// // const Syllabus = () => {
// //   const [dropletsVisible, setDropletsVisible] = useState(false);
// //   const [animationValue] = useState(new Animated.Value(0));

// //   // Animation for the droplets
// //   const startDropletAnimation = () => {
// //     Animated.timing(animationValue, {
// //       toValue: 1,
// //       duration: 2000,
// //       useNativeDriver: true,
// //     }).start(() => setDropletsVisible(true));
// //   };

// //   return (
// //     <ScrollView style={styles.container}>
// //       <Card style={styles.card}>
// //         <Card.Title title="Transpiration Experiment" />
// //         <Card.Content>
// //           <Text style={styles.text}>
// //             In this experiment, we will observe how plants release water vapour
// //             through transpiration.
// //           </Text>
// //         </Card.Content>
// //       </Card>

// //       <Card style={styles.card}>
// //         <Card.Title title="Observation" />
// //         <Card.Content>
// //           <Text style={styles.text}>
// //             The inner surface of the polythene bag covering the leafy branch
// //             will show more water droplets, indicating transpiration.
// //           </Text>
// //         </Card.Content>
// //       </Card>

// //       <View style={styles.simulationContainer}>
// //         <Text style={styles.text}>Simulating Transpiration</Text>
// //         <View style={styles.plant}>
// //           <Image
// //             source={{
// //               uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/339936af-d64d-4f0c-954e-7d9995e70508/ddapw4i-2454638e-e188-4bd0-adfc-5b43558783a2.png/v1/fill/w_959,h_833,strp/plant_pot_top_view_png_by_defogph_ddapw4i-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTExMiIsInBhdGgiOiJcL2ZcLzMzOTkzNmFmLWQ2NGQtNGYwYy05NTRlLTdkOTk5NWU3MDUwOFwvZGRhcHc0aS0yNDU0NjM4ZS1lMTg4LTRiZDAtYWRmYy01YjQzNTU4NzgzYTIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.lBgG55YSJasG3PQGdDbU4xKUprLxgKRIKD2SrYBW9s8",
// //             }}
// //             style={styles.plantImage}
// //           />
// //           {dropletsVisible && (
// //             <Animated.View
// //               style={[
// //                 styles.droplets,
// //                 {
// //                   opacity: animationValue,
// //                   transform: [
// //                     {
// //                       translateY: animationValue.interpolate({
// //                         inputRange: [0, 1],
// //                         outputRange: [0, -50],
// //                       }),
// //                     },
// //                   ],
// //                 },
// //               ]}
// //             >
// //               <Text style={styles.dropletText}>💧</Text>
// //             </Animated.View>
// //           )}
// //         </View>
// //         <Button mode="contained" onPress={startDropletAnimation}>
// //           Start Experiment
// //         </Button>
// //       </View>

// //       <Card style={styles.card}>
// //         <Card.Title title="Answer the Questions" />
// //         <Card.Content>
// //           <Text style={styles.text}>
// //             1. Why do leaves release water vapor during transpiration?
// //           </Text>
// //           <Text style={styles.text}>
// //             2. Name the pores in leaves through which plants transpire?
// //           </Text>
// //           <Text style={styles.text}>
// //             3. Why do desert plants lose less water as compared to leafy plants?
// //           </Text>
// //         </Card.Content>
// //       </Card>
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#fff",
// //     padding: 16,
// //   },
// //   card: {
// //     marginBottom: 16,
// //   },
// //   text: {
// //     fontSize: 16,
// //     color: "#333",
// //   },
// //   simulationContainer: {
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// //   plant: {
// //     position: "relative",
// //     alignItems: "center",
// //     marginBottom: 20,
// //   },
// //   plantImage: {
// //     width: 200,
// //     height: 200,
// //   },
// //   droplets: {
// //     position: "absolute",
// //     top: -50,
// //     left: "50%",
// //     transform: [{ translateX: -10 }],
// //   },
// //   dropletText: {
// //     fontSize: 24,
// //   },
// // });

// // export default Syllabus;

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   ScrollView,
//   Animated,
// } from "react-native";
// import { Button, Card } from "react-native-paper";

// // Utility function to generate droplets
// const generateDroplets = (count) => {
//   let droplets = [];
//   for (let i = 0; i < count; i++) {
//     droplets.push({
//       id: i,
//       opacity: new Animated.Value(0),
//       translateY: new Animated.Value(0),
//     });
//   }
//   return droplets;
// };

// const Syllabus = () => {
//   const [droplets, setDroplets] = useState([]);
//   const [animationStarted, setAnimationStarted] = useState(false);
//   const [instructionsVisible, setInstructionsVisible] = useState(false);

//   // Animation for continuous droplets
//   const createDroplets = () => {
//     const dropletsArray = generateDroplets(10); // Number of droplets
//     setDroplets(dropletsArray);

//     dropletsArray.forEach((droplet, index) => {
//       Animated.sequence([
//         Animated.timing(droplet.opacity, {
//           toValue: 1,
//           duration: 1000,
//           delay: index * 500, // Stagger the animation
//           useNativeDriver: true,
//         }),
//         Animated.timing(droplet.translateY, {
//           toValue: -80,
//           duration: 2000,
//           useNativeDriver: true,
//         }),
//         Animated.timing(droplet.opacity, {
//           toValue: 0,
//           duration: 1000,
//           useNativeDriver: true,
//         }),
//       ]).start();
//     });
//   };

//   const handleStartExperiment = () => {
//     setInstructionsVisible(true);
//     setAnimationStarted(true);
//     createDroplets();
//   };

//   return (
//     <ScrollView style={styles.container}>
//       {/* Title Card */}
//       <Card style={styles.card}>
//         <Card.Title
//           title="Transpiration Experiment"
//           titleStyle={styles.cardTitle}
//         />
//         <Card.Content>
//           <Text style={styles.text}>
//             In this experiment, we will observe how plants release water vapour
//             through transpiration. This process occurs when water evaporates
//             from the leaves of the plant.
//           </Text>
//         </Card.Content>
//       </Card>

//       {/* Observation Card */}
//       <Card style={styles.card}>
//         <Card.Title title="Observation" titleStyle={styles.cardTitle} />
//         <Card.Content>
//           <Text style={styles.text}>
//             The inner surface of the polythene bag covering the leafy branch
//             will show more water droplets, indicating transpiration. These
//             droplets are a result of the water vapor released by the leaves.
//           </Text>
//         </Card.Content>
//       </Card>

//       {/* Simulation Container */}
//       <View style={styles.simulationContainer}>
//         <Text style={styles.text}>Simulating Transpiration</Text>

//         {/* Plant Image and Droplet Animation */}
//         <View style={styles.plant}>
//           <Image
//             source={{
//               uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/339936af-d64d-4f0c-954e-7d9995e70508/ddapw4i-2454638e-e188-4bd0-adfc-5b43558783a2.png/v1/fill/w_959,h_833,strp/plant_pot_top_view_png_by_defogph_ddapw4i-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTExMiIsInBhdGgiOiJcL2ZcLzMzOTkzNmFmLWQ2NGQtNGYwYy05NTRlLTdkOTk5NWU3MDUwOFwvZGRhcHc0aS0yNDU0NjM4ZS1lMTg4LTRiZDAtYWRmYy01YjQzNTU4NzgzYTIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.lBgG55YSJasG3PQGdDbU4xKUprLxgKRIKD2SrYBW9s8",
//             }}
//             style={styles.plantImage}
//           />
//           {animationStarted &&
//             droplets.map((droplet, index) => (
//               <Animated.View
//                 key={droplet.id}
//                 style={[
//                   styles.droplets,
//                   {
//                     opacity: droplet.opacity,
//                     transform: [
//                       { translateY: droplet.translateY },
//                       {
//                         translateX: droplet.translateY.interpolate({
//                           inputRange: [-50, 50],
//                           outputRange: [-10, 10],
//                         }),
//                       },
//                     ],
//                   },
//                 ]}
//               >
//                 <Text style={styles.dropletText}>💧</Text>
//               </Animated.View>
//             ))}
//         </View>

//         {/* Start Experiment Button */}
//         <Button
//           mode="contained"
//           onPress={handleStartExperiment}
//           style={styles.startButton}
//         >
//           Start Experiment
//         </Button>
//       </View>

//       {/* Instructions Overlay */}
//       {instructionsVisible && (
//         <View style={styles.instructions}>
//           <Text style={styles.instructionText}>
//             🌱 Hint: Watch the water droplets as they appear and float upwards,
//             simulating water vapor being released by the plant.
//           </Text>
//         </View>
//       )}

//       {/* Answer the Questions Card */}
//       <Card style={styles.card}>
//         <Card.Title
//           title="Answer the Questions"
//           titleStyle={styles.cardTitle}
//         />
//         <Card.Content>
//           <Text style={styles.text}>
//             1. Why do leaves release water vapor during transpiration?
//           </Text>
//           <Text style={styles.text}>
//             2. Name the pores in leaves through which plants transpire.
//           </Text>
//           <Text style={styles.text}>
//             3. Why do desert plants lose less water compared to leafy plants?
//           </Text>
//         </Card.Content>
//       </Card>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f0f4f7", // Soft background color
//     padding: 16,
//   },
//   card: {
//     marginBottom: 16,
//     borderRadius: 10,
//     elevation: 5, // Slight shadow for depth
//   },
//   cardTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#4CAF50", // Green color for titles
//   },
//   text: {
//     fontSize: 16,
//     color: "#333",
//     lineHeight: 24,
//   },
//   simulationContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//     marginVertical: 20,
//   },
//   plant: {
//     position: "relative",
//     alignItems: "center",
//     marginBottom: 20,
//     marginTop: 40,
//   },
//   plantImage: {
//     width: 250,
//     height: 250,
//     borderRadius: 20,
//   },
//   droplets: {
//     position: "absolute",
//     top: -50, // Start the droplets above the plant
//     left: "50%",
//     transform: [{ translateX: -10 }],
//   },
//   dropletText: {
//     fontSize: 30,
//     color: "#2196F3", // Blue color for droplets
//   },
//   startButton: {
//     marginTop: 20,
//     backgroundColor: "#4CAF50",
//     paddingVertical: 12,
//     width: "60%",
//     borderRadius: 50,
//   },
//   instructions: {
//     backgroundColor: "rgba(0,0,0,0.6)",
//     padding: 20,
//     borderRadius: 10,
//     marginTop: 20,
//   },
//   instructionText: {
//     color: "#fff",
//     fontSize: 18,
//     fontStyle: "italic",
//   },
// });

// export default Syllabus;

// import React, { useState, useEffect } from "react";
// import { View, Text, Image, StyleSheet, ScrollView, Animated } from "react-native";
// import { Button, Card } from "react-native-paper";

// // Utility function to generate droplets
// const generateDroplets = (count) => {
//   let droplets = [];
//   for (let i = 0; i < count; i++) {
//     droplets.push({
//       id: i,
//       opacity: new Animated.Value(0),
//       translateY: new Animated.Value(-50), // Start from top of the screen (negative Y)
//     });
//   }
//   return droplets;
// };

// const Syllabus = () => {
//   const [droplets, setDroplets] = useState([]);
//   const [animationStarted, setAnimationStarted] = useState(false);
//   const [instructionsVisible, setInstructionsVisible] = useState(false);

//   // Animation for continuous droplets
//   const createDroplets = () => {
//     const dropletsArray = generateDroplets(10); // Number of droplets
//     setDroplets(dropletsArray);

//     dropletsArray.forEach((droplet, index) => {
//       Animated.sequence([
//         Animated.timing(droplet.opacity, {
//           toValue: 1,
//           duration: 1000,
//           delay: index * 500, // Stagger the animation
//           useNativeDriver: true,
//         }),
//         Animated.timing(droplet.translateY, {
//           toValue: 80, // Move downward (positive Y)
//           duration: 2000,
//           useNativeDriver: true,
//         }),
//         Animated.timing(droplet.opacity, {
//           toValue: 0,
//           duration: 1000,
//           useNativeDriver: true,
//         }),
//       ]).start();
//     });
//   };

//   const handleStartExperiment = () => {
//     setInstructionsVisible(true);
//     setAnimationStarted(true);
//     createDroplets();
//   };

//   return (
//     <ScrollView style={styles.container}>
//       {/* Title Card */}
//       <Card style={styles.card}>
//         <Card.Title title="Transpiration Experiment" titleStyle={styles.cardTitle} />
//         <Card.Content>
//           <Text style={styles.text}>
//             In this experiment, we will observe how plants release water vapour
//             through transpiration. This process occurs when water evaporates from
//             the leaves of the plant.
//           </Text>
//         </Card.Content>
//       </Card>

//       {/* Observation Card */}
//       <Card style={styles.card}>
//         <Card.Title title="Observation" titleStyle={styles.cardTitle} />
//         <Card.Content>
//           <Text style={styles.text}>
//             The inner surface of the polythene bag covering the leafy branch
//             will show more water droplets, indicating transpiration. These droplets
//             are a result of the water vapor released by the leaves.
//           </Text>
//         </Card.Content>
//       </Card>

//       {/* Simulation Container */}
//       <View style={styles.simulationContainer}>
//         <Text style={styles.text}>Simulating Transpiration</Text>

//         {/* Plant Image and Droplet Animation */}
//         <View style={styles.plant}>
//           <Image
//             source={{
//               uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/339936af-d64d-4f0c-954e-7d9995e70508/ddapw4i-2454638e-e188-4bd0-adfc-5b43558783a2.png/v1/fill/w_959,h_833,strp/plant_pot_top_view_png_by_defogph_ddapw4i-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTExMiIsInBhdGgiOiJcL2ZcLzMzOTkzNmFmLWQ2NGQtNGYwYy05NTRlLTdkOTk5NWU3MDUwOFwvZGRhcHc0aS0yNDU0NjM4ZS1lMTg4LTRiZDAtYWRmYy01YjQzNTU4NzgzYTIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.lBgG55YSJasG3PQGdDbU4xKUprLxgKRIKD2SrYBW9s8",
//             }}
//             style={styles.plantImage}
//           />
//           {animationStarted && droplets.map((droplet, index) => (
//             <Animated.View
//               key={droplet.id}
//               style={[
//                 styles.droplets,
//                 {
//                   opacity: droplet.opacity,
//                   transform: [
//                     { translateY: droplet.translateY }, // Animate Y axis from top to bottom
//                     {
//                       translateX: droplet.translateY.interpolate({
//                         inputRange: [-50, 50],
//                         outputRange: [40, -50],
//                       }),
//                     },
//                   ],
//                 },
//               ]}
//             >
//               <Text style={styles.dropletText}>💧</Text>
//             </Animated.View>
//           ))}
//         </View>

//         {/* Start Experiment Button */}
//         <Button mode="contained" onPress={handleStartExperiment} style={styles.startButton}>
//           Start Experiment
//         </Button>
//       </View>

//       {/* Instructions Overlay */}
//       {instructionsVisible && (
//         <View style={styles.instructions}>
//           <Text style={styles.instructionText}>
//             🌱 Hint: Watch the water droplets as they appear and float downwards, simulating water vapor being released by the plant.
//           </Text>
//         </View>
//       )}

//       {/* Answer the Questions Card */}
//       <Card style={styles.card}>
//         <Card.Title title="Answer the Questions" titleStyle={styles.cardTitle} />
//         <Card.Content>
//           <Text style={styles.text}>
//             1. Why do leaves release water vapor during transpiration?
//           </Text>
//           <Text style={styles.text}>
//             2. Name the pores in leaves through which plants transpire.
//           </Text>
//           <Text style={styles.text}>
//             3. Why do desert plants lose less water compared to leafy plants?
//           </Text>
//         </Card.Content>
//       </Card>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f0f4f7", // Soft background color
//     padding: 16,
//   },
//   card: {
//     marginBottom: 16,
//     borderRadius: 10,
//     elevation: 5, // Slight shadow for depth
//   },
//   cardTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#4CAF50", // Green color for titles
//   },
//   text: {
//     fontSize: 16,
//     color: "#333",
//     lineHeight: 24,
//   },
//   simulationContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//     marginVertical: 20,
//   },
//   plant: {
//     position: "relative",
//     alignItems: "center",
//     marginBottom: 20,
//     marginTop: 40,
//   },
//   plantImage: {
//     width: 250,
//     height: 250,
//     borderRadius: 20,
//   },
//   droplets: {
//     position: "absolute",
//     top: -50, // Start the droplets above the plant
//     left: "50%",
//     transform: [{ translateX: -10 }],
//   },
//   dropletText: {
//     fontSize: 30,
//     color: "#2196F3", // Blue color for droplets
//   },
//   startButton: {
//     marginTop: 20,
//     backgroundColor: "#4CAF50",
//     paddingVertical: 12,
//     width: "60%",
//     borderRadius: 50,
//   },
//   instructions: {
//     backgroundColor: "rgba(0,0,0,0.6)",
//     padding: 20,
//     borderRadius: 10,
//     marginTop: 20,
//   },
//   instructionText: {
//     color: "#fff",
//     fontSize: 18,
//     fontStyle: "italic",
//   },
// });

// export default Syllabus;

