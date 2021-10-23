import React from 'react'
import { View } from 'react-native'
import { BackgroundStyle } from '../../styles/BackgroundStyle'
import LabelValue from './LabelValue'

const InvestmentItem = () => {
    return (
        <View style={BackgroundStyle.whiteShadowedCardView}>
            <LabelValue textLabel='Investment Title' type='title' />
            <LabelValue textValue='Amount: 12' />
        </View>
    )
}

export default InvestmentItem
