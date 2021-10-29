import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Button from '../components/atom/Button.js'
import RegistrationForm from '../components/molecules/RegistrationForm'
import { Padding } from '../styles/Dimens'
import { TextStyle } from '../styles/TextStyle'

const HomePage = () => {

    return (
        <View style={{flex: 1}}>

            <View style={{flex: 1}}>
                <RegistrationForm/>
            </View>

            <Button text='Register' styleType='secondaryTopRoundedCorner' />
            
        </View>
    )
}

export default HomePage
