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
    const PostURL = 'https://61716cf3c20f3a001705fcdb.mockapi.io/duitlover/api/User'

    const DataToSave = useSelector((state) => state.registerReducer)

    const OnPressSaveButton = async () => {
        const RegAccount = await axios.post(PostURL, {
            username: DataToSave.username,
            password: DataToSave.password
        })
    }
    
    return (
        <View style={{flex: 1}}>

            <View style={{flex: 1}}>
                <RegistrationForm/>
            </View>

            <Button text='Register' 
            styleType='secondaryTopRoundedCorner' 
            onPress={() => navigation.navigate(ScreenName.Home)}
            SaveData={OnPressSaveButton}
            />
            
        </View>
    )
}

export default RegisterPage
