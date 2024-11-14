// import { StyleSheet, View } from 'react-native';
// import { Text, Chip } from 'react-native-paper';
// import { Image } from 'expo-image';
// import React, { useState } from "react";
// import Draggable from 'react-native-draggable';

// export default function testdrag() {
//   const zones = {
//     'Gastric Juice': 1,
//     'Milk of magnesia': 4,
//     'Pure Water, Blood': 3,
//     'Lemon Juice': 2,
//     'Sodium hydroxide solution': 5,
//   };

//   const [correctAnswers, setCorrectAnswers] = useState({
//     'Gastric Juice': false,
//     'Milk of magnesia': false,
//     'Pure Water, Blood': false,
//     'Lemon Juice': false,
//     'Sodium hydroxide solution': false,
//   });

//   const checkCoordinates = (x, y, solutionText) => {
//     let zone = null;

//     // Define the coordinates for each drop zone
//     if (y > 500 && y < 560 && x > 30 && x < 210) {
//       zone = 1; // Drop Zone 1
//     } else if (y > 500 && y < 560 && x > 230 && x < 410) {
//       zone = 2; // Drop Zone 2
//     } else if (y > 580 && y < 640 && x > 230 && x < 410) {
//       zone = 3; // Drop Zone 3
//     } else if (y > 580 && y < 640 && x > 30 && x < 210) {
//       zone = 4; // Drop Zone 4
//     } else if (y > 660 && y < 720 && x > 130 && x < 310) {
//       zone = 5; // Drop Zone 5
//     }

//     if (zones[solutionText] === zone) {
//       setCorrectAnswers(prevState => ({
//         ...prevState,
//         [solutionText]: true,
//       }));
//       alert('Congratulations, correct answer');
//     } else {
//       setCorrectAnswers(prevState => ({
//         ...prevState,
//         [solutionText]: false,
//       }));
//       alert('Oh oh! Please try again!!');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Drop Zones */}
//       <View style={{ position: 'absolute', left: 30, top: 500, width: 180, height: 60, backgroundColor: 'lightblue' }}>
//         <Text variant="bodySmall" style={{ marginTop: 10, alignSelf: 'center' }}> Drop zone 1</Text>
//       </View>
//       <View style={{ position: 'absolute', left: 230, top: 500, width: 180, height: 60, backgroundColor: 'lightblue' }}>
//         <Text variant="bodySmall" style={{ marginTop: 10, alignSelf: 'center' }}> Drop zone 2</Text>
//       </View>
//       <View style={{ position: 'absolute', left: 230, top: 580, width: 180, height: 60, backgroundColor: 'lightblue' }}>
//         <Text variant="bodySmall" style={{ marginTop: 10, alignSelf: 'center' }}> Drop zone 3</Text>
//       </View>
//       <View style={{ position: 'absolute', left: 30, top: 580, width: 180, height: 60, backgroundColor: 'lightblue' }}>
//         <Text variant="bodySmall" style={{ marginTop: 10, alignSelf: 'center' }}> Drop zone 4</Text>
//       </View>
//       <View style={{ position: 'absolute', left: 130, top: 660, width: 180, height: 60, backgroundColor: 'lightblue' }}>
//         <Text variant="bodySmall" style={{ marginTop: 10, alignSelf: 'center' }}> Drop zone 5</Text>
//       </View>

//       {/* Question */}
//       <View style={{ width: '100%', backgroundColor: '#F7F7F5', padding: 20, marginTop: 10 }}>
//         <Text variant="titleSmall" style={{ alignSelf: 'left', paddingTop: 0, paddingBottom: 0 }}>
//           Which category does this fungus belong to?
//         </Text>
//       </View>

//       {/* Image */}
//       <Image
//         style={{ width: 200, height: 200, marginTop: 30, alignSelf: 'center' }}
//         source="https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/11-2024-12-5046-OIG2.3M_.jpeg"
//         // placeholder={{ blurhash }}
//         contentFit="cover"
//         transition={1000}
//       />

//       <Draggable
//         x={10}
//         y={300}
//         renderSize={80}
//         onDragRelease={(ev, gh) => {
//           // Log the x and y coordinates of the drag
//           console.log(`x: ${gh.moveX}, y: ${gh.moveY}`);
//           checkCoordinates(gh.moveX, gh.moveY, 'Gastric Juice');
//         }}
//       >
//         <Chip style={{ marginTop: 20, backgroundColor: correctAnswers['Gastric Juice'] ? 'green' : 'gray' }}>Gastric Juice</Chip>
//       </Draggable>

//       <Draggable
//         x={270}
//         y={300}
//         renderSize={80}
//         onDragRelease={(ev, gh) => {
//           // Log the x and y coordinates of the drag
//           console.log(`x: ${gh.moveX}, y: ${gh.moveY}`);
//           checkCoordinates(gh.moveX, gh.moveY, 'Milk of magnesia');
//         }}
//       >
//         <Chip icon="school" style={{ marginTop: 20, backgroundColor: correctAnswers['Milk of magnesia'] ? 'green' : 'gray' }}>
//           Milk of magnesia
//         </Chip>
//       </Draggable>

