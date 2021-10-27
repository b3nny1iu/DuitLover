import React from 'react'
import { View } from 'react-native'
import InputFieldText from '../atom/InputFieldText'
import InvestmentTypePicker from '../atom/InvestmentTypePicker'
import InputFieldNumber from '../atom/InputFieldNumber'



const InsertInvestasiForm = () => {
    return (
        <View>
            <InputFieldText textLabel='Investment Name' textPlaceholder='Type your investment name...' />
            <InvestmentTypePicker textLabel='Investment Type' />
            <InputFieldNumber textLabel='Total Investment' textPlaceholder='Type your amount of investment...' />
            
        </View>
    )
}

export default InsertInvestasiForm
