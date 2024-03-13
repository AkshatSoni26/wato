import { Button, Image, Pressable, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import React from 'react';

const GoogleButton = ({ title = 'Continue with Google', fun = () => console.log('primary button is clicked.') }) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => {
                ToastAndroid.showWithGravityAndOffset(
                    'right know there is no support for google login.',
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM,
                    25,
                    50
                  );
            }} style={styles.gradient}>
                <Image 
                    source={require('../../images/google.png')} // Use require for local images
                    style={styles.icon}
                />
                <Text style={styles.text}>{title}</Text>
            </Pressable>
        </View>
    );
};

export default GoogleButton;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    gradient: {
        width: 300,
        height: 48,
        padding: 8,
        paddingHorizontal: 18,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(19, 20, 21, 1)',
        borderWidth: 1,
        borderColor: 'white',
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10, // Add margin for separation
    },
    text: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '500',
    },
});
