import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';


const StartInput = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new game!</Text>
            <View style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput style={styles.userInput} />
                <View style={styles.buttonContainer}>
                    <Button title='Reset' onPress={() => {}} />
                    <Button title='Submit' onPress={() => {}} />
                </View>
            </View>
        </View>
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
    },
    inputContainer: {
        width: '70%',
        maxWidth: '80%',
        alignItems: 'center',
        margin: 20,
        shadowColor: '#000000',
        shadowOffset: { width: 0,
                        height: 2,
                      },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        backgroundColor: '#ffffff',
        padding: 12,
        elevation: 5,
        borderRadius: 10,
    },
    userInput: {
        backgroundColor: '#c0c0c0',
        width: '40%',
        height: 40,
        margin: 15,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        paddingHorizontal: 10
    },
});


export default StartInput;