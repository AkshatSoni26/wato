import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import FormContainer from '../../components/formContanier/FormContanier'
import PasswordInput from '../../components/passwardContanier/PasswardContanier'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import GoogleButton from '../../components/buttons/GoogleButton'
import { screens } from '../../screens.js'
import { commanStyles } from '../../components/styles.js'
import LinearGradient from 'react-native-linear-gradient'

const Login = (props) => {
  return (
    <View style={commanStyles.background}>
      <View style={{ flex: 1, overflow: 'hidden' }}>
        <FormContainer heading='Please sign-in to your account'>
        <View style={styles.gradientContainer}>
          </View>
          <TextInput style={styles.input} placeholder='Email' placeholderTextColor={'rgba(255, 255, 255, 0.4)'} />
          <PasswordInput />
          <View>
            <Pressable style={styles.forgot} onPress={() => console.log('sdfn sanfk jsd')}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </Pressable>
          </View>
          <View style={{}}>
            <PrimaryButton title='Login' fun={() => () => props.navigation.navigate(screens.home)} />
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={[styles.text, { color: 'rgba(255, 255, 255, 0.7)' }]}>
                New to our platform? &nbsp;
              </Text>
              <Pressable onPress={() => props.navigation.navigate(screens.register)}>
                <Text style={[styles.text, { color: '#D4FB54' }]}>
                  Create an account
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

export default Login

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 48,
    paddingHorizontal: 16,
    marginVertical: 10,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    color: 'white'
    // placeholderTextColor:'rgba(255, 255, 255, 0.4)',
  },
  forgot: {
    alignItems: 'flex-end', // Align the content to the end (right)
    // justifyContent: 'center', // Uncomment this line if you want to center the content vertically
  },
  forgotText: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'right',
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
  background: {
    backgroundColor: '#131415',
    width: '100%',
    height: '100%'
  },
})