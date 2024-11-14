// // import React, { useState } from 'react';
// // import { View, Text, Alert, StyleSheet } from 'react-native';
// // import { Card } from 'react-native-paper';
// // import Draggable from 'react-native-draggable';

// // // DraggableWrapper component with default parameters
// // const DraggableWrapper = ({
// //   renderSize = 60,          // Default size of the draggable element
// //   renderColor = "#000",    // Default color
// //   renderText = "📍",       // Default text for draggable element (Pin Emoji)
// //   onDragRelease,           // Function to handle the release of the draggable item
// //   minX = 0,                // Minimum X position
// //   minY = 0,                // Minimum Y position
// //   x = 150,                 // Initial X position of the draggable element
// //   y = 50,                  // Initial Y position of the draggable element
// //   ...props                 // Other props passed to Draggable component
// // }) => {
// //   return (
// //     <Draggable
// //       x={x}
// //       y={y}
// //       renderSize={renderSize}
// //       renderColor={renderColor}
// //       renderText={renderText}
// //       onDragRelease={onDragRelease}
// //       minX={minX}
// //       minY={minY}
// //       {...props}  // Pass any other props
// //     />
// //   );
// // };

// // // DropBox component to handle the drop logic and position
// // const DropBox = ({
// //   boxIndex,
// //   x,
// //   y,
// //   handleDrop,
// //   isDroppedCorrectly,
// //   coordinates,
// //   droppedText
// // }) => {
// //   return (
// //     <Card style={[styles.box, { left: x, top: y }]}>
// //       <Text style={styles.boxText}>Drop the pin here</Text>
// //       {/* Show the dropped text above the box if dropped correctly */}
// //       {isDroppedCorrectly && droppedText && (
// //         <Text style={styles.droppedText}>{droppedText}</Text>
// //       )}
// //     </Card>
// //   );
// // };

// // const App = () => {
// //   const [droppedTexts, setDroppedTexts] = useState([null, null, null]); // Store the dropped text messages for each draggable
// //   const [isDroppedCorrectly, setIsDroppedCorrectly] = useState([false, false, false]); // Track if each text is dropped correctly
// //   const [coordinates, setCoordinates] = useState([null, null, null]); // Store coordinates of the drops

// //   // Function to handle when the text is dropped
// //   const handleDrop = (index, e, gestureState) => {
// //     // Define the target box areas (coordinates)
// //     const boxes = [
// //       { left: 100, right: 300, top: 500, bottom: 700 }, // First box coordinates
// //       { left: 210, right: 450, top: 500, bottom: 700 }, // Second box coordinates
// //       { left: 350, right: 600, top: 500, bottom: 700 }, // Third box coordinates
// //     ];

// //     // Get the drop coordinates
// //     const dropX = gestureState.moveX;
// //     const dropY = gestureState.moveY;

// //     // Check if the dropped text is within the corresponding box
// //     const { left, right, top, bottom } = boxes[index];
// //     if (dropX >= left && dropX <= right && dropY >= top && dropY <= bottom) {
// //       // Correct drop
// //       const updatedIsDropped = [...isDroppedCorrectly];
// //       const updatedDroppedTexts = [...droppedTexts];
// //       const updatedCoordinates = [...coordinates];

// //       updatedIsDropped[index] = true;
// //       updatedDroppedTexts[index] = `📍 Pin dropped in box ${index + 1}`; // Set the text of the draggable element as Pin Emoji
// //       updatedCoordinates[index] = { x: dropX, y: dropY };

// //       setIsDroppedCorrectly(updatedIsDropped);
// //       setDroppedTexts(updatedDroppedTexts);
// //       setCoordinates(updatedCoordinates);

// //       Alert.alert('You dropped the pin correctly!', `x: ${dropX}, y: ${dropY}`);
// //     } else {
// //       // Incorrect drop
// //       const updatedIsDropped = [...isDroppedCorrectly];
// //       const updatedDroppedTexts = [...droppedTexts];
// //       const updatedCoordinates = [...coordinates];

