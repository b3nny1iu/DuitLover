import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../screens/HomePage'
import InsertInvestasi from '../screens/InsertInvestasi'
import TestScreen from '../screens/TestScreen';
import ScreenName from './ScreenName';

const Stack = createNativeStackNavigator();

export default function RouteNavigation() {
    return (
        <NavigationContainer initialRouteName={ScreenName.Home}>
            <Stack.Navigator>
                <Stack.Screen
                    name={ScreenName.Home}
                    component={HomePage}
                    options={{headerShown: false}} // To Remove Default Stack Navigator Header
                />
                <Stack.Screen name={ScreenName.InsertInvestment} component={InsertInvestasi} />
                <Stack.Screen name={ScreenName.TestScreen} component={TestScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}