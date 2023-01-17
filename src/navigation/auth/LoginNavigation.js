import { createStackNavigator } from '@react-navigation/stack'


import LoginScreen from '../../screens/auth/Login'

const Stack = createStackNavigator()


export default function PortfolioNavigation() {
    return (
      <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown: false}}/>  
      </Stack.Navigator>
    )
  }