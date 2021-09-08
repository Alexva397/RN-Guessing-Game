import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Header from './components/Header';
import StartInput from './screens/StartInput';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};


export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [rounds, setRounds] = useState(0);
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
   return <AppLoading startAsync={fetchFonts} onFinish={() => setLoaded(true)} onError={(err) => console.log(err)}/>;
  }

  const newGameHandler = () => {
    setRounds(0);
    setUserNumber(null);
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setRounds(0);
  }

  const gameOverHandler = (numberOfRounds) => {
    setRounds(numberOfRounds)
  };

  let content = <StartInput onGameStart={startGameHandler} />;

  if (userNumber && rounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  } else if (rounds > 0) {
    content = <GameOverScreen roundsNumber={rounds} userNumber={userNumber} gameReset={newGameHandler}/>
  }

  return (
    <View style={styles.screen}>
      <Header 
        title='Guess a Number'
      />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
    }
});
