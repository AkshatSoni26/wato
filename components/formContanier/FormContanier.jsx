import { StyleSheet, Text, View } from 'react-native';
import React, { ReactNode } from 'react';

const FormContainer = ({ children, heading='smaple heading' }) => {
    return (
        <View style={styles.mainContanier}>
            <Text style={styles.heading}>{heading}</Text>
            <View style={styles.container}>
                {children}
            </View>
        </View>
    );
}

export default FormContainer;

const styles = StyleSheet.create({
    mainContanier: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        
    },
    container: {
        width: 320,
        // flex:1,
        padding: 20,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        margin:20,
        
    },
    heading: {
        fontFamily: 'GT Super Txt Trial',
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 26,
        letterSpacing: 0,
        textAlign: 'left',
        color: 'white',
        marginLeft:20,
        marginBottom:30,
    }
});
