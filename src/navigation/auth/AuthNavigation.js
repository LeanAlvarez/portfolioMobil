
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Icon  from 'react-native-vector-icons/Feather'

import LoginNavigation from '../auth/LoginNavigation'

const Stack = createStackNavigator()


export default function AuthNavigation() {
  return (

    <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginNavigation} options={{headerShown: false}}/>
    </Stack.Navigator>

   
  )
}