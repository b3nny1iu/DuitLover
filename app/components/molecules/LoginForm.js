import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import InputFieldText from '../atom/InputFieldText'

const LoginForm = () => {

    return (
        <View style={styles.StyleForm}>
            <InputFieldText textLabel='Email/ Username' textPlaceholder='Insert Your Email / Username'  />
            <InputFieldText textLabel='Password' textPlaceholder='Insert Your Password' />
        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    StyleForm: {
        display: 'flex',
        justifyContent: 'center',
        height: "100%"
    },
})