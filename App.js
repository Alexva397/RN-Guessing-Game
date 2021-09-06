import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartInput from './screens/StartInput';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header 
        title='Guess a Number'
      />
      <StartInput />
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
    }
});