// //       updatedIsDropped[index] = false;
// //       updatedDroppedTexts[index] = `Try again! Last drop at (x: ${dropX}, y: ${dropY})`;
// //       updatedCoordinates[index] = { x: dropX, y: dropY };

// //       setIsDroppedCorrectly(updatedIsDropped);
// //       setDroppedTexts(updatedDroppedTexts);
// //       setCoordinates(updatedCoordinates);

// //       Alert.alert('Try again!', `x: ${dropX}, y: ${dropX}`);
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Drag the pin emoji into the boxes</Text>

// //       {/* Draggable Emojis (Pin Emoji 📍) */}
// //       <DraggableWrapper
// //         x={50}
// //         y={50} // Initial position of the first draggable emoji
// //         renderSize={60}
// //         renderColor="#000"
// //         renderText="📍"  // Pin emoji for draggable item
// //         onDragRelease={(e, gestureState) => handleDrop(0, e, gestureState)}
// //       />
// //       <DraggableWrapper
// //         x={120}
// //         y={50} // Initial position of the second draggable emoji
// //         renderSize={60}
// //         renderColor="#000"
// //         renderText="📍"  // Pin emoji for draggable item
// //         onDragRelease={(e, gestureState) => handleDrop(1, e, gestureState)}
// //       />
// //       <DraggableWrapper
// //         x={200}
// //         y={50} // Initial position of the third draggable emoji
// //         renderSize={60}
// //         renderColor="#000"
// //         renderText="📍"  // Pin emoji for draggable item
// //         onDragRelease={(e, gestureState) => handleDrop(2, e, gestureState)}
// //       />

// //       {/* Target Drop Boxes */}
// //       <DropBox
// //         boxIndex={0}
// //         x={50} // Position of the first drop box
// //         y={500}
// //         handleDrop={handleDrop}
// //         isDroppedCorrectly={isDroppedCorrectly[0]}
// //         coordinates={coordinates[0]}
// //         droppedText={droppedTexts[0]} // Pass dropped text for first box
// //       />
// //       <DropBox
// //         boxIndex={1}
// //         x={180} // Position of the second drop box
// //         y={500}
// //         handleDrop={handleDrop}
// //         isDroppedCorrectly={isDroppedCorrectly[1]}
// //         coordinates={coordinates[1]}
// //         droppedText={droppedTexts[1]} // Pass dropped text for second box
// //       />
// //       <DropBox
// //         boxIndex={2}
// //         x={310} // Position of the third drop box
// //         y={500}
// //         handleDrop={handleDrop}
// //         isDroppedCorrectly={isDroppedCorrectly[2]}
// //         coordinates={coordinates[2]}
// //         droppedText={droppedTexts[2]} // Pass dropped text for third box
// //       />

// //       {/* Text showing drop result */}
// //       {droppedTexts.map((text, index) => !isDroppedCorrectly[index] && text && (
// //         <Text key={index} style={styles.resultText}>{text}</Text>
// //       ))}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#f5f5f5',
// //     position: 'relative', // Allow positioning of components in absolute positions
// //   },
// //   title: {
// //     marginBottom: 20,
// //   },
// //   box: {
// //     width: 100,
// //     height: 100,
// //     backgroundColor: '#f2f2f2',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     borderWidth: 2,
// //     borderColor: '#000',
// //     position: 'absolute', // Position the boxes absolutely
// //     padding: 2,
// //   },
// //   boxText: {
// //     color: '#555',
// //   },
// //   droppedText: {
// //     color: 'green',
// //     position: 'absolute',
// //     top: -30, // Position the dropped text above the box
// //     textAlign: 'center',
// //     fontSize: 16,
// //   },
// //   resultText: {
// //     color: 'red',
// //     marginTop: 20,
// //   },
// // });

// // export default App;

