import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 90,
        paddingTop: 40,
        backgroundColor: '#afff5f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#000000',
        fontSize: 20,
    },


});