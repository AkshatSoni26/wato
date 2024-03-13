import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import FormContainer from '../../components/formContanier/FormContanier'
import PasswordInput from '../../components/passwardContanier/PasswardContanier'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import GoogleButton from '../../components/buttons/GoogleButton'
import AntDesign from 'react-native-vector-icons/AntDesign'; // Make sure to install this library
import Feather from 'react-native-vector-icons/Feather'; // Make sure to install this library
import { screens } from '../../screens.js'
import RadialGradient from 'react-native-radial-gradient'
import { commanStyles } from '../../components/styles.js'



const Register = (props) => {

  const [isAgree, setIsAgree] = useState(true)

  return (
    <View style={commanStyles.background}>
      <View style={{ flex: 1 }}>
        <FormContainer heading='Please sign-up for your account'>
          {/* <RadialGradient style={{width:200,height:200, position:'absolute'}}
                        colors={['black','green','blue','red']}
                        stops={[0.1,0.4,0.3,0.75]}
                        center={[100,100]}
                        radius={200}>
</RadialGradient> */}
          {/* <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'white',
              opacity: 0.4,
              position: 'absolute',
              right: -50,
              top: -50,
              borderRadius: 50,
            }}
          /> */}

          <TextInput style={styles.input} placeholder='Name' placeholderTextColor={'rgba(255, 255, 255, 0.4)'} />
          <TextInput style={styles.input} placeholder='Email' placeholderTextColor={'rgba(255, 255, 255, 0.4)'} />
          <PasswordInput />
          <View style={{ display: 'flex', flexDirection: "row" }}>
            <Pressable style={[styles.forgot, { display: 'flex', flexDirection: 'row', alignItems: 'center' }]} onPress={() => setIsAgree((agree => !agree))}>
              <Text>
                {
                  isAgree
                    ?
                    <AntDesign name='checksquare' size={20} color='rgba(212, 251, 84, 1)' />
                    :
                    <Feather name='square' size={20} color='rgba(212, 251, 84, 1)' />
                }
              </Text>
            </Pressable>
            <Text style={[styles.forgotText, { color: 'white' }]}>&nbsp; I agree &nbsp;
              <Text style={{ color: '#D4FB54' }}>
                to privacy policy & terms
              </Text>
            </Text>
          </View>
          <View style={{}}>
            <PrimaryButton title='Sign Up' fun={() => props.navigation.navigate(screens.home)} />
            <View style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
            <Text style={[styles.text, { color: 'rgba(255, 255, 255, 0.7)' }]}>
              Already have an account? &nbsp;
            </Text>
            <Pressable onPress={() => props.navigation.navigate(screens.login)}>
              <Text style={[styles.text, { color: '#D4FB54' }]}>
                Sign in instead
              </Text>
            </Pressable>
            </View>
            <Text style={[styles.text, { color: 'rgba(255, 255, 255, 0.7)', marginVertical: 20 }]}>
              or
            </Text>
            <GoogleButton />
          </View>
        </FormContainer>
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 48,
    paddingHorizontal: 16,
    marginVertical: 10,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    color: "white"
    // placeholderTextColor:'rgba(255, 255, 255, 0.4)',
  },
  forgot: {
    // alignItems: 'flex-end', // Align the content to the end (right)
    // justifyContent: 'center', // Uncomment this line if you want to center the content vertically
  },
  forgotText: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0,
    // textAlign: 'right',
    color: 'rgba(212, 251, 84, 1)',
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'center',
    flexDirection: 'row',
  },
})