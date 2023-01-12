import { View, Text } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import CvScreen from '../screens/Cv'


const Stack = createStackNavigator()


export default function CvNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Cv" component={CvScreen}  options={{title: "Curriculum Vitae"}}/>
    </Stack.Navigator>
  )
}