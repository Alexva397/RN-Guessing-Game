import React from 'react';
import { View, Image, Text, StyleSheet, Button } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <TitleText>Game Over</TitleText>
            <View>
                <Image style={styles.image} resizeMode='contain' source={require('../assets/success.png')} />
            </View>
            <BodyText>Number of Guesses: <Text style={styles.highlight}>{props.roundsNumber}</Text></BodyText>
            <BodyText>Number was: <Text style={styles.highlight}>{props.userNumber}</Text></BodyText>
            <View style={styles.button} >
            
            <MainButton onPress={props.gameReset}>Play Again</MainButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '80%',
        height: 300,
        borderRadius: 20,
    },
    highlight: {
        color: colors.secondary
    },
    button: {
        marginTop: 10,
    },
});

export default GameOverScreen;