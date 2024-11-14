// // import React, { useState } from "react";
// // import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
// // import DraggableFlatList, { ScaleDecorator, RenderItemParams } from "react-native-draggable-flatlist";

// // // Generate color based on the index of the item
// // const NUM_ITEMS = 10;
// // function getColor(i: number) {
// //   const multiplier = 255 / (NUM_ITEMS - 1);
// //   const colorVal = i * multiplier;
// //   return `rgb(${colorVal}, ${Math.abs(128 - colorVal)}, ${255 - colorVal})`;
// // }

// // // Define item structure
// // type Item = {
// //   key: string;
// //   label: string;
// //   height: number;
// //   width: number;
// //   backgroundColor: string;
// // };

// // // Generate initial data for the draggable list
// // const initialData: Item[] = [...Array(NUM_ITEMS)].map((_, index) => {
// //   const backgroundColor = getColor(index);
// //   return {
// //     key: `item-${index}`,
// //     label: String(index),
// //     height: 100,
// //     width: 60 + Math.random() * 40, // Random width between 60px and 100px
// //     backgroundColor,
// //   };
// // });

// // export default function App() {
// //   const [data, setData] = useState(initialData);

// //   // Render each item in the list
// //   const renderItem = ({ item, drag, isActive }: RenderItemParams<Item>) => {
// //     return (
// //       <ScaleDecorator>
// //         <TouchableOpacity
// //           onLongPress={drag} // Start dragging on long press
// //           disabled={isActive} // Disable interaction when the item is being dragged
// //           style={[
// //             styles.rowItem,
// //             { backgroundColor: isActive ? "red" : item.backgroundColor },
// //           ]}
// //         >
// //           <Text style={styles.text}>{item.label}</Text>
// //         </TouchableOpacity>
// //       </ScaleDecorator>
// //     );
// //   };

// //   return (
// //     <DraggableFlatList
// //       data={data}
// //       onDragEnd={({ data }) => setData(data)} // Update data after drag ends
// //       keyExtractor={(item) => item.key} // Unique key for each item
// //       renderItem={renderItem} // Custom render function for each item
// //     />
// //   );
// // }

// // // Styles for the list items and the text
// // const styles = StyleSheet.create({
// //   rowItem: {
// //     height: 100,
// //     width: "100%",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     marginBottom: 10, // Space between items
// //     borderRadius: 10, // Rounded corners
// //   },
// //   text: {
// //     color: "white",
// //     fontSize: 24,
// //     fontWeight: "bold",
// //     textAlign: "center",
// //   },
// // });

// import React, { useState } from "react";
// import { View, Text, Image, StyleSheet, Animated, Alert } from "react-native";
// import { PanResponder } from "react-native";

// // Example data for states and their "correct" location on the map (you'll need to adjust coordinates to match your image/map).
// const stateCoordinates = {
//   Maharashtra: { x: 150, y: 350 }, // Example coordinates for Maharashtra
//   Gujarat: { x: 200, y: 200 },
//   Rajasthan: { x: 100, y: 100 },
//   // Add other states with their respective coordinates
// };

// const initialPinPosition = { x: 0, y: 0 }; // Initial pin position off-screen

// export default function App() {
//   const [pinPosition, setPinPosition] = useState(
//     new Animated.ValueXY(initialPinPosition)
//   );
//   const [questionAnswered, setQuestionAnswered] = useState(false);

//   // PanResponder to handle the drag and drop
//   const panResponder = PanResponder.create({
//     onStartShouldSetPanResponder: () => true,
//     onPanResponderMove: Animated.event(
//       [null, { dx: pinPosition.x, dy: pinPosition.y }],
//       { useNativeDriver: false }
//     ),
//     onPanResponderRelease: (_, gestureState) => {
//       const { moveX, moveY } = gestureState;
//       checkPinPosition(moveX, moveY);
//     },
//   });

//   // Function to check if the pin is correctly placed
//   const checkPinPosition = (x: number, y: number) => {
//     for (let state in stateCoordinates) {
//       const { x: stateX, y: stateY } = stateCoordinates[state];
//       const tolerance = 50; // Allow some tolerance for error

//       // Check if the pin is within a certain range of the state's coordinates
//       if (
//         Math.abs(stateX - x) < tolerance &&
//         Math.abs(stateY - y) < tolerance
//       ) {
//         Alert.alert(
//           "Success!",
//           `You correctly pinned the location of ${state}.`
//         );
//         setQuestionAnswered(true);
//         return;
//       }
//     }

//     Alert.alert("Oops!", "Try again, the pin is not in the correct location.");
//     setQuestionAnswered(false);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Drag the pin to the correct state!</Text>
//       <Text style={styles.question}>
//         Where is the petroleum found in India?
//       </Text>

//       {/* Image of India Map */}
//       <Image
//         source={{
//           uri: "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/11-2024-9-723-indiaMap.gif",
//         }} // Replace with the actual URL or local image path of India map
//         style={styles.mapImage}
//       />

