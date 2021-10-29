import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Button from '../components/atom/Button.js'
import RegistrationForm from '../components/molecules/RegistrationForm'
import ScreenName from '../routes/ScreenName.js'
import { Padding } from '../styles/Dimens'
import { TextStyle } from '../styles/TextStyle'

const RegisterPage = () => {
    const navigation = useNavigation()

    return (
        <View style={{flex: 1}}>

            <View style={{flex: 1}}>
                <RegistrationForm/>
            </View>

            <Button text='Register' 
            styleType='secondaryTopRoundedCorner' 
            onPress={() => navigation.navigate(ScreenName.Home)}
            />
            
        </View>
    )
}

export default RegisterPage
