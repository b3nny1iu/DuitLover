import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Button from '../components/atom/Button.js'
import LoginForm  from '../components/molecules/LoginForm'
import { Padding } from '../styles/Dimens'
import { TextStyle } from '../styles/TextStyle'

const LoginPage = () => {

    return (
        <View style={{flex:1}}>

            <View style={{flex: 1}}>
                <LoginForm/>
            </View>

            <Button text='Login' styleType='secondaryTopRoundedCornerLogin' />
            <Button text='or Register' styleType='secondaryTopRoundedCorner' />
            
        </View>
    )
}

export default LoginPage

