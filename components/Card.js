import React from 'react';
import { StyleSheet, View } from 'react-native';


const Card = (props) => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
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
});

export default Card;
