// import React, { useState } from "react";
// import {
//   View,
//   StyleSheet,
//   Dimensions,
//   FlatList,
//   TouchableOpacity,
// } from "react-native";
// import { Button, Card, Text } from "react-native-paper";
// import DateTimePicker from "@react-native-community/datetimepicker"; // Expo DateTimePicker
// import moment from "moment"; // To handle date formatting
// import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient from Expo

// const screenWidth = Dimensions.get("window").width;
// const screenHeight = Dimensions.get("window").height;

// const MyClassScreen = () => {
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [classList, setClassList] = useState([]);

//   const allClasses = [
//     { id: 1, title: "Math 101", date: "2024-10-01" },
//     { id: 2, title: "Physics 202", date: "2024-10-02" },
//     { id: 3, title: "Chemistry 303", date: "2024-10-03" },
//     { id: 4, title: "Biology 404", date: "2024-10-04" },
//     { id: 5, title: "History 505", date: "2024-10-05" },
//     { id: 6, title: "Geography 606", date: "2024-10-06" },
//     { id: 7, title: "English Literature 101", date: "2024-10-07" },
//     { id: 8, title: "Philosophy 202", date: "2024-10-08" },
//     { id: 9, title: "Computer Science 303", date: "2024-10-09" },
//     { id: 10, title: "Psychology 404", date: "2024-10-10" },
//     { id: 11, title: "Sociology 505", date: "2024-10-10" },
//     { id: 12, title: "Political Science 606", date: "2024-10-12" },
//     { id: 13, title: "Economics 707", date: "2024-10-13" },
//     { id: 14, title: "Art History 808", date: "2024-10-14" },
//     { id: 15, title: "Music Theory 909", date: "2024-10-15" },
//     { id: 16, title: "Engineering 101", date: "2024-10-16" },
//     { id: 17, title: "Architecture 202", date: "2024-10-17" },
//     { id: 18, title: "Statistics 303", date: "2024-10-18" },
//     { id: 19, title: "Business Management 404", date: "2024-10-19" },
//     { id: 20, title: "Environmental Science 505", date: "2024-10-20" },
//     { id: 21, title: "Law 606", date: "2024-10-21" },
//     { id: 22, title: "Anthropology 707", date: "2024-10-22" },
//     { id: 23, title: "Linguistics 808", date: "2024-10-23" },
//     { id: 24, title: "Neuroscience 909", date: "2024-10-24" },
//     { id: 25, title: "Chemistry Lab 101", date: "2024-10-25" },
//     { id: 26, title: "Physics Lab 102", date: "2024-10-26" },
//     { id: 27, title: "Biology Lab 103", date: "2024-10-27" },
//     { id: 28, title: "Environmental Studies 104", date: "2024-10-28" },
//     { id: 29, title: "Modern Art 105", date: "2024-10-29" },
//     { id: 30, title: "Global Politics 106", date: "2024-10-30" },
//   ];

//   // Show date picker
//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   // Hide date picker
//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   // Handle date selection
//   const handleDateConfirm = (event, selectedDate) => {
//     if (selectedDate) {
//       setSelectedDate(selectedDate);
//     }
//     hideDatePicker();
//   };

//   // Filter classes based on the selected date
//   const filterClassesByDate = () => {
//     if (selectedDate) {
//       const startDate = moment(selectedDate).format("YYYY-MM-DD");
//       const today = moment().format("YYYY-MM-DD");

//       const filteredClasses = allClasses.filter((classItem) => {
//         const classDate = moment(classItem.date).format("YYYY-MM-DD");
//         return moment(classDate).isBetween(startDate, today, null, "[]");
//       });

//       setClassList(filteredClasses);
//     }
//   };

//   // Render individual class item
//   const renderClassItem = ({ item }) => (
//     <Card style={styles.classCard}>
//       <Card.Content>
//         <Text variant="titleLarge" style={styles.classTitle}>
//           {item.title}
//         </Text>
//         <Text style={styles.classDate}>
//           Date: {moment(item.date).format("LL")}
//         </Text>
//       </Card.Content>
//     </Card>
//   );

//   return (
//     <LinearGradient
//       colors={[
//         "#010219",
//         "#010219",
//         "#010219",
//         "#010219",
//         "#003491",
//         "#02bcb5",
//       ]} // Gradient colors, you can customize this
//       style={styles.container} // Apply Linear Gradient to the main container
//     >
//       <Text variant="headlineMedium" style={styles.title}>
//         My Classes
//       </Text>

