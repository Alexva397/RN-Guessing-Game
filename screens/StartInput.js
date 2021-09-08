import React, { useState }  from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../components/Card';
import colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartInput = (props) => {

    const [userValue, setUserValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const handleUserInput = (input) => {
        setUserValue(input.replace(/[^0-9]/g, ''));
    };

    const resetUserInput = () => {
        setUserValue('');
        setConfirmed(false);
    };

    const confirmUserInput = () => {
        const userChoice = parseInt(userValue);
        if (isNaN(userChoice) || userChoice <= 0 || userChoice > 99) {
            Alert.alert('Invalid Number', 'Number must be greater than 0 and less than 100', [{ text: 'Okay', style: 'destructive', onPress: resetUserInput }])
            return;
        }

        setConfirmed(true);
        setSelectedNumber(userChoice);
        setUserValue('');
        Keyboard.dismiss();
        
    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card>
                <Text>You Have Chosen: </Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title='Start' onPress={() => props.onGameStart(selectedNumber)} color={colors.primary}/>
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input 
                        style={styles.userInput} 
                        blurOnSubmit autoCapitalize='none' 
                        autoCorrect={false} 
                        keyboardType='number-pad' 
                        maxLength={2}
                        onChangeText={handleUserInput}
                        value={userValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title='Reset' onPress={resetUserInput} color={colors.secondary} /></View>
                        <View style={styles.button}><Button title='Submit' onPress={confirmUserInput} color={colors.primary} /></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginVertical: 10,
        fontFamily: 'open-sans-bold',
    },
    inputContainer: {
        width: '70%',
        maxWidth: '80%',
        alignItems: 'center',
    },
    userInput: {
        backgroundColor: '#c0c0c0',
        width: '40%',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        paddingHorizontal: 10
    },
    button: {
        width: 90,
    },
});


export default StartInput;