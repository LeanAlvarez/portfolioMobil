import { View, Text } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import PortfolioScreen from '../screens/Portfolio'
import DetallePortfolioScreen from '../screens/DetallePortfolio'


const Stack = createStackNavigator()

export default function PortfolioNavigation() {
  return (
    <Stack.Navigator>
              <Stack.Screen name="Portfolio" component={PortfolioScreen} options={{title: "Trabajos Realizados"}}/>
              <Stack.Screen name="DetallePortfolio" component={DetallePortfolioScreen} options={{title: "Detalles"}}/>

    </Stack.Navigator>
  )
}