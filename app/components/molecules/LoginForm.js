import React, { useState } from 'react'
import { View } from 'react-native'
import InputFieldText from '../atom/InputFieldText'
import InputFieldPassword from '../atom/InputFieldPassword'

const LoginForm = () => {

    return (
        <View>
            <InputFieldText textLabel='Email/ Username' textPlaceholder='Insert Your Email / Username'  />
            <InputFieldPassword textLabel='Password' textPlaceholder='Insert Your Password' />
        </View>
    )
}


export default LoginForm