//       {/* Button to select the date */}
//       <Button
//         mode="outlined"
//         onPress={showDatePicker}
//         style={styles.selectDateButton}
//       >
//         {selectedDate
//           ? `Selected Date: ${moment(selectedDate).format("YYYY-MM-DD")}`
//           : "Select a Date"}
//       </Button>

//       {/* Date Picker Modal */}
//       {isDatePickerVisible && (
//         <DateTimePicker
//           value={selectedDate || new Date()}
//           mode="date"
//           display="default"
//           onChange={handleDateConfirm}
//           maximumDate={new Date()} // Can't select future dates
//         />
//       )}

//       {/* Button to filter classes based on selected date */}
//       <Button
//         mode="contained"
//         onPress={filterClassesByDate}
//         style={styles.button}
//         labelStyle={styles.buttonLabel}
//       >
//         Show Classes
//       </Button>

//       {/* List of filtered classes */}
//       {classList.length > 0 ? (
//         <FlatList
//           data={classList}
//           renderItem={renderClassItem}
//           keyExtractor={(item) => item.id.toString()}
//           style={styles.classList}
//         />
//       ) : (
//         <Text style={styles.noClassesText}>
//           No classes available for the selected date.
//         </Text>
//       )}
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     textAlign: "center",
//     marginBottom: 20,
//     color: "#02bcb5",
//   },
//   selectDateButton: {
//     marginBottom: 20,
//     backgroundColor: "#fff",
//     borderColor: "#02bcb5",
//     borderWidth: 1,
//     height: 48,
//     justifyContent: "center",
//   },
//   button: {
//     marginBottom: 20,
//     backgroundColor: "#02bcb5",
//     borderRadius: 8,
//     height: 48,
//   },
//   buttonLabel: {
//     color: "#fff",
//   },
//   classList: {
//     marginTop: 10,
//   },
//   classCard: {
//     marginBottom: 15,
//     borderRadius: 8,
//     overflow: "hidden",
//     backgroundColor: "#fff",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3, // For Android shadow effect
//   },
//   classTitle: {
//     color: "#333",
//   },
//   classDate: {
//     color: "#777",
//   },
//   noClassesText: {
//     color: "#fff",
//     textAlign: "center",
//     marginTop: 30,
//   },
// });

// export default MyClassScreen;

