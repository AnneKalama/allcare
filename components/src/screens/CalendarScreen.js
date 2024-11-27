import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';  // Importing the calendar component

const CalendarScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendar Screen</Text>

      {/* Calendar Component */}
      <Calendar
        // Initially selected date
        markedDates={{
          '2024-11-25': { selected: true, selectedColor: 'blue', selectedTextColor: 'white' },
          '2024-11-26': { selected: true, selectedColor: 'green', selectedTextColor: 'white' },
        }}
        // Set the minimum and maximum date ranges if required
        minDate={'2024-01-01'}
        maxDate={'2024-12-31'}
        onDayPress={(day) => {
          console.log('selected day', day);
        }}
        monthFormat={'yyyy MM'}
        theme={{
          todayTextColor: 'red',
          arrowColor: 'orange',
          monthTextColor: 'blue',
          textDayFontWeight: 'bold',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: 'bold',
          textDayFontSize: 16,
        }}
      />

      {/* Navigation Buttons */}
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Go to HIV Community" onPress={() => navigation.navigate('HIVCommunity')} />
      <Button title="Go to Signs and Languages" onPress={() => navigation.navigate('SignLanguage')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',  // Align content at the top
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f1f1f1',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  calendarContainer: {
    marginBottom: 30,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default CalendarScreen;