// import React, { useState } from "react";
// import { View, Text, Alert, StyleSheet, Image } from "react-native";
// import { Card } from "react-native-paper";
// import Draggable from "react-native-draggable";

// // DraggableWrapper component with default parameters
// const DraggableWrapper = ({
//   renderSize = 60, // Default size of the draggable element
//   renderColor = "#000", // Default color
//   renderText = "📍", // Default text for draggable element (Pin Emoji)
//   onDragRelease, // Function to handle the release of the draggable item
//   minX = 0, // Minimum X position
//   minY = 0, // Minimum Y position
//   x = 150, // Initial X position of the draggable element
//   y = 50, // Initial Y position of the draggable element
//   ...props // Other props passed to Draggable component
// }) => {
//   return (
//     <Draggable
//       x={x}
//       y={y}
//       renderSize={renderSize}
//       renderColor={renderColor}
//       renderText={renderText}
//       onDragRelease={onDragRelease}
//       minX={minX}
//       minY={minY}
//       {...props} // Pass any other props
//     />
//   );
// };

// // DropBox component to handle the drop logic and position
// const DropBox = ({
//   boxIndex,
//   x,
//   y,
//   handleDrop,
//   isDroppedCorrectly,
//   coordinates,
//   droppedText,
//   imageUri,
// }) => {
//   return (
//     <View style={[styles.boxContainer, { left: x, top: y }]}>
//       {/* Show Image before Drop Box */}
//       <Image source={{ uri: imageUri }} style={styles.dropImage} />

//       <Card style={styles.box}>
//         <Text style={styles.boxText}>Drop the pin here</Text>
//         {/* Show the dropped text above the box if dropped correctly */}
//         {isDroppedCorrectly && droppedText && (
//           <Text style={styles.droppedText}>{droppedText}</Text>
//         )}
//       </Card>
//     </View>
//   );
// };

// const App = () => {
//   const [droppedTexts, setDroppedTexts] = useState([null, null, null]); // Store the dropped text messages for each draggable
//   const [isDroppedCorrectly, setIsDroppedCorrectly] = useState([
//     false,
//     false,
//     false,
//   ]); // Track if each text is dropped correctly
//   const [coordinates, setCoordinates] = useState([null, null, null]); // Store coordinates of the drops

//   // Function to handle when the text is dropped
//   const handleDrop = (index, e, gestureState) => {
//     // Define the target box areas (coordinates)
//     const boxes = [
//       { left: 100, right: 300, top: 500, bottom: 700 }, // First box coordinates
//       { left: 210, right: 450, top: 500, bottom: 700 }, // Second box coordinates
//       { left: 350, right: 600, top: 500, bottom: 700 }, // Third box coordinates
//     ];

//     // Get the drop coordinates
//     const dropX = gestureState.moveX;
//     const dropY = gestureState.moveY;

//     // Check if the dropped text is within the corresponding box
//     const { left, right, top, bottom } = boxes[index];
//     if (dropX >= left && dropX <= right && dropY >= top && dropY <= bottom) {
//       // Correct drop
//       const updatedIsDropped = [...isDroppedCorrectly];
//       const updatedDroppedTexts = [...droppedTexts];
//       const updatedCoordinates = [...coordinates];

//       updatedIsDropped[index] = true;
//       updatedDroppedTexts[index] = `📍 Pin dropped in box ${index + 1}`; // Set the text of the draggable element as Pin Emoji
//       updatedCoordinates[index] = { x: dropX, y: dropY };

//       setIsDroppedCorrectly(updatedIsDropped);
//       setDroppedTexts(updatedDroppedTexts);
//       setCoordinates(updatedCoordinates);

//       Alert.alert("You dropped the pin correctly!", `x: ${dropX}, y: ${dropY}`);
//     } else {
//       // Incorrect drop
//       const updatedIsDropped = [...isDroppedCorrectly];
//       const updatedDroppedTexts = [...droppedTexts];
//       const updatedCoordinates = [...coordinates];