//       <Draggable
//         x={10}
//         y={340}
//         renderSize={80}
//         onDragRelease={(ev, gh) => {
//           // Log the x and y coordinates of the drag
//           console.log(`x: ${gh.moveX}, y: ${gh.moveY}`);
//           checkCoordinates(gh.moveX, gh.moveY, 'Pure Water, Blood');
//         }}
//       >
//         <Chip icon="school" style={{ marginTop: 20, backgroundColor: correctAnswers['Pure Water, Blood'] ? 'green' : 'gray' }}>
//           Pure Water, Blood
//         </Chip>
//       </Draggable>

//       <Draggable
//         x={130}
//         y={300}
//         renderSize={80}
//         onDragRelease={(ev, gh) => {
//           // Log the x and y coordinates of the drag
//           console.log(`x: ${gh.moveX}, y: ${gh.moveY}`);
//           checkCoordinates(gh.moveX, gh.moveY, 'Lemon Juice');
//         }}
//       >
//         <Chip icon="school" style={{ marginTop: 20, backgroundColor: correctAnswers['Lemon Juice'] ? 'green' : 'gray' }}>
//           Lemon Juice
//         </Chip>
//       </Draggable>

//       <Draggable
//         x={190}
//         y={340}
//         renderSize={80}
//         onDragRelease={(ev, gh) => {
//           // Log the x and y coordinates of the drag
//           console.log(`x: ${gh.moveX}, y: ${gh.moveY}`);
//           checkCoordinates(gh.moveX, gh.moveY, 'Sodium hydroxide solution');
//         }}
//       >
//         <Chip icon="school" style={{ marginTop: 20, backgroundColor: correctAnswers['Sodium hydroxide solution'] ? 'green' : 'gray' }}>
//           Sodium hydroxide solution
//         </Chip>
//       </Draggable>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 10,
//   },
// });

import { StyleSheet, View } from 'react-native';
import { Text, Chip } from 'react-native-paper';
import { Image } from 'expo-image';
import React, { useState } from "react";
import Draggable from 'react-native-draggable';

