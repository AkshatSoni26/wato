import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PrimaryButton = ({ title = 'click here', fun = () => console.log('primary button is clicked.') }) => {
    return (
        <View style={styles.contanier}>
            <Pressable onPress={fun} style={styles.gradient}>
                <Text style={styles.text}>{title}</Text>
            </Pressable>
            {/* <View>
                <Text>
                    New to our platform?
                    <Text>
                        Create an account
                    </Text>
                </Text>
            </View> */}
        </View>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    contanier: {
        // flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
    gradient: {
        width: 300,
        height: 48,
        // margin:10,
        padding: 8,
        paddingHorizontal: 18,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(212, 251, 84, 1)'
    },
    text: {
        color: 'black',
        alignSelf: 'center',
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '500'
    }
})