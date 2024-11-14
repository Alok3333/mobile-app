import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Button, TextInput, Card, Text } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient

const MentorScreen = () => {
  // State to hold the query input and the list of queries
  const [query, setQuery] = useState("");
  const [queriesList, setQueriesList] = useState([]);

  // Function to handle the submission of a query
  const handleSendQuery = () => {
    if (query.trim()) {
      setQueriesList([query.trim(), ...queriesList]); // Add new query at the top of the list
      setQuery(""); // Clear the input field after sending the query
    }
  };

  // Render each query item in the list
  const renderQueryItem = ({ item }) => (
    <Card style={styles.queryCard}>
      <Card.Content>
        <Text style={styles.queryText}>{item}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <LinearGradient
      // Define the colors and start/end positions for the gradient
      colors={[
        "#010219",
        "#010219",
        "#010219",
        "#010219",
        "#003491",
        "#02bcb5",
      ]}
      style={styles.container}
    >
      <Text variant="headlineSmall" style={styles.title}>
        Ask Your Mentor
      </Text>

      {/* Input field for the query */}
      <TextInput
        placeholder="Write your query"
        value={query}
        onChangeText={setQuery}
        style={styles.input}
        mode="outlined"
        multiline
        numberOfLines={4}
        activeOutlineColor="#02bcb5" // Color when the input is focused
      />

      {/* Send button */}
      <Button
        mode="contained"
        onPress={handleSendQuery}
        style={styles.sendButton}
        labelStyle={styles.sendButtonText}
      >
        Send Query
      </Button>

      {/* List of all sent queries */}
      <Text style={{ color: "#fff" }}>Previous queries :</Text>
      <FlatList
        data={queriesList}
        renderItem={renderQueryItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.queriesList}
        ListEmptyComponent={
          <Text variant="titleSmall" style={styles.noQueriesText}>
            No queries sent yet.
          </Text>
        }
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
    color: "#fff",
  },
  input: {
    marginBottom: 20,
    backgroundColor: "white",
    height: 100,
    paddingLeft: 10,
    borderRadius: 8,
    borderColor: "#02bcb5",
  },
  sendButton: {
    marginBottom: 20,
    backgroundColor: "#02bcb5",
    height: 48,
    borderRadius: 8,
  },
  sendButtonText: {
    color: "#fff",
    // fontWeight: "bold",
  },
  queriesList: {
    marginTop: 20,
  },
  queryCard: {
    marginBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // For Android shadow effect
  },
  queryText: {
    // fontSize: 16,
    color: "#333",
  },
  noQueriesText: {
    color: "#02bcb5",
    textAlign: "center",
    marginTop: 30,
  },
});

export default MentorScreen;

// import React, { useState } from "react";
// import { View, StyleSheet, FlatList } from "react-native";
// import { Button, TextInput, Card, Text } from "react-native-paper";
// import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient

// const MentorScreen = () => {
//   // State to hold the query input and the list of queries with responses
//   const [query, setQuery] = useState("");
//   const [queriesList, setQueriesList] = useState([]);
//   const [response, setResponse] = useState(""); // State to hold the response input for each query

//   // Function to handle the submission of a query
//   const handleSendQuery = () => {
//     if (query.trim()) {
//       setQueriesList([{ query: query.trim(), response: null }, ...queriesList]); // Add new query to the top
//       setQuery(""); // Clear the input field after sending the query
//     }
//   };

//   // Function to handle response submission for a query
//   const handleSendResponse = (index, responseText) => {
//     // Create a copy of the queries list with the updated response
//     const updatedQueriesList = [...queriesList];
//     updatedQueriesList[index].response = responseText;

//     // Update the queries list with the new response
//     setQueriesList(updatedQueriesList);
//     setResponse(""); // Clear the response input
//   };

//   // Render each query item in the list along with its response
//   const renderQueryItem = ({ item, index }) => (
//     <Card style={styles.queryCard}>
//       <Card.Content>
//         <Text style={styles.queryText}>Query: {item.query}</Text>
        
//         {/* Display response if it exists */}
//         {item.response ? (
//           <Text style={styles.responseText}>Response: {item.response}</Text>
//         ) : (
//           <Text style={styles.noResponseText}>No response yet.</Text>
//         )}

//         {/* TextInput to submit response */}
//         {!item.response && (
//           <TextInput
//             placeholder="Write your response"
//             value={response}
//             onChangeText={setResponse}
//             style={styles.responseInput}
//             mode="outlined"
//             multiline
//             numberOfLines={4}
//             activeOutlineColor="#02bcb5"
//           />
//         )}

