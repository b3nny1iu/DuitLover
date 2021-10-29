import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../screens/HomePage'
import InsertInvestasi from '../screens/InsertInvestasi'
import ScreenName from './ScreenName';
import LoginPage from '../screens/Login';
import RegisterPage from '../screens/Register';

const Stack = createNativeStackNavigator();

const RouteNavigation = () => {
    return (
        <NavigationContainer initialRouteName={ScreenName.Register}>
            <Stack.Navigator>
                <Stack.Screen name={ScreenName.Login} component={LoginPage} />
                <Stack.Screen name={ScreenName.Register} component={RegisterPage} />
                <Stack.Screen
                    name={ScreenName.Home}
                    component={HomePage}
                    options={{headerShown: false}} // To Remove Default Stack Navigator Header
                />
                <Stack.Screen name={ScreenName.InsertInvestment} component={InsertInvestasi} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RouteNavigation