import { createStackNavigator } from '@react-navigation/stack'


import LoginScreen from '../../screens/auth/Login'
import SignupScreen from '../../screens/auth/SignUp'

const Stack = createStackNavigator()


export default function PortfolioNavigation() {
    return (
      <Stack.Navigator>
                <Stack.Screen name="SignUp" component={SignupScreen} options={{headerShown: false}} />
                <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown: false}}/>
               
      </Stack.Navigator>
    )
  }