//       updatedIsDropped[index] = false;
//       updatedDroppedTexts[
//         index
//       ] = `Try again! Last drop at (x: ${dropX}, y: ${dropY})`;
//       updatedCoordinates[index] = { x: dropX, y: dropY };

//       setIsDroppedCorrectly(updatedIsDropped);
//       setDroppedTexts(updatedDroppedTexts);
//       setCoordinates(updatedCoordinates);

//       Alert.alert("Try again!", `x: ${dropX}, y: ${dropX}`);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Drag the pin emoji into the boxes</Text>

//       {/* Draggable Emojis (Pin Emoji 📍) */}
//       <DraggableWrapper
//         x={50}
//         y={50} // Initial position of the first draggable emoji
//         renderSize={60}
//         renderColor="#000"
//         renderText="📍" // Pin emoji for draggable item
//         onDragRelease={(e, gestureState) => handleDrop(0, e, gestureState)}
//       />
//       <DraggableWrapper
//         x={120}
//         y={50} // Initial position of the second draggable emoji
//         renderSize={60}
//         renderColor="#000"
//         renderText="📍" // Pin emoji for draggable item
//         onDragRelease={(e, gestureState) => handleDrop(1, e, gestureState)}
//       />
//       <DraggableWrapper
//         x={200}
//         y={50} // Initial position of the third draggable emoji
//         renderSize={60}
//         renderColor="#000"
//         renderText="📍" // Pin emoji for draggable item
//         onDragRelease={(e, gestureState) => handleDrop(2, e, gestureState)}
//       />

//       {/* image india map */}
//       <Image
//         style={styles.tinyLogo}
//         source={{
//           uri: "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/11-2024-9-723-indiaMap.gif", // India map image URL
//         }}
//       />

//       {/* Target Drop Boxes */}
//       <DropBox
//         boxIndex={0}
//         x={50} // Position of the first drop box
//         y={500}
//         handleDrop={handleDrop}
//         isDroppedCorrectly={isDroppedCorrectly[0]}
//         coordinates={coordinates[0]}
//         droppedText={droppedTexts[0]} // Pass dropped text for first box
//         // imageUri="https://via.placeholder.com/100" // Image URI for the first box
//       />
//       <DropBox
//         boxIndex={1}
//         x={180} // Position of the second drop box
//         y={500}
//         handleDrop={handleDrop}
//         isDroppedCorrectly={isDroppedCorrectly[1]}
//         coordinates={coordinates[1]}
//         droppedText={droppedTexts[1]} // Pass dropped text for second box
//         // imageUri="https://via.placeholder.com/100" // Image URI for the second box
//       />
//       <DropBox
//         boxIndex={2}
//         x={310} // Position of the third drop box
//         y={500}
//         handleDrop={handleDrop}
//         isDroppedCorrectly={isDroppedCorrectly[2]}
//         coordinates={coordinates[2]}
//         droppedText={droppedTexts[2]} // Pass dropped text for third box
//         // imageUri="https://via.placeholder.com/100" // Image URI for the third box
//       />

//       {/* Text showing drop result */}
//       {droppedTexts.map(
//         (text, index) =>
//           !isDroppedCorrectly[index] &&
//           text && (
//             <Text key={index} style={styles.resultText}>
//               {text}
//             </Text>
//           )
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f5f5f5",
//     position: "relative", // Allow positioning of components in absolute positions
//   },
//   title: {
//     marginBottom: 20,
//   },
//   boxContainer: {
//     position: "absolute",
//   },
//   dropImage: {
//     width: 100,
//     height: 100,
//     resizeMode: "contain", // Ensures the image fits within the box
//     marginBottom: 10, // Space between image and the box
//   },
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: "#f2f2f2",
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 2,
//     borderColor: "#000",
//     padding: 2,
//   },
//   boxText: {
//     color: "#555",
//   },
//   droppedText: {
//     color: "green",
//     position: "absolute",
//     top: -30, // Position the dropped text above the box
//     textAlign: "center",
//     fontSize: 16,
//   },
//   resultText: {
//     color: "red",
//     marginTop: 20,
//   },
// });

