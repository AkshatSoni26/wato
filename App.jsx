import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Start from './pages/start'
import Login from './pages/login'
import Register from './pages/register'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { screens } from './screens.js'
import Home from './pages/home/Home.jsx'



const Stack = createNativeStackNavigator();


const App = () => {

  return (
    <NavigationContainer
    screenOptions={{
      ScreenOrientation:'portrait'
    }}
    >
      <Stack.Navigator screenOptions={{
        headerShown:false
      }} >
        <Stack.Screen name={screens.start} component={Start} />
        <Stack.Screen name={screens.login} component={Login} />
        <Stack.Screen name={screens.register} component={Register} />
        <Stack.Screen name={screens.home} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
