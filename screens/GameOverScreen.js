import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Game Over</Text>
            <Text>Number of Guesses: {props.roundsNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button title='Play Again' onPress={props.gameReset} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default GameOverScreen;