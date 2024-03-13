import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const GradientButton = ({fun= () => console.log('button is press.')}) => {
  return (
    <View style={styles.contanier}>
            <Pressable onPress={fun}>
                <LinearGradient
                    colors={['#2E2F30', '#141517']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.gradient}
                >
                    <Text style={styles.text}>Get Started</Text>
                </LinearGradient>
            </Pressable>
        </View>
  )
}

export default GradientButton

const styles = StyleSheet.create({
    contanier: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
    gradient: {
        width: 320,
        height: 48,
        // margin:10,
        padding: 8,
        paddingHorizontal: 18,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white', 
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color:'white',
        alignSelf:'center',
        fontSize:16,
        lineHeight:20,
        fontWeight:'500'
    }
})