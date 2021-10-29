import React, { useState } from 'react'
import { View } from 'react-native'
import InputFieldText from '../atom/InputFieldText'

const LoginForm = () => {

    return (
        <View>
            <InputFieldText textLabel='Email/ Username' textPlaceholder='Insert Your Email / Username'  />
            <InputFieldText textLabel='Password' textPlaceholder='Insert Your Password' />
        </View>
    )
}


export default LoginForm