export default function testdrag() {
  const zones = {
    'Gastric Juice': 1,
    'Milk of magnesia': 4,
    'Pure Water, Blood': 3,
    'Lemon Juice': 2,
    'Sodium hydroxide solution': 5,
  };

  const [correctAnswers, setCorrectAnswers] = useState({
    'Gastric Juice': false,
    'Milk of magnesia': false,
    'Pure Water, Blood': false,
    'Lemon Juice': false,
    'Sodium hydroxide solution': false,
  });

  const checkCoordinates = (x, y, solutionText) => {
    let zone = null;

    // Define the coordinates for each drop zone
    if (y > 500 && y < 560 && x > 30 && x < 210) {
      zone = 1; // Drop Zone 1
    } else if (y > 500 && y < 560 && x > 230 && x < 410) {
      zone = 2; // Drop Zone 2
    } else if (y > 580 && y < 640 && x > 230 && x < 410) {
      zone = 3; // Drop Zone 3
    } else if (y > 580 && y < 640 && x > 30 && x < 210) {
      zone = 4; // Drop Zone 4
    } else if (y > 660 && y < 720 && x > 130 && x < 310) {
      zone = 5; // Drop Zone 5
    }

    if (zones[solutionText] === zone) {
      setCorrectAnswers(prevState => ({
        ...prevState,
        [solutionText]: true,
      }));
      alert('Congratulations, correct answer');
    } else {
      setCorrectAnswers(prevState => ({
        ...prevState,
        [solutionText]: false,
      }));
      alert('Oh oh! Please try again!!');
    }
  };

  return (
    <View style={styles.container}>
      {/* Drop Zones */}
      <View style={{ position: 'absolute', left: 30, top: 500, width: 180, height: 60, backgroundColor: 'lightblue' }}>
        <Text variant="bodySmall" style={{ marginTop: 10, alignSelf: 'center' }}> Drop zone 1</Text>
      </View>
      <View style={{ position: 'absolute', left: 230, top: 500, width: 180, height: 60, backgroundColor: 'lightblue' }}>
        <Text variant="bodySmall" style={{ marginTop: 10, alignSelf: 'center' }}> Drop zone 2</Text>
      </View>
      <View style={{ position: 'absolute', left: 230, top: 580, width: 180, height: 60, backgroundColor: 'lightblue' }}>
        <Text variant="bodySmall" style={{ marginTop: 10, alignSelf: 'center' }}> Drop zone 3</Text>
      </View>
      <View style={{ position: 'absolute', left: 30, top: 580, width: 180, height: 60, backgroundColor: 'lightblue' }}>
        <Text variant="bodySmall" style={{ marginTop: 10, alignSelf: 'center' }}> Drop zone 4</Text>
      </View>
      <View style={{ position: 'absolute', left: 130, top: 660, width: 180, height: 60, backgroundColor: 'lightblue' }}>
        <Text variant="bodySmall" style={{ marginTop: 10, alignSelf: 'center' }}> Drop zone 5</Text>
      </View>

      {/* Question */}
      <View style={{ width: '100%', backgroundColor: '#F7F7F5', padding: 20, marginTop: 10 }}>
        <Text variant="titleSmall" style={{ alignSelf: 'left', paddingTop: 0, paddingBottom: 0 }}>
          Which category does this fungus belong to?
        </Text>
      </View>

      {/* Image */}
      <Image
        style={{ width: 200, height: 200, marginTop: 30, alignSelf: 'center' }}
        source="https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/11-2024-12-5046-OIG2.3M_.jpeg"
        contentFit="cover"
        transition={1000}
      />

      {/* Draggable Items */}
      <Draggable
        x={10}
        y={300}
        renderSize={80}
        onDragRelease={(ev, gh) => {
          // Validate that 'gh' exists and has 'moveX' and 'moveY'
          if (gh && typeof gh.moveX === 'number' && typeof gh.moveY === 'number') {
            console.log(`x: ${gh.moveX}, y: ${gh.moveY}`);
            checkCoordinates(gh.moveX, gh.moveY, 'Gastric Juice');
          } else {
            console.error('Invalid data in Draggable event:', gh);
          }
        }}
      >
        <Chip style={{ marginTop: 20, backgroundColor: correctAnswers['Gastric Juice'] ? 'green' : 'gray' }}>Gastric Juice</Chip>
      </Draggable>

      <Draggable
        x={270}
        y={300}
        renderSize={80}
        onDragRelease={(ev, gh) => {
          // Validate that 'gh' exists and has 'moveX' and 'moveY'
          if (gh && typeof gh.moveX === 'number' && typeof gh.moveY === 'number') {
            console.log(`x: ${gh.moveX}, y: ${gh.moveY}`);
            checkCoordinates(gh.moveX, gh.moveY, 'Milk of magnesia');
          } else {
            console.error('Invalid data in Draggable event:', gh);
          }
        }}
      >
        <Chip icon="school" style={{ marginTop: 20, backgroundColor: correctAnswers['Milk of magnesia'] ? 'green' : 'gray' }}>
          Milk of magnesia
        </Chip>
      </Draggable>

      <Draggable
        x={10}
        y={340}
        renderSize={80}
        onDragRelease={(ev, gh) => {
          // Validate that 'gh' exists and has 'moveX' and 'moveY'
          if (gh && typeof gh.moveX === 'number' && typeof gh.moveY === 'number') {
            console.log(`x: ${gh.moveX}, y: ${gh.moveY}`);
            checkCoordinates(gh.moveX, gh.moveY, 'Pure Water, Blood');
          } else {
            console.error('Invalid data in Draggable event:', gh);
          }
        }}
      >
        <Chip icon="school" style={{ marginTop: 20, backgroundColor: correctAnswers['Pure Water, Blood'] ? 'green' : 'gray' }}>
          Pure Water, Blood
        </Chip>
      </Draggable>

      <Draggable
        x={130}
        y={300}
        renderSize={80}
        onDragRelease={(ev, gh) => {
          // Validate that 'gh' exists and has 'moveX' and 'moveY'
          if (gh && typeof gh.moveX === 'number' && typeof gh.moveY === 'number') {
            console.log(`x: ${gh.moveX}, y: ${gh.moveY}`);
            checkCoordinates(gh.moveX, gh.moveY, 'Lemon Juice');
          } else {
            console.error('Invalid data in Draggable event:', gh);
          }
        }}
      >
        <Chip icon="school" style={{ marginTop: 20, backgroundColor: correctAnswers['Lemon Juice'] ? 'green' : 'gray' }}>
          Lemon Juice
        </Chip>
      </Draggable>

      <Draggable
        x={190}
        y={340}
        renderSize={80}
        onDragRelease={(ev, gh) => {
          // Validate that 'gh' exists and has 'moveX' and 'moveY'
          if (gh && typeof gh.moveX === 'number' && typeof gh.moveY === 'number') {
            console.log(`x: ${gh.moveX}, y: ${gh.moveY}`);
            checkCoordinates(gh.moveX, gh.moveY, 'Sodium hydroxide solution');
          } else {
            console.error('Invalid data in Draggable event:', gh);
          }
        }}
      >
        <Chip icon="school" style={{ marginTop: 20, backgroundColor: correctAnswers['Sodium hydroxide solution'] ? 'green' : 'gray' }}>
          Sodium hydroxide solution
        </Chip>
      </Draggable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
});
