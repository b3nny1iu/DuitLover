import React from 'react'
import { View } from 'react-native'
import { BackgroundStyle } from '../../styles/BackgroundStyle'
import LabelValue from './LabelValue'

const InvestmentItem = ({data}) => {
    return (
        <View style={BackgroundStyle.whiteShadowedCardView}>
            <LabelValue textLabel={`${data.investment}`} type='title' />
            <LabelValue textValue={`Amount: ${data.amount}`} />
        </View>
    )
}

export default InvestmentItem
