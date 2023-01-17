
import React from 'react'

import Icon  from 'react-native-vector-icons/Feather'

import LoginNavigation from './auth/LoginNavigation'


export default function Navigation() {
  return (

    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeNavigation} options={{tabBarLabel: "Home",tabBarIcon: ({color,size}) =>(<Icon name="home" color={color} size={size}/>)}}/>
        <Tab.Screen name="Portfolio" component={PortfolioNavigation} options={{tabBarLabel: "Portfolio",tabBarIcon: ({color,size}) =>(<Icon name="briefcase" color={color} size={size}/>)}}/>
        <Tab.Screen name="Cv" component={CvNavigation} options={{tabBarLabel: "Curriculum Vitae",tabBarIcon: ({color,size}) =>(<Icon name="file-text" color={color} size={size}/>)}}/>
    </Tab.Navigator>

   
  )
}