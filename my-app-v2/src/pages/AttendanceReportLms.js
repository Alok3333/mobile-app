import React, { useState } from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Button, Text } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker"; // Expo DateTimePicker
import moment from "moment"; // To handle date formatting
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient from Expo
import { BarChart } from "react-native-chart-kit"; // Import BarChart from react-native-chart-kit

const screenWidth = Dimensions.get("window").width;

const AttendanceReportLms = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [attendanceReport, setAttendanceReport] = useState(null);

  const allClasses = [
    { id: 1, title: "Mathematics", date: "2024-10-01", attended: true },
    { id: 2, title: "Physics", date: "2024-10-02", attended: false },
    { id: 3, title: "Chemistry", date: "2024-10-03", attended: true },
    { id: 4, title: "Biology", date: "2024-10-04", attended: false },
    { id: 5, title: "Mathematics", date: "2024-10-05", attended: true },
    { id: 6, title: "Mathematics", date: "2024-10-06", attended: true },
    { id: 7, title: "English", date: "2024-10-07", attended: false },
    { id: 8, title: "Mathematics", date: "2024-10-08", attended: true },
    { id: 9, title: "Chemistry", date: "2024-10-09", attended: true },
    { id: 10, title: "Physics", date: "2024-10-10", attended: false },
    { id: 11, title: "Biology", date: "2024-10-11", attended: true },
    { id: 12, title: "Hindi", date: "2024-10-12", attended: false },
    { id: 13, title: "English", date: "2024-10-13", attended: true },
    { id: 14, title: "Mathematics", date: "2024-10-14", attended: true },
    { id: 15, title: "Physics", date: "2024-10-15", attended: false },
    { id: 16, title: "Chemistry", date: "2024-10-16", attended: true },
    { id: 17, title: "Mathematics", date: "2024-10-17", attended: true },
    { id: 18, title: "Biology", date: "2024-10-18", attended: false },
    { id: 19, title: "English", date: "2024-10-19", attended: true },
    { id: 20, title: "Hindi", date: "2024-10-20", attended: true },
    // Current month (November 2024)
    { id: 21, title: "Biology", date: "2024-11-01", attended: true },
    { id: 22, title: "Mathematics", date: "2024-11-02", attended: false },
    { id: 23, title: "Chemistry", date: "2024-11-03", attended: true },
    { id: 24, title: "Biology", date: "2024-11-04", attended: true },
    { id: 25, title: "Mathematics", date: "2024-11-05", attended: true },
    { id: 26, title: "Biology", date: "2024-11-06", attended: true },
    { id: 27, title: "Chemistry", date: "2024-11-07", attended: true },
    { id: 28, title: "Physics", date: "2024-11-08", attended: false },
    { id: 29, title: "English", date: "2024-11-09", attended: true },
    { id: 30, title: "Hindi", date: "2024-11-10", attended: false },
    { id: 31, title: "Mathematics", date: "2024-11-11", attended: true },
    { id: 32, title: "English", date: "2024-11-12", attended: true },
    { id: 33, title: "Physics", date: "2024-11-13", attended: false },
    { id: 34, title: "Biology", date: "2024-11-14", attended: true },
    { id: 35, title: "Chemistry", date: "2024-11-15", attended: true },
    { id: 36, title: "Mathematics", date: "2024-11-16", attended: false },
    { id: 37, title: "Hindi", date: "2024-11-17", attended: true },
    { id: 38, title: "Biology", date: "2024-11-18", attended: true },
    { id: 39, title: "English", date: "2024-11-19", attended: false },
    { id: 40, title: "Mathematics", date: "2024-11-20", attended: true },
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
  const filterClassesByDate = () => {
    if (selectedDate) {
      const startDate = moment(selectedDate).format("YYYY-MM-DD");
      const today = moment().format("YYYY-MM-DD");

      const filteredClasses = allClasses.filter((classItem) => {
        const classDate = moment(classItem.date).format("YYYY-MM-DD");
        return moment(classDate).isBetween(startDate, today, null, "[]");
      });

      generateAttendanceReport(filteredClasses);
    }
  };

  // Generate attendance report
  const generateAttendanceReport = (filteredClasses) => {
    const attendedClasses = filteredClasses.filter(
      (classItem) => classItem.attended
    );

    const classTitles = filteredClasses.map((classItem) => classItem.title);
    const attendedCounts = filteredClasses.map((classItem) =>
      classItem.attended ? 1 : 0
    );

    // Calculate the attendance counts per subject dynamically
    const subjects = [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Hindi",
      "English",
    ];

    const attendanceCountsForChart = subjects.map((subject) => {
      return filteredClasses.filter(
        (classItem) => classItem.title === subject && classItem.attended
      ).length; // Count the attended classes per subject
    });

    setAttendanceReport({
      totalClasses: filteredClasses.length,
      attendedClasses: attendedClasses.length,
      missedClasses: filteredClasses.length - attendedClasses.length,
      classTitles: classTitles,
      attendedCounts: attendedCounts,
      attendanceCountsForChart: attendanceCountsForChart, // Data for the chart
    });
  };

  return (
    <LinearGradient
      colors={["#010219", "#003491", "#02bcb5"]}
      style={styles.container}
    >
      <ScrollView>
        <Text variant="headlineMedium" style={styles.title}>
          Attendance Report
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
          onPress={filterClassesByDate}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Show Report
        </Button>

        {/* Attendance report */}
        {attendanceReport && (
          <View style={styles.reportContainer}>
            <Text style={styles.reportText}>
              Total Classes Conducted: {attendanceReport.totalClasses}
            </Text>
            <Text style={styles.reportText}>
              Total Classes Attended: {attendanceReport.attendedClasses}
            </Text>
            <Text style={styles.reportText}>
              Total Classes Missed: {attendanceReport.missedClasses}
            </Text>
          </View>
        )}

        {/* Graph */}
        {attendanceReport && (
          <View style={styles.chartContainer}>
            <BarChart
              data={{
                labels: [
                  "Mathematics",
                  "Physics",
                  "Chemistry",
                  "Biology",
                  "Hindi",
                  "English",
                ],
                datasets: [
                  {
                    data: attendanceReport.attendanceCountsForChart,
                  },
                ],
              }}
              width={screenWidth - 40} // Make it responsive
              height={380}
              chartConfig={{
                backgroundColor: "#fff",
                backgroundGradientFrom: "#02bcb5",
                backgroundGradientTo: "#010219",
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#fff",
                },
              }}
              fromZero={true}
              style={styles.graphStyle}
            />
          </View>
        )}
      </ScrollView>
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
  reportContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  reportText: {
    fontSize: 16,
    color: "#333",
  },
  chartContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  graphStyle: {
    marginTop: 20,
    borderRadius: 16,
  },
});

export default AttendanceReportLms;