// export default App;

import React, { useState } from "react";
import { View, Text, Alert, StyleSheet, Image } from "react-native";
import { Card } from "react-native-paper";
import Draggable from "react-native-draggable";

// DraggableWrapper component with default parameters
const DraggableWrapper = ({
  renderSize = 60, // Default size of the draggable element
  renderColor = "#000", // Default color
  renderText = "📍", // Default text for draggable element (Pin Emoji)
  onDragRelease, // Function to handle the release of the draggable item
  minX = 0, // Minimum X position
  minY = 0, // Minimum Y position
  x = 150, // Initial X position of the draggable element
  y = 50, // Initial Y position of the draggable element
  ...props // Other props passed to Draggable component
}) => {
  return (
    <Draggable
      x={x}
      y={y}
      renderSize={renderSize}
      renderColor={renderColor}
      renderText={renderText}
      onDragRelease={onDragRelease}
      minX={minX}
      minY={minY}
      {...props} // Pass any other props
    />
  );
};

// DropBox component to handle the drop logic and position
const DropBox = ({
  boxIndex,
  x,
  y,
  handleDrop,
  isDroppedCorrectly,
  coordinates,
  droppedText,
  imageUri,
}) => {
  return (
    <View style={[styles.boxContainer, { left: x, top: y }]}>
      {/* Show Image before Drop Box */}
      <Image source={{ uri: imageUri }} style={styles.dropImage} />

      <Card style={styles.box}>
        {/* <Text style={styles.boxText}>Drop the pin here</Text> */}
        {/* Show the dropped text above the box if dropped correctly */}
        {isDroppedCorrectly && droppedText && (
          <Text style={styles.droppedText}>{droppedText}</Text>
        )}
      </Card>
    </View>
  );
};

