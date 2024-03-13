import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import GradientButton from '../../components/buttons/GradientButton';
import { screens } from '../../screens.js';

const Start = (props) => {
    return (
        <View style={[styles.background, { position: 'relative' }]}>
            

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