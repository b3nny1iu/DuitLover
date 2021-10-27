import React from 'react'
import { View } from 'react-native'
import InputFieldText from '../atom/InputFieldText'

const CreateRegistrationForm = () => {
    return (
        <View>
            <InputFieldText textLabel='Username' textPlaceholder='Username' />
            <InputFieldText textLabel='Password' textPlaceholder='Password' />
        </View>
    )
}

export default CreateRegistrationForm