//       {/* Draggable Pin */}
//       <Animated.View
//         {...panResponder.panHandlers}
//         style={[styles.pin, pinPosition.getLayout()]}
//       >
//         <Text style={styles.pinText}>📍</Text>
//       </Animated.View>

//       {/* Message after answering */}
//       {questionAnswered && (
//         <Text style={styles.successMessage}>You have answered correctly!</Text>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//     backgroundColor: "#f8f8f8",
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   question: {
//     fontSize: 18,
//     marginBottom: 20,
//   },
//   mapImage: {
//     width: 300,
//     height: 500,
//     resizeMode: "contain",
//     marginBottom: 20,
//     position: "relative",
//   },
//   pin: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: 100,
//     height: 40,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   pinText: {
//     fontSize: 18,
//     // justifyContent: "center",
//     // textAlign: "center",
//     marginLeft: 20,
//   },
//   successMessage: {
//     fontSize: 20,
//     color: "green",
//     marginTop: 20,
//   },
// });

import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Animated, Alert } from "react-native";
import { PanResponder } from "react-native";

// Define the drop zones for each resource (Petroleum, Coal, and Natural Gas)
const dropZones = {
  Maharashtra: { x: 150, y: 350, width: 100, height: 100, title: "Petroleum" },
  Gujarat: { x: 200, y: 200, width: 100, height: 100, title: "Coal" },
  Rajasthan: { x: 350, y: 100, width: 100, height: 100, title: "Natural Gas" },
};

// Initial pins data with names
const initialPinData = [
  { x: 0, y: 0, title: "Petroleum" },
  { x: 20, y: 0, title: "Coal" },
  { x: 40, y: 0, title: "Natural Gas" },
];

export default function App() {
  const [pinPositions, setPinPositions] = useState(
    initialPinData.map((pin) => new Animated.ValueXY({ x: pin.x, y: pin.y }))
  );
  const [questionAnswered, setQuestionAnswered] = useState(false);

  // Create pan responders for each pin
  const panResponders = pinPositions.map((pinPosition, index) =>
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, { dx: pinPosition.x, dy: pinPosition.y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (_, gestureState) => {
        const { moveX, moveY } = gestureState;
        checkPinPosition(moveX, moveY, index);
      },
    })
  );

  // Function to check if the pin is correctly placed
  const checkPinPosition = (x: number, y: number, pinIndex: number) => {
    let success = false;

    // Check each drop zone to see if the pin is within bounds
    for (let state in dropZones) {
      const { x: zoneX, y: zoneY, width, height, title } = dropZones[state];
      const tolerance = 20; // Allow some tolerance for the placement

      // Check if the pin is inside the drop zone
      if (
        x >= zoneX - tolerance &&
        x <= zoneX + width + tolerance &&
        y >= zoneY - tolerance &&
        y <= zoneY + height + tolerance
      ) {
        // Check if the pin's title matches the drop zone
        if (initialPinData[pinIndex].title === title) {
          Alert.alert("Success!", `You correctly pinned ${title} in ${state}.`);
        } else {
          Alert.alert("Oops!", `Wrong pin for ${state}, try again.`);
        }
        success = true;
        break;
      }
    }

    if (!success) {
      Alert.alert("Oops!", "Try again, the pin is not in the correct location.");
    }

    // Update state based on whether the answer was correct
    setQuestionAnswered(success);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Drag the pin to the correct state!</Text>
      <Text style={styles.question}>Where is the resource found in India?</Text>

      {/* India Map */}
      <View style={styles.mapContainer}>
        <Image
          source={{
            uri: "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/11-2024-9-723-indiaMap.gif", // Replace with your own map URL or local image
          }}
          style={styles.mapImage}
        />

        {/* Drop Zones (boxes representing resources in states) */}
        {Object.keys(dropZones).map((state, index) => {
          const { x, y, width, height, title } = dropZones[state];
          return (
            <View
              key={state}
              style={[styles.dropZone, { left: x, top: y, width, height }]}
            >
              <Text style={styles.stateName}>{state}</Text>
              <Text style={styles.dropZoneTitle}>{title}</Text>
            </View>
          );
        })}

        {/* Draggable Pins */}
        {pinPositions.map((pinPosition, index) => (
          <Animated.View
            key={index}
            {...panResponders[index].panHandlers}
            style={[styles.pin, pinPosition.getLayout()]}
          >
            <Text style={styles.pinText}>📍</Text>
          </Animated.View>
        ))}
      </View>

      {/* Success message */}
      {questionAnswered && (
        <Text style={styles.successMessage}>You have answered correctly!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
  },
  mapContainer: {
    position: "relative", // Position the map and drop zones relative to each other
    width: 350,
    height: 500,
    marginBottom: 20,
  },
  mapImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  dropZone: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 150, 0, 0.2)",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
  },
  stateName: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  dropZoneTitle: {
    fontSize: 10,
    color: "#333",
    marginTop: 5,
    textAlign: "center",
  },
  pin: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 10,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "skyblue",
    borderRadius: 20,
  },
  pinText: {
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
  successMessage: {
    fontSize: 20,
    color: "green",
    marginTop: 20,
  },
});
