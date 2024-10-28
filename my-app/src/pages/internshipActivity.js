import React, { useState } from "react";
import {
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
  View,
  StyleSheet,
  TextInput,
  Modal,
  FlatList,
  Linking,
} from "react-native";
import { Text, List, Button } from "react-native-paper";
import { Rating } from "react-native-ratings";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { Link } from "expo-router";

const screenWidth = Dimensions.get("window").width;

const modulesData = {
  id: 1,
  moduleTitle: "Marketing Intern",
  moduleSubTitle: "MBA",
  project: 1,
  rating: 3,
  dummyAccordionData: [
    {
      id: 1,
      title: "Understand about Market Segmentation",
      task: 1,
      referenceLink:
        "https://www.youtube.com/watch?v=ohIAiuHMKMI&list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo",
      activityDetails:
        "Today's task is to understand the rules of English speaking and learn the common mistakes that people make while speaking English.",
    },
    {
      id: 2,
      title: "Market Trends and insights",
      task: 2,
      referenceLink: "https://www.youtube.com/watch?v=_oiB1HuzpMo",
      activityDetails: "Advanced writing techniques for professionals.",
    },
    {
      id: 3,
      title: "Market Size Estimation",
      task: 3,
      referenceLink: "https://www.youtube.com/watch?v=_oiB1HuzpMo",
      activityDetails: "Advanced writing techniques for professionals.",
    },
    {
      id: 4,
      title: "Competitor Analysis",
      task: 4,
      referenceLink: "https://www.youtube.com/watch?v=_oiB1HuzpMo",
      activityDetails: "Advanced writing techniques for professionals.",
    },
    {
      id: 5,
      title: "Growth Opportunities and Challenges",
      task: 5,
      referenceLink: "https://www.youtube.com/watch?v=_oiB1HuzpMo",
      activityDetails: "Advanced writing techniques for professionals.",
    },
    {
      id: 6,
      title: "Create a comprehensive market analysis report",
      task: 6,
      referenceLink: "https://www.youtube.com/watch?v=_oiB1HuzpMo",
      activityDetails: "Advanced writing techniques for professionals.",
    },
  ],
};

const InternshipActivityScreen = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);
  const [reportLink, setReportLink] = useState("");
  const [mute, setMute] = useState(false);

  const onToggleMute = () => {
    setMute((prevMute) => !prevMute);
  };

  const handleAccordionPress = (task) => {
    setExpandedId(expandedId === task ? null : task);
  };

  const handleModalOpen = (item) => {
    setSelectedModule(item);
    setModalVisible(true);
  };

  const handleModalSubmit = () => {
    console.log(
      "Submitted report for:",
      selectedModule.title,
      "Link:",
      reportLink
    );
    setModalVisible(false);
    setSelectedModule(null);
    setReportLink("");
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedModule(null);
  };

  const renderAccordionItem = React.useCallback(
    ({ item }) => (
      <List.Accordion
        title={`Task ${item.task} : ${item.title}`}
        expanded={expandedId === item.task}
        onPress={() => handleAccordionPress(item.task)}
        left={(props) => <List.Icon {...props} icon="folder" />}
        style={styles.accordion}
      >
        <View style={styles.accordionContent}>
          <Text variant="titleMedium" style={styles.accordionTitle}>
            Title: {item.title}
          </Text>
          <Text variant="titleSmall" style={styles.accordionTitle}>
            Activity Details
          </Text>
          <Text variant="titleSmall" style={styles.activityDescription}>
            {item.activityDetails}
          </Text>
          <TouchableOpacity
            onPress={onToggleMute}
            style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
          >
            <MaterialCommunityIcons
              name={mute ? "volume-mute" : "volume-high"}
              size={30}
              color="black"
            />
            <Text variant="labelLarge">Listen to audio </Text>
          </TouchableOpacity>

          <Text variant="titleSmall" style={styles.activityDescription}>
            You may refer to various online and offline resources and complete
            the task.
          </Text>

          <Text variant="titleSmall" style={styles.activityTitle}>
            Reference Link
          </Text>
          <Text variant="titleSmall" style={styles.activityDescription}>
            Please find below some links and videos from the internet for your
            reference.
          </Text>
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL(item.referenceLink)}
          >
            {item.referenceLink}
          </Text>

          <Text variant="titleSmall" style={styles.activityTitle}>
            Activity Report
          </Text>
          <Text variant="titleSmall" style={styles.activityDescription}>
            Create a report or video of what you've learned and add the report
            link.
          </Text>
          <Button
            icon="certificate"
            mode="contained"
            labelStyle={styles.buttonLabel}
            style={styles.button}
            onPress={() => handleModalOpen(item)}
          >
            Add report link
          </Button>
        </View>
      </List.Accordion>
    ),
    [expandedId, mute]
  );
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TouchableHighlight underlayColor="#f0f0f0">
        <View style={{ paddingTop: 10 }}>
          <View style={styles.cardContent}>
            <Text variant="titleMedium" style={styles.moduleTitle}>
              Project {modulesData.project} - {modulesData.moduleTitle}
            </Text>
            <Text variant="titleSmall" style={styles.moduleSubTitle}>
              {modulesData.moduleSubTitle}
            </Text>

            <View style={styles.ratingContainer}>
              <Rating
                imageSize={16}
                startingValue={modulesData.rating}
                style={styles.rating}
                readonly
              />
            </View>

            <View style={styles.buttonRow}>
              {/* <Link href="internshipActivityReport"> */}
              <Button
                icon="notebook"
                mode="contained"
                labelStyle={styles.buttonLabel}
                style={styles.button}
                // onPress={()=> console.log("pressed")}
              >
                View Activity Report
              </Button>
              {/* </Link> */}
            </View>
          </View>

          <FlatList
            data={modulesData.dummyAccordionData}
            renderItem={renderAccordionItem}
            keyExtractor={(item) => item.id.toString()} // Changed to id
            style={{ marginTop: 10 }}
          />
        </View>
      </TouchableHighlight>

      {selectedModule && (
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text
                variant="titleLarge"
                style={{ textAlign: "center", marginBottom: 10 }}
              >
                Activity Report
              </Text>
              <Text variant="titleMedium">
                Task {selectedModule.task} : {selectedModule.title}
              </Text>

              <TextInput
                label="Report Link"
                value={reportLink}
                onChangeText={setReportLink}
                style={styles.input}
                placeholder="Paste your activity report link here"
              />
              <Button
                onPress={handleModalSubmit}
                mode="contained"
                style={styles.submitButton}
              >
                Submit
              </Button>
              <Button onPress={closeModal} style={styles.closeButton}>
                Close
              </Button>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContent: {
    backgroundColor: "#ffffff",
    padding: 20,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  rating: {
    marginRight: 10,
  },
  moduleTitle: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  moduleSubTitle: {
    color: "#666",
    marginBottom: 4,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  button: {
    marginTop: 10,
    width: screenWidth * 0.4,
    borderRadius: 10,
    backgroundColor: "rgba(211,211,211,.4)",
  },
  buttonLabel: {
    color: "#8F52FB",
  },
  accordion: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginBottom: 10,
  },
  accordionContent: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  accordionTitle: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  activityTitle: {
    fontWeight: "bold",
    marginTop: 10,
  },
  activityDescription: {
    marginTop: 5,
    color: "#666",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  input: {
    width: "100%",
    paddingVertical: 10,
    marginBottom: 15,
  },
  submitButton: {
    width: "100%",
    marginBottom: 10,
  },
  closeButton: {
    width: "100%",
    backgroundColor: "rgba(211,211,211,.4)",
  },
});

export default InternshipActivityScreen;
