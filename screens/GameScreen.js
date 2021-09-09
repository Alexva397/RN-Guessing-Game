import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert, ScrollView } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import { Ionicons } from '@expo/vector-icons';
import MainButton from '../components/MainButton';
import { render } from 'react-dom';

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

const renderListItem = (value, roundNumber) => {
    return (
        <View style={styles.listItem} key={value}>
            <BodyText># {roundNumber}</BodyText>
            <BodyText>{value}</BodyText>
        </View>
    );
};  

const GameScreen = (props) => {
    const initialGuess = randomNumber(1, 100, props.userChoice);

    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guesses, setGuesses] = useState([initialGuess]);

    const currentMin = useRef(1);
    const currentMax = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(guesses.length);
        }
    }, [currentGuess, userChoice, onGameOver])


    const nextGuessHandler = (direction) => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert('Dont\'t Lie!', 'Please tell us the correct direction to guess', [{ text: 'Sorry', style: 'cancel' }]);
            return;
        } 
        if (direction === 'lower') {
            currentMax.current = currentGuess;
        } else if (direction === 'greater') {
            currentMin.current = currentGuess + 1;
        }
        const nextNumber = randomNumber(currentMin.current, currentMax.current, currentGuess);
        setCurrentGuess(nextNumber);
        // setRounds(currentRounds => currentRounds + 1);
        setGuesses(current => [nextNumber, ...current])
    }

    return (
        <View style={styles.screen}>
            <BodyText>Computer's Guess: </BodyText>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={nextGuessHandler.bind(this, 'lower')}><Ionicons name='md-remove' size={36}/></MainButton>
                <MainButton onPress={nextGuessHandler.bind(this, 'greater')}><Ionicons name='md-add' size={36} /></MainButton>
            </Card>
            <View style={styles.listContainer}>
                <ScrollView contentContainerStyle={styles.list}>
                    {guesses.map((guess, index ) => renderListItem(guess, index + 1))}
                </ScrollView>
            </View>
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
    },
    listItem: {
        borderColor: '#ccc',
        borderWidth: 2,
        padding: 15,
        backgroundColor: '#d7ffff',
        flexDirection: 'row',
        marginVertical: 5,
        justifyContent: 'space-between',
        width: '80%',
    },
    listContainer: {
        flex: 1,
       

    },
    list: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default GameScreen;