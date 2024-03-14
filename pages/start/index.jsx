import { Button, Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GradientButton from '../../components/buttons/GradientButton';
import { screens } from '../../screens.js';



const Start = (props) => {
    const screenHeight = Dimensions.get('window').height;

    const imageHeight = screenHeight * 0.65;
    const imageWidth = screenHeight * 0.46;

    const sprinklesArr = [
        {
            opacity: 1,
            top: '20%',
            right: '50%'
        },
        {
            opacity: .5,
            top: '10%',
            right: '50%'
        },
        {
            opacity: .5,
            top: '30%',
            right: '50%'
        },
        {
            opacity: .6,
            top: '20%',
            right: '70%'
        },
        {
            opacity: .4,
            top: '20%',
            right: '50%'
        },
        {
            opacity: .21,
            top: '5%',
            right: '60%',
        },
        {
            opacity: .5,
            top: '15%',
            right: '30%'
        },
        {
            opacity: .5,
            top: '40%',
            right: '60%'
        },
        {
            opacity: .3,
            top: '30%',
            right: '10%'
        },
        {
            opacity: .4,
            top: '10%',
            right: '30%'
        },
    ]


    return (
        <View style={[styles.background, { position: 'relative' }]}>

            {sprinklesArr.map((sprinkle, index) => (
                <View
                    key={index}
                    style={{
                        position: 'absolute',
                        backgroundColor: `rgba(212, 251, 84, ${sprinkle.opacity})`,
                        width: 3,
                        height: 3,
                        borderRadius: 1.5,
                        top: sprinkle.top,
                        right: sprinkle.right
                    }}
                />
            ))}


            <Image
                source={require('../../images/ray.png')}
                style={{ position: 'absolute', top: 0, right: 0, height: imageHeight, width: imageWidth }}
            />


            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 1, top: '30%' }}>
                    <View style={{ marginBottom: 40 }}>
                        <Text style={styles.heading}>wato</Text>
                    </View>
                    <Text style={styles.subHeading}>Zero Cost</Text>
                    <Text style={styles.subHeading}>WhatsApp Messaging</Text>
                    <Text style={styles.subHeading}>platform</Text>
                </View>

                <View style={{ marginBottom: '20%' }}>
                    <GradientButton fun={() => props.navigation.navigate(screens.register)} />
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={[styles.text, { color: 'rgba(255, 255, 255, 0.7)', }]}>
                            Already have an account? &nbsp;
                        </Text>
                        <Pressable style={{}} onPress={() => props.navigation.navigate(screens.login)}>
                            <Text style={[styles.text, { color: '#D4FB54' }]}>
                                Sign in instead
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Start

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Inter',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        letterSpacing: 0,
        textAlign: 'center',
        flexDirection: 'row',
        marginTop: 50,
    },
    heading: {
        color: '#FFFFFF',
        left: '5%',
        top: '40%',
        // borderWidth: 1,
        // borderColor: 'black',
        fontFamily: 'Sequel Sans',
        fontSize: 50,
        fontWeight: 'bold',
        // lineHeight: 59,
        letterSpacing: 0,
    },
    subHeading: {
        fontFamily: 'GT Super Txt Trial',
        fontSize: 28,
        fontWeight: 'normal',
        letterSpacing: 0,
        textAlign: 'left',
        color: "white",
        left: '5%',
    },
    background: {
        backgroundColor: '#131415',
        width: '100%',
        height: '100%'
    }
})