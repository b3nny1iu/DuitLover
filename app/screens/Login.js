import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Button from '../components/atom/Button.js'
import LoginForm from '../components/molecules/LoginForm'
import ScreenName from '../routes/ScreenName.js'
import { Padding } from '../styles/Dimens'
import { TextStyle } from '../styles/TextStyle'

const LoginPage = () => {
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1 }}>

            <View style={{ flex: 1 }}>
                <LoginForm />
            </View>

            <Button text='Login'
                styleType='secondaryTopRoundedCornerLogin'
                onPress={() => {
                    navigation.replace(ScreenName.Home)
                    console.log('Login Pressed')
                }} />
            <Button text='or Register' styleType='secondaryTopRoundedCorner' onPress={() => {
                navigation.navigate(ScreenName.Register)
                console.log('Register Pressed')
            }} />

        </View>
    )
}

export default LoginPage

