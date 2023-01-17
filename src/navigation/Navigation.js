
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';


import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Icon  from 'react-native-vector-icons/Feather'

import HomeNavigation from './HomeNavigation'
import AuthNavigation from '../navigation/auth/AuthNavigation';



import LoginNavigation from './auth/LoginNavigation'

import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export default function Navigation() {
  return (
    <Stack.Navigator>
                    
                 <Stack.Screen name="home" component={HomeNavigation} options={{headerShown: false}} />   
                 <Stack.Screen name="Login" component={AuthNavigation} options={{headerShown: false}} />
                
                
    </Stack.Navigator>
  
/*
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeNavigation} options={{tabBarLabel: "Home",tabBarIcon: ({color,size}) =>(<Icon name="home" color={color} size={size}/>)}}/>
        <Tab.Screen name="Portfolio" component={PortfolioNavigation} options={{tabBarLabel: "Portfolio",tabBarIcon: ({color,size}) =>(<Icon name="briefcase" color={color} size={size}/>)}}/>
        <Tab.Screen name="Cv" component={CvNavigation} options={{tabBarLabel: "Curriculum Vitae",tabBarIcon: ({color,size}) =>(<Icon name="file-text" color={color} size={size}/>)}}/>
    </Tab.Navigator>

   */
  )
}