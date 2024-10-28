// import { Link } from "expo-router";
import * as React from "react";
import { Dimensions, TouchableHighlight, View, StyleSheet, TextInput, Modal, FlatList, Linking } from "react-native";
import { Text, List, Button } from "react-native-paper";
import { Rating } from 'react-native-ratings';

const screenWidth = Dimensions.get('window').width;

const modulesData = {
    id: 1,
    moduleTitle: "Professional Writing",
    moduleSubTitle: "Dr. S. K. Bhattacharya",
    rating: 3,
    trackCode: "PW101",
    dummyAccordionData: [
        { id: 1, title: "English Spelling Rules - Learn Spelling Rules and Common Mistakes", Module: 1, referenceLink: "https://www.youtube.com/watch?v=ohIAiuHMKMI&list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo", activityDetails: "Today's task is to understand the rules of English speaking and learn the common mistakes that people make while speaking English." },
        { id: 2, title: "IELTS Writing - Using Linking Words and Phrases to Improve your Score", Module: 2, referenceLink: "https://www.youtube.com/watch?v=_oiB1HuzpMo", activityDetails: "Advanced writing techniques for professionals." },
        { id: 3, title: "5 Ways to compare and contrast in English", Module: 3, referenceLink: "https://www.youtube.com/watch?v=_oiB1HuzpMo", activityDetails: "Advanced writing techniques for professionals." },
    ]
};

const CourseActivityScreen = () => {
    const [expandedId, setExpandedId] = React.useState(null);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [selectedModule, setSelectedModule] = React.useState(null);
    const [reportLink, setReportLink] = React.useState("");

    const handleAccordionPress = (module) => {
        setExpandedId(expandedId === module ? null : module);
    };

    const handleModalOpen = (module) => {
        setSelectedModule(module);
        setModalVisible(true);
    };

    const handleModalSubmit = () => {
        console.log("Submitted report for:", selectedModule.title, "Link:", reportLink);
        setModalVisible(false);
        setSelectedModule(null);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedModule(null);
    };

    const renderAccordionItem = React.useCallback(({ item }) => (
        <List.Accordion
            title={`Module ${item.Module} : ${item.title}`}
            expanded={expandedId === item.Module}
            onPress={() => handleAccordionPress(item.Module)}
            left={props => <List.Icon {...props} icon="folder" />}
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
                <Text variant="titleSmall" style={styles.activityDescription}>
                    You may refer to various online and offline resources and complete the task.
                </Text>

                <Text variant="titleSmall" style={styles.activityTitle}>Reference Link</Text>
                <Text variant="titleSmall" style={styles.activityDescription}>Please find below some links and videos from internet for your reference.</Text>
                <Text
                    style={{ color: "blue" }}
                    onPress={() => Linking.openURL(item.referenceLink)}>
                    {item.referenceLink}
                </Text>

                <Text variant="titleSmall" style={styles.activityTitle}>Activity Report</Text>
                <Text variant="titleSmall" style={styles.activityDescription}>
                    Create a report or video of what you've learned and add the report link.
                </Text>
                <Button icon="certificate" mode="contained" labelStyle={styles.buttonLabel}
                    style={styles.button} onPress={() => handleModalOpen(item)}>
                    Add report link
                </Button>
            </View>
        </List.Accordion>
    ), [expandedId]);

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <TouchableHighlight underlayColor="#f0f0f0">
                <View style={{ paddingTop: 10 }}>
                    <View style={styles.cardContent}>
                        <Text variant="titleMedium" style={styles.moduleTitle}>{modulesData.moduleTitle}</Text>
                        <Text variant="titleSmall" style={styles.moduleSubTitle}>{modulesData.moduleSubTitle}</Text>

                        <View style={styles.ratingContainer}>
                            <Rating
                                imageSize={16}
                                startingValue={modulesData.rating}
                                style={styles.rating}
                                readonly
                            />
                        </View>

                        <View style={styles.buttonRow}>

                            <Button icon="notebook" mode="contained" labelStyle={styles.buttonLabel}
                                style={styles.button}
                            // onPress={()=> console.log("pressed")}
                            >
                                View Activity Report
                            </Button>


                            <Button icon="school" mode="contained" labelStyle={styles.buttonLabel}
                                style={styles.button}
                            // onPress={()=> console.log("pressed")
                            >
                                Register for Exam
                            </Button>

                        </View>
                    </View>

                    <FlatList
                        data={modulesData.dummyAccordionData}
                        renderItem={renderAccordionItem}
                        keyExtractor={(item) => item.Module.toString()}
                        style={{ marginTop: 10 }}
                    />
                </View>
            </TouchableHighlight>

            {selectedModule && (
                <Modal visible={modalVisible} animationType="slide" transparent={true}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text variant="titleLarge" style={{ textAlign: "center", marginBottom: 10 }}>Activity Report</Text>
                            <Text variant="titleMedium">Module {selectedModule.Module} : {selectedModule.title}</Text>

                            <TextInput
                                label="Report Link"
                                value={reportLink}
                                onChangeText={setReportLink}
                                style={styles.input}
                                placeholder="Paste your activity report link here"
                            />
                            <Button onPress={handleModalSubmit} mode="contained" style={styles.submitButton}>
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
        color: '#8F52FB',
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
    },
    textInput: {
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    submitButton: {
        backgroundColor: '#8F52FB',
        marginTop: 10,
    },
    closeButton: {
        marginTop: 10,
    },
});

export default CourseActivityScreen;