const App = () => {
  const [droppedTexts, setDroppedTexts] = useState([null, null, null]); // Store the dropped text messages for each draggable
  const [isDroppedCorrectly, setIsDroppedCorrectly] = useState([
    false,
    false,
    false,
  ]); // Track if each text is dropped correctly
  const [coordinates, setCoordinates] = useState([null, null, null]); // Store coordinates of the drops

  // Function to handle when the text is dropped
  const handleDrop = (index, e, gestureState) => {
    // Define the target box areas (coordinates)
    const boxes = [
      { left: 100, right: 470, top: 500, bottom: 700 }, // First box coordinates
      { left: 150, right: 450, top: 500, bottom: 700 }, // Second box coordinates
      { left: 200, right: 600, top: 400, bottom: 600 }, // Third box coordinates
    ];

    // Get the drop coordinates
    const dropX = gestureState.moveX;
    const dropY = gestureState.moveY;

    // Check if the dropped text is within the corresponding box
    const { left, right, top, bottom } = boxes[index];
    if (dropX >= left && dropX <= right && dropY >= top && dropY <= bottom) {
      // Correct drop
      const updatedIsDropped = [...isDroppedCorrectly];
      const updatedDroppedTexts = [...droppedTexts];
      const updatedCoordinates = [...coordinates];

      updatedIsDropped[index] = true;
      updatedDroppedTexts[
        index
      ] = ``; // Set the text of the draggable element as Pin Emoji
      updatedCoordinates[index] = { x: dropX, y: dropY };

      setIsDroppedCorrectly(updatedIsDropped);
      setDroppedTexts(updatedDroppedTexts);
      setCoordinates(updatedCoordinates);

      Alert.alert("You dropped the pin correctly!", `x: ${dropX}, y: ${dropY}`);
    } else {
      // Incorrect drop
      const updatedIsDropped = [...isDroppedCorrectly];
      const updatedDroppedTexts = [...droppedTexts];
      const updatedCoordinates = [...coordinates];

      updatedIsDropped[index] = false;
      updatedDroppedTexts[
        index
      ] = `Try again! Last drop at (x: ${dropX}, y: ${dropY})`;
      updatedCoordinates[index] = { x: dropX, y: dropY };

      setIsDroppedCorrectly(updatedIsDropped);
      setDroppedTexts(updatedDroppedTexts);
      setCoordinates(updatedCoordinates);

      Alert.alert("Try again!", `x: ${dropX}, y: ${dropY}`);
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Drag the pin emoji into the boxes</Text> */}

      {/* Draggable Emojis (Pin Emoji 📍) */}
      <DraggableWrapper
        x={50}
        y={50} // Initial position of the first draggable emoji
        renderSize={60}
        renderColor="transparent"
        renderText="📍" // Pin emoji for draggable item
        onDragRelease={(e, gestureState) => handleDrop(0, e, gestureState)}
      />
      <DraggableWrapper
        x={120}
        y={50} // Initial position of the second draggable emoji
        renderSize={60}
        renderColor="transparent"
        renderText="📍" // Pin emoji for draggable item
        onDragRelease={(e, gestureState) => handleDrop(1, e, gestureState)}
      />
      <DraggableWrapper
        x={200}
        y={50} // Initial position of the third draggable emoji
        renderSize={60}
        renderColor="transparent"
        renderText="📍" // Pin emoji for draggable item
        onDragRelease={(e, gestureState) => handleDrop(2, e, gestureState)}
      />

      {/* image india map */}
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/11-2024-9-723-indiaMap.gif", // India map image URL
        }}
      />

      {/* Target Drop Boxes */}
      <DropBox
        boxIndex={0}
        x={70} // Position of the first drop box
        y={350}
        handleDrop={handleDrop}
        isDroppedCorrectly={isDroppedCorrectly[0]}
        coordinates={coordinates[0]}
        droppedText={droppedTexts[0]} // Pass dropped text for first box
        // imageUri="https://via.placeholder.com/100" // Image URI for the first box
      />
      <DropBox
        boxIndex={1}
        x={130} // Position of the second drop box
        y={280}
        handleDrop={handleDrop}
        isDroppedCorrectly={isDroppedCorrectly[1]}
        coordinates={coordinates[1]}
        droppedText={droppedTexts[1]} // Pass dropped text for second box
        // imageUri="https://via.placeholder.com/100" // Image URI for the second box
      />
      <DropBox
        boxIndex={2}
        x={160} // Position of the third drop box
        y={200}
        handleDrop={handleDrop}
        isDroppedCorrectly={isDroppedCorrectly[2]}
        coordinates={coordinates[2]}
        droppedText={droppedTexts[2]} // Pass dropped text for third box
        // imageUri="https://via.placeholder.com/100" // Image URI for the third box
      />

      {/* Text showing drop result */}
      {droppedTexts.map(
        (text, index) =>
          !isDroppedCorrectly[index] &&
          text && (
            <Text key={index} style={styles.resultText}>
              {text}
            </Text>
          )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    position: "relative", // Allow positioning of components in absolute positions
  },
  title: {
    marginBottom: 20,
  },
  boxContainer: {
    position: "absolute",
  },
  dropImage: {
    width: 100,
    height: 100,
    resizeMode: "contain", // Ensures the image fits within the box
    marginBottom: 10, // Space between image and the box
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "transparent",
    padding: 2,
  },
  boxText: {
    color: "#555",
  },
  droppedText: {
    color: "green",
    position: "absolute",
    top: -30, // Position the dropped text above the box
    textAlign: "center",
    fontSize: 16,
  },
  tinyLogo: {
    width: "100%",
    height: 600, // Set height for the image
    position: "absolute",
    top: 150,
    // marginLeft: 20,
    zIndex: -1, // Ensure the image stays in the background
  },
  resultText: {
    color: "red",
    marginTop: 20,
  },
});

export default App;
