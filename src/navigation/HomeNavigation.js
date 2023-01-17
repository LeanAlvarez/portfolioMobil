import { View, Text } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon  from 'react-native-vector-icons/Feather'


import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/Home'
import PortfolioNavigation from '../screens/Portfolio'
import CvNavigation from '../screens/Cv'


const Tab = createBottomTabNavigator()


export default function HomeNavigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarLabel: "Inicio",tabBarIcon: ({color,size}) =>(<Icon name="home" color={color} size={size}/>)}}/>
        <Tab.Screen name="Portfolio" component={PortfolioNavigation} options={{tabBarLabel: "Portfolio",tabBarIcon: ({color,size}) =>(<Icon name="briefcase" color={color} size={size}/>)}}/>
        <Tab.Screen name="Cv" component={CvNavigation} options={{tabBarLabel: "Curriculum Vitae",tabBarIcon: ({color,size}) =>(<Icon name="file-text" color={color} size={size}/>)}}/>
    </Tab.Navigator>
  )
}