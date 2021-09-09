import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import TitleText from './TitleText';

const Header = (props) => {
    return (
        <View style={styles.headerContainer}>
            <TitleText>{props.title}</TitleText>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 90,
        paddingTop: 40,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