import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Button, Card, Text } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker"; // Expo DateTimePicker
import moment from "moment"; // To handle date formatting
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient from Expo

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const MyClassScreen = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [classList, setClassList] = useState([]);

  const allClasses = [
    { id: 1, title: "Math 101", date: "2024-10-01" },
    { id: 2, title: "Physics 202", date: "2024-10-02" },
    { id: 3, title: "Chemistry 303", date: "2024-10-03" },
    { id: 4, title: "Biology 404", date: "2024-10-04" },
    { id: 5, title: "History 505", date: "2024-10-05" },
    { id: 6, title: "Geography 606", date: "2024-10-06" },
    { id: 7, title: "English Literature 101", date: "2024-10-07" },
    { id: 8, title: "Philosophy 202", date: "2024-10-08" },
    { id: 9, title: "Computer Science 303", date: "2024-10-09" },
    { id: 10, title: "Psychology 404", date: "2024-10-10" },
    { id: 11, title: "Sociology 505", date: "2024-10-10" },
    { id: 12, title: "Political Science 606", date: "2024-10-12" },
    { id: 13, title: "Economics 707", date: "2024-10-13" },
    { id: 14, title: "Art History 808", date: "2024-10-14" },
    { id: 15, title: "Music Theory 909", date: "2024-10-15" },
    { id: 16, title: "Engineering 101", date: "2024-10-16" },
    { id: 17, title: "Architecture 202", date: "2024-10-17" },
    { id: 18, title: "Statistics 303", date: "2024-10-18" },
    { id: 19, title: "Business Management 404", date: "2024-10-19" },
    { id: 20, title: "Environmental Science 505", date: "2024-10-20" },
    { id: 21, title: "Law 606", date: "2024-10-21" },
    { id: 22, title: "Anthropology 707", date: "2024-10-22" },
    { id: 23, title: "Linguistics 808", date: "2024-10-23" },
    { id: 24, title: "Neuroscience 909", date: "2024-10-24" },
    { id: 25, title: "Chemistry Lab 101", date: "2024-10-25" },
    { id: 26, title: "Physics Lab 102", date: "2024-10-26" },
    { id: 27, title: "Biology Lab 103", date: "2024-10-27" },
    { id: 28, title: "Environmental Studies 104", date: "2024-10-28" },
    { id: 29, title: "Modern Art 105", date: "2024-10-29" },
    { id: 30, title: "Global Politics 106", date: "2024-10-30" },

    // Adding some classes for November 2024
    { id: 31, title: "Philosophy 101", date: "2024-11-01" },
    { id: 32, title: "World History 202", date: "2024-11-02" },
    { id: 33, title: "Biology 303", date: "2024-11-03" },
    { id: 34, title: "Psychology 505", date: "2024-11-04" },
    { id: 35, title: "Business Law 606", date: "2024-11-05" },
    { id: 36, title: "Business Law 607", date: "2024-11-06" },
    { id: 37, title: "Business Law 608", date: "2024-11-06" },
    { id: 38, title: "Business Law 609", date: "2024-11-06" },
    { id: 39, title: "Philosophy 102", date: "2024-11-07" },
    { id: 40, title: "Philosophy 201", date: "2024-11-07" },
  ];

  // Show date picker
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  // Hide date picker
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  // Handle date selection
  const handleDateConfirm = (event, selectedDate) => {
    if (selectedDate) {
      setSelectedDate(selectedDate);
    }
    hideDatePicker();
  };

  // Filter classes based on the selected date
  const filterClassesByDate = (date) => {
    const startDate = moment(date).format("YYYY-MM-DD");
    const today = moment().format("YYYY-MM-DD");

    const filteredClasses = allClasses.filter((classItem) => {
      const classDate = moment(classItem.date).format("YYYY-MM-DD");
      return moment(classDate).isBetween(startDate, today, null, "[]");
    });

    setClassList(filteredClasses);
  };

  // Set default class list to today's date
  useEffect(() => {
    const today = moment().format("YYYY-MM-DD");
    filterClassesByDate(today);
  }, []);

  // Render individual class item
  const renderClassItem = ({ item }) => (
    <Card style={styles.classCard}>
      <Card.Content>
        <Text variant="titleLarge" style={styles.classTitle}>
          {item.title}
        </Text>
        <Text style={styles.classDate}>
          Date: {moment(item.date).format("LL")}
        </Text>
      </Card.Content>
    </Card>
  );

  return (
    <LinearGradient
      colors={[
        "#010219",
        "#010219",
        "#010219",
        "#010219",
        "#003491",
        "#02bcb5",
      ]} // Gradient colors, you can customize this
      style={styles.container} // Apply Linear Gradient to the main container
    >
      <Text variant="headlineMedium" style={styles.title}>
        My Classes
      </Text>

      {/* Button to select the date */}
      <Button
        mode="outlined"
        onPress={showDatePicker}
        style={styles.selectDateButton}
      >
        {selectedDate
          ? `Selected Date: ${moment(selectedDate).format("YYYY-MM-DD")}`
          : "Select a Date"}
      </Button>

      {/* Date Picker Modal */}
      {isDatePickerVisible && (
        <DateTimePicker
          value={selectedDate || new Date()}
          mode="date"
          display="default"
          onChange={handleDateConfirm}
          maximumDate={new Date()} // Can't select future dates
        />
      )}

      {/* Button to filter classes based on selected date */}
      <Button
        mode="contained"
        onPress={() => filterClassesByDate(selectedDate || moment())}
        style={styles.button}
        labelStyle={styles.buttonLabel}
      >
        Show Classes
      </Button>

      {/* List of filtered classes */}
      <FlatList
        data={classList}
        renderItem={renderClassItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.classList}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
    color: "#02bcb5",
  },
  selectDateButton: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderColor: "#02bcb5",
    borderWidth: 1,
    height: 48,
    justifyContent: "center",
  },
  button: {
    marginBottom: 20,
    backgroundColor: "#02bcb5",
    borderRadius: 8,
    height: 48,
  },
  buttonLabel: {
    color: "#fff",
  },
  classList: {
    marginTop: 10,
  },
  classCard: {
    marginBottom: 15,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // For Android shadow effect
  },
  classTitle: {
    color: "#333",
  },
  classDate: {
    color: "#777",
  },
});

export default MyClassScreen;