//         {/* Button to send the response */}
//         {!item.response && (
//           <Button
//             mode="contained"
//             onPress={() => handleSendResponse(index, response)}
//             style={styles.sendButton}
//             labelStyle={styles.sendButtonText}
//           >
//             Send Response
//           </Button>
//         )}
//       </Card.Content>
//     </Card>
//   );

//   return (
//     <LinearGradient
//       colors={["#010219", "#010219", "#010219", "#010219", "#003491", "#02bcb5"]}
//       style={styles.container}
//     >
//       <Text variant="headlineSmall" style={styles.title}>
//         Ask Your Mentor
//       </Text>

//       {/* Input field for the query */}
//       <TextInput
//         placeholder="Write your query"
//         value={query}
//         onChangeText={setQuery}
//         style={styles.input}
//         mode="outlined"
//         multiline
//         numberOfLines={4}
//         activeOutlineColor="#02bcb5"
//       />

//       {/* Send button */}
//       <Button
//         mode="contained"
//         onPress={handleSendQuery}
//         style={styles.sendButton}
//         labelStyle={styles.sendButtonText}
//       >
//         Send Query
//       </Button>

//       {/* List of all sent queries */}
//       <Text style={{ color: "#fff" }}>Previous queries:</Text>
//       <FlatList
//         data={queriesList}
//         renderItem={renderQueryItem}
//         keyExtractor={(item, index) => index.toString()}
//         style={styles.queriesList}
//         ListEmptyComponent={
//           <Text variant="titleSmall" style={styles.noQueriesText}>
//             No queries sent yet.
//           </Text>
//         }
//       />
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
//     color: "#fff",
//   },
//   input: {
//     marginBottom: 20,
//     backgroundColor: "white",
//     height: 100,
//     paddingLeft: 10,
//     borderRadius: 8,
//     borderColor: "#02bcb5",
//   },
//   sendButton: {
//     marginBottom: 20,
//     backgroundColor: "#02bcb5",
//     height: 48,
//     borderRadius: 8,
//   },
//   sendButtonText: {
//     color: "#fff",
//   },
//   queriesList: {
//     marginTop: 20,
//   },
//   queryCard: {
//     marginBottom: 15,
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//   },
//   queryText: {
//     color: "#333",
//     marginBottom: 10,
//   },
//   responseText: {
//     color: "#333",
//     marginTop: 10,
//   },
//   noResponseText: {
//     color: "#777",
//     marginTop: 10,
//   },
//   responseInput: {
//     marginTop: 10,
//     backgroundColor: "white",
//     height: 80,
//     paddingLeft: 10,
//     borderRadius: 8,
//     borderColor: "#02bcb5",
//   },
//   noQueriesText: {
//     color: "#02bcb5",
//     textAlign: "center",
//     marginTop: 30,
//   },
// });

// export default MentorScreen;

// import React, { useState } from "react";
// import { View, StyleSheet, FlatList } from "react-native";
// import { Button, TextInput, Card, Text } from "react-native-paper";
// import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient

// const MentorScreen = () => {
//   // State to hold the query input and the list of queries with responses
//   const [query, setQuery] = useState("");
//   const [queriesList, setQueriesList] = useState([]);
//   const [response, setResponse] = useState(""); // State to hold the response input for each query

//   // Function to handle the submission of a query
//   const handleSendQuery = () => {
//     if (query.trim()) {
//       // Add new query with an empty array of responses
//       setQueriesList([{ query: query.trim(), responses: [] }, ...queriesList]);
//       setQuery(""); // Clear the input field after sending the query
//     }
//   };

//   // Function to handle sending a new response to a specific query
//   const handleSendResponse = (index) => {
//     if (response.trim()) {
//       const updatedQueriesList = [...queriesList];
//       updatedQueriesList[index].responses.push(response.trim()); // Add new response to the query's responses array
//       setQueriesList(updatedQueriesList); // Update the queries list with the new response
//       setResponse(""); // Clear the response input after submitting
//     }
//   };

//   // Render each query item in the list along with its responses
//   const renderQueryItem = ({ item, index }) => (
//     <Card style={styles.queryCard}>
//       <Card.Content>
//         <Text style={styles.queryText}>Query: {item.query}</Text>

//         {/* Display all responses for this query */}
//         {item.responses.length > 0 ? (
//           item.responses.map((response, idx) => (
//             <Text key={idx} style={styles.responseText}>
//               Response {idx + 1}: {response}
//             </Text>
//           ))
//         ) : (
//           <Text style={styles.noResponseText}>No responses yet.</Text>
//         )}

