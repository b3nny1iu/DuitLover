import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import InputFieldText from '../atom/InputFieldText'
import InputFieldPassword from '../atom/InputFieldPassword'

const CreateRegistrationForm = () => {

    return (
        <View style={styles.StyleForm}>
            <InputFieldText textLabel='Username' textPlaceholder='Username'  />
            <InputFieldPassword textLabel='Password' textPlaceholder='Password' />
        </View>
    )
}

export default CreateRegistrationForm

const styles = StyleSheet.create({
    StyleForm: {
        display: 'flex',
        justifyContent: 'center',
        height: "100%"
    },
})