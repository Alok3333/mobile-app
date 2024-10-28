// import React from "react";
// import { StyleSheet, View, FlatList } from "react-native";
// import { Card, Text, Avatar, IconButton } from "react-native-paper";
// import { useNavigation } from "@react-navigation/native";

// const CourseListLms = () => {
//   const navigation = useNavigation();
//   // Sample course data
//   const courses = [
//     { id: "1", title: "React Native Basics", subtitle: "Rahul k" },
//     { id: "2", title: "Advanced React Native", subtitle: "Pooja v" },
//     { id: "3", title: "State Management with Redux", subtitle: "Vinay p" },
//     { id: "4", title: "Building Mobile Apps", subtitle: "Gayatri m" },
//     { id: "5", title: "APIs and Networking", subtitle: "Swati r" },
//     // { id: "6", title: "Navigation in React Native", subtitle: "Sneha p" },
//     // { id: "7", title: "React Native Basics", subtitle: "Rahul k" },
//     // { id: "8", title: "Advanced React Native", subtitle: "Pooja v" },
//     // { id: "9", title: "State Management with Redux", subtitle: "Vinay p" },
//     // { id: "10", title: "Building Mobile Apps", subtitle: "Gayatri m" },
//     // { id: "11", title: "APIs and Networking", subtitle: "Swati r" },
//     // { id: "12", title: "Navigation in React Native", subtitle: "Sneha p" },
//   ];

//   // Render each course item
//   const renderItem = ({ item }) => (
//     <Card style={styles.card}>
//       <Card.Title
//         title={item.title}
//         subtitle={item.subtitle}
//         left={() => (
//           <Avatar.Icon icon="book" style={styles.icon} color="#FFC300" />
//         )}
//         titleStyle={styles.courseTitle}
//         subtitleStyle={styles.courseSubtitle}
//       />
//     </Card>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <IconButton
//           icon="arrow-left"
//           color="#fcfefa"
//           backgroundColor="#fcfefa"
//           onPress={() => navigation.goBack()}
//         />
//       </View>
//       <FlatList
//         data={courses}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={styles.list}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#212640",
//   },
//   list: {
//     paddingBottom: 16,
//   },
//   card: {
//     marginVertical: 8,
//     borderRadius: 10,
//     elevation: 3, // Shadow effect
//   },
//   icon: {
//     marginRight: 10, // Add space between icon and text
//   },
//   courseTitle: {
//     marginLeft: 20,
//   },
//   courseSubtitle: {
//     color: "#555",
//     marginLeft: 20,
//   },
// });

// export default CourseListLms;

import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Card, Text, Avatar, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const CourseListLms = () => {
  const navigation = useNavigation();
  const courses = [
    { id: "1", title: "React Native Basics", subtitle: "Rahul k" },
    { id: "2", title: "Advanced React Native", subtitle: "Pooja v" },
    // Add more courses...
  ];

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Title
        title={item.title}
        subtitle={item.subtitle}
        left={() => (
          <Avatar.Icon icon="book" style={styles.icon} color="#FFC300" />
        )}
      />
    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton
          icon="arrow-left"
          color="#fcfefa"
          backgroundColor="#fcfefa"
          onPress={() => navigation.goBack()}
        />
      </View>
      <FlatList
        data={courses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#212640",
  },
  card: {
    marginVertical: 8,
    borderRadius: 10,
    elevation: 3,
  },
});

export default CourseListLms;

