import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import Button from '../components/atom/Button.js'
import RegistrationForm from '../components/molecules/RegistrationForm'
import ScreenName from '../routes/ScreenName.js'

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
            onPress={() => navigation.replace(ScreenName.Home)}
            SaveData={OnPressSaveButton}
            />
            
        </View>
    )
}

export default RegisterPage
