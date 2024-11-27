import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SignsAndLanguagesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signs and Languages Screen</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Go to Calendar" onPress={() => navigation.navigate('Calendar')} />
      <Button title="Go to HIV Community" onPress={() => navigation.navigate('HIV Community')} />
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

export default SignsAndLanguagesScreen;