//         {/* Input field for submitting a new response */}
//         <TextInput
//           placeholder="Write your response"
//           value={response}
//           onChangeText={setResponse}
//           style={styles.responseInput}
//           mode="outlined"
//           multiline
//           numberOfLines={4}
//           activeOutlineColor="#02bcb5"
//         />

//         {/* Button to send the response */}
//         <Button
//           mode="contained"
//           onPress={() => handleSendResponse(index)}
//           style={styles.sendButton}
//           labelStyle={styles.sendButtonText}
//         >
//           Send Response
//         </Button>
//       </Card.Content>
//     </Card>
//   );

//   return (
//     <LinearGradient
//       colors={["#010219", "#010219", "#010219", "#010219", "#003491", "#02bcb5"]}
//       style={styles.container}
//     >
//       <Text variant="headlineSmall" style={styles.title}>
//         Ask Your Mentor
//       </Text>

//       {/* Input field for the query */}
//       <TextInput
//         placeholder="Write your query"
//         value={query}
//         onChangeText={setQuery}
//         style={styles.input}
//         mode="outlined"
//         multiline
//         numberOfLines={4}
//         activeOutlineColor="#02bcb5"
//       />

//       {/* Send button */}
//       <Button
//         mode="contained"
//         onPress={handleSendQuery}
//         style={styles.sendButton}
//         labelStyle={styles.sendButtonText}
//       >
//         Send Query
//       </Button>

//       {/* List of all sent queries */}
//       <Text style={{ color: "#fff" }}>Previous queries:</Text>
//       <FlatList
//         data={queriesList}
//         renderItem={renderQueryItem}
//         keyExtractor={(item, index) => index.toString()}
//         style={styles.queriesList}
//         ListEmptyComponent={
//           <Text variant="titleSmall" style={styles.noQueriesText}>
//             No queries sent yet.
//           </Text>
//         }
//       />
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
//     color: "#fff",
//   },
//   input: {
//     marginBottom: 20,
//     backgroundColor: "white",
//     height: 100,
//     paddingLeft: 10,
//     borderRadius: 8,
//     borderColor: "#02bcb5",
//   },
//   sendButton: {
//     marginBottom: 20,
//     backgroundColor: "#02bcb5",
//     height: 48,
//     borderRadius: 8,
//   },
//   sendButtonText: {
//     color: "#fff",
//   },
//   queriesList: {
//     marginTop: 20,
//   },
//   queryCard: {
//     marginBottom: 15,
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//   },
//   queryText: {
//     color: "#333",
//     marginBottom: 10,
//   },
//   responseText: {
//     color: "#333",
//     marginTop: 10,
//   },
//   noResponseText: {
//     color: "#777",
//     marginTop: 10,
//   },
//   responseInput: {
//     marginTop: 10,
//     backgroundColor: "white",
//     height: 80,
//     paddingLeft: 10,
//     borderRadius: 8,
//     borderColor: "#02bcb5",
//   },
//   noQueriesText: {
//     color: "#02bcb5",
//     textAlign: "center",
//     marginTop: 30,
//   },
// });

// export default MentorScreen;

// import React, { useState } from "react";
// import { View, StyleSheet, FlatList } from "react-native";
// import { Button, TextInput, Card, Text } from "react-native-paper";
// import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient

// const MentorScreen = () => {
//   // State to hold the query input and the list of queries with responses
//   const [query, setQuery] = useState("");
//   const [queriesList, setQueriesList] = useState([]);
//   const [response, setResponse] = useState(""); // State to hold the response input for each query
//   const [isResponseVisible, setIsResponseVisible] = useState({}); // State to track visibility of response input for each query

//   // Function to handle the submission of a query
//   const handleSendQuery = () => {
//     if (query.trim()) {
//       // Add new query with an empty array of responses
//       setQueriesList([{ query: query.trim(), responses: [] }, ...queriesList]);
//       setQuery(""); // Clear the input field after sending the query
//     }
//   };

//   // Function to handle sending a new response to a specific query
//   const handleSendResponse = (index) => {
//     if (response.trim()) {
//       const updatedQueriesList = [...queriesList];
//       updatedQueriesList[index].responses.push(response.trim()); // Add new response to the query's responses array
//       setQueriesList(updatedQueriesList); // Update the queries list with the new response
//       setResponse(""); // Clear the response input after submitting
//       setIsResponseVisible((prevState) => ({ ...prevState, [index]: false })); // Hide the response input after sending
//     }
//   };

