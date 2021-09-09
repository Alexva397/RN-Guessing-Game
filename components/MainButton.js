import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';

const MainButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        borderRadius: 25,
        borderColor: 'black',
        backgroundColor: colors.primary,
        paddingHorizontal: 25,
        paddingVertical: 12,
        
    
    },
    buttonText: {
        color: '#000000',
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'center'

    },
});

export default MainButton;