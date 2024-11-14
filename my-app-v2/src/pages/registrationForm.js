import * as React from 'react';
import { View, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width; 

export default function SubmissionFormScreen() {
    const [studentName, setStudentName] = useState("");
    const [institution, setInstitution] = useState("");
    const [amount, setAmount] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [registrationNo, setRegistrationNo] = useState("");
    const [email, setEmail] = useState("");
    const [transactionDate, setTransactionDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || transactionDate;
        setShowDatePicker(false);
        setTransactionDate(currentDate);
    };

    const handleSubmit = () => {
        if (!studentName || !institution || !registrationNo) {
            alert('All fields are required!');
        } else {
            console.log("Name:", studentName);
            console.log("Institution:", institution);
            console.log("Registration No:", registrationNo);
            console.log("Transaction Id:", transactionId);
            console.log("Amount Paid:", amount);
            console.log("Email:", email);
            console.log("Transaction Date:", transactionDate);
            alert("Form Data has been submitted successfully!");
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['#F35668', '#8F52FB']}
                style={styles.gradient}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
            />

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Card style={styles.wrapper}>
                    <Card.Content>
                        <TextInput
                            label="Enter Your Name *"
                            mode="outlined"
                            value={studentName}
                            onChangeText={setStudentName}
                            style={styles.input}
                            left={<TextInput.Icon icon="account" color="#8F52FB" />}
                        />

                        <TextInput
                            label="Enter Your Institution Name *"
                            mode="outlined"
                            value={institution}
                            onChangeText={setInstitution}
                            style={styles.input}
                            left={<TextInput.Icon icon="school" color="#8F52FB" />}
                        />

                        <TextInput
                            label="Enter Reg No *"
                            mode="outlined"
                            value={registrationNo}
                            onChangeText={setRegistrationNo}
                            style={styles.input}
                            left={<TextInput.Icon icon="badge-account" color="#8F52FB" />}
                        />

                        <TextInput
                            label="Enter Transaction Id *"
                            mode="outlined"
                            value={transactionId}
                            onChangeText={setTransactionId}
                            style={styles.input}
                            left={<TextInput.Icon icon="file-document" color="#8F52FB" />}
                        />

                        <TextInput
                            label="Enter Amount Paid *"
                            mode="outlined"
                            value={amount}
                            onChangeText={setAmount}
                            style={styles.input}
                            keyboardType="numeric"
                            left={<TextInput.Icon icon="currency-inr" color="#8F52FB" />}
                        />

                        <TextInput
                            label="Enter Email *"
                            mode="outlined"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            style={styles.input}
                            left={<TextInput.Icon icon="email" color="#8F52FB" />}
                        />

                        <TextInput
                            label="Transaction Date * (Tap to select)"
                            mode="outlined"
                            value={transactionDate.toLocaleDateString()} 
                            onTouchEnd={() => setShowDatePicker(true)} 
                            style={styles.input}
                            left={<TextInput.Icon icon="calendar" color="#8F52FB" />}
                            editable={true} 
                        />

                        {showDatePicker && (
                            <DateTimePicker
                                value={transactionDate}
                                mode="date"
                                display="default"
                                onChange={handleDateChange}
                            />
                        )}

                        <View style={styles.buttonContainer}>
                            <LinearGradient
                                colors={['#F35668', '#8F52FB']}
                                start={{ x: 0, y: 1 }}
                                end={{ x: 1, y: 1 }}
                                style={styles.gradientButton}
                            >
                                <Button
                                    mode="contained"
                                    onPress={handleSubmit}
                                    contentStyle={{ height: 50 }}
                                    labelStyle={{ color: '#FFF' }}
                                    icon="send"
                                    style={{ backgroundColor: 'transparent', width: '100%' }} // Full width of the container
                                >
                                    Submit
                                </Button>
                            </LinearGradient>
                        </View>

                    </Card.Content>
                </Card>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: screenHeight,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    wrapper: {
        backgroundColor: 'white',
        borderRadius: 40,
        padding: 20,
        marginTop: 50,
    },
    input: {
        marginBottom: 15,
    },
    buttonContainer: {
        alignItems: 'center', 
        width: '100%', 
        marginTop: 20, 
    },
    gradientButton: {
        paddingVertical: 2,
        paddingHorizontal: 2,
        borderRadius: 30,
        width: screenWidth * 0.6, 
    },
});