//   // Function to toggle visibility of the response input field
//   const toggleResponseInput = (index) => {
//     setIsResponseVisible((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index],
//     }));
//   };

//   // Render each query item in the list along with its responses
//   const renderQueryItem = ({ item, index }) => (
//     <Card style={styles.queryCard}>
//       <Card.Content>
//         <Text style={styles.queryText}>Query: {item.query}</Text>

//         {/* Display all responses for this query */}
//         {item.responses.length > 0 ? (
//           item.responses.map((response, idx) => (
//             <Text key={idx} style={styles.responseText}>
//               Response {idx + 1}: {response}
//             </Text>
//           ))
//         ) : (
//           <Text style={styles.noResponseText}>No responses yet.</Text>
//         )}

//         {/* Button to toggle the visibility of the response input */}
//         <Button
//           // mode="outlined"
//           onPress={() => toggleResponseInput(index)}
//           style={styles.toggleResponseButton}
//         >
//           {isResponseVisible[index] ? "Hide Response Input" : "Write Response"}
//         </Button>

//         {/* Display the response input if it's visible */}
//         {isResponseVisible[index] && (
//           <View>
//             <TextInput
//               placeholder="Write your response"
//               value={response}
//               onChangeText={setResponse}
//               style={styles.responseInput}
//               mode="outlined"
//               multiline
//               numberOfLines={4}
//               activeOutlineColor="#02bcb5"
//             />

//             {/* Button to send the response */}
//             <Button
//               mode="contained"
//               onPress={() => handleSendResponse(index)}
//               style={styles.sendButton}
//               labelStyle={styles.sendButtonText}
//             >
//               Send Response
//             </Button>
//           </View>
//         )}
//       </Card.Content>
//     </Card>
//   );

//   return (
//     <LinearGradient
//       colors={["#010219", "#010219", "#010219", "#010219", "#003491", "#02bcb5"]}
//       style={styles.container}
//     >
//       <Text variant="headlineSmall" style={styles.title}>
//         Ask Your Mentor
//       </Text>

//       {/* Input field for the query */}
//       <TextInput
//         placeholder="Write your query"
//         value={query}
//         onChangeText={setQuery}
//         style={styles.input}
//         mode="outlined"
//         multiline
//         numberOfLines={4}
//         activeOutlineColor="#02bcb5"
//       />

//       {/* Send button */}
//       <Button
//         mode="contained"
//         onPress={handleSendQuery}
//         style={styles.sendButton}
//         labelStyle={styles.sendButtonText}
//       >
//         Send Query
//       </Button>

//       {/* List of all sent queries */}
//       <Text style={{ color: "#fff" }}>Previous queries:</Text>
//       <FlatList
//         data={queriesList}
//         renderItem={renderQueryItem}
//         keyExtractor={(item, index) => index.toString()}
//         style={styles.queriesList}
//         ListEmptyComponent={
//           <Text variant="titleSmall" style={styles.noQueriesText}>
//             No queries sent yet.
//           </Text>
//         }
//       />
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
//     color: "#fff",
//   },
//   input: {
//     marginBottom: 20,
//     backgroundColor: "white",
//     height: 100,
//     paddingLeft: 10,
//     borderRadius: 8,
//     borderColor: "#02bcb5",
//   },
//   sendButton: {
//     marginBottom: 20,
//     backgroundColor: "#02bcb5",
//     borderRadius: 8,
//   },
//   sendButtonText: {
//     color: "#fff",
//   },
//   queriesList: {
//     marginTop: 20,
//   },
//   queryCard: {
//     marginBottom: 15,
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//   },
//   queryText: {
//     color: "#333",
//     marginBottom: 10,
//   },
//   responseText: {
//     color: "#333",
//     marginTop: 10,
//   },
//   noResponseText: {
//     color: "#777",
//     marginTop: 10,
//   },
//   responseInput: {
//     marginTop: 10,
//     marginBottom: 10,
//     backgroundColor: "white",
//     height: 80,
//     paddingLeft: 10,
//     borderRadius: 8,
//     borderColor: "#02bcb5",
//   },
//   toggleResponseButton: {
//     marginTop: 10,
//     backgroundColor: "#02bcb5",
//     borderRadius: 8,
//     // height: 40,
//     // justifyContent: "center",
//   },
//   noQueriesText: {
//     color: "#02bcb5",
//     textAlign: "center",
//     marginTop: 30,
//   },
// });

// export default MentorScreen;

