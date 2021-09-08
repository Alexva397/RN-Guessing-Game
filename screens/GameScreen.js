import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

const randomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const random = Math.floor(Math.random() * (max - min)) + min;

    if (random === exclude) {
        return randomNumber(min, max, exclude);
    } else {
        return random;
    }
};

const GameScreen = (props) => {

    const [currentGuess, setCurrentGuess] = useState(randomNumber(1, 100, props.userChoice));

    const currentMin = useRef(1);
    const currentMax = useRef(100);


    useEffect(() => {
        if (currentGuess === props.userChoice) {

        }
    })


    const nextGuessHandler = (direction) => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert('Dont\'t Lie!', 'Please tell us the correct direction to guess', [{ text: 'Sorry', style: 'cancel' }]);
            return;
        } 
        if (direction === 'lower') {
            currentMax.current = currentGuess;
        } else if (direction === 'greater') {
            currentMin.current = currentGuess;
        }
        const nextNumber = randomNumber(currentMin.current, currentMax.current, currentGuess);
        setCurrentGuess(nextNumber);
    }

    return (
        <View style={styles.screen}>
            <Text>Computer's Guess: </Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title='Lower' onPress={nextGuessHandler.bind(this, 'lower')} />
                <Button title='Greater' onPress={nextGuessHandler.bind(this, 'greater')} />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
    }
});

export default GameScreen;