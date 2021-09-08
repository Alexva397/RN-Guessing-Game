import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = (props) => {
    return (
        <TextInput {...props} style={{...styles.input, ...props.style}} />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: '#000000',
        borderWidth: 1,
        margin: 15,
        textAlign: 'center'
    },
});

export default Input;