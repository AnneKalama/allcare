import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Button title="Go to Calendar" onPress={() => navigation.navigate('Calendar')} />
      <Button title="Go to HIV Community" onPress={() => navigation.navigate('HIV Community')} />
      <Button title="Go to Signs and Languages" onPress={() => navigation.navigate('Signs and Languages')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ProfileScreen;
