import React from 'react'
import { View } from 'react-native'
import { BackgroundStyle } from '../../styles/BackgroundStyle'
import LabelValue from './LabelValue'

const InvestmentItem = ({data}) => {
    return (
        <View style={BackgroundStyle.whiteShadowedCardView}>
            <LabelValue textLabel={`${data.name}`} type='title' />
            <LabelValue textLabel={'Date'} textValue={`${data.createdAt}`} />
            <LabelValue textLabel={'Type'} textValue={`${data.type}`} />
            <LabelValue textLabel={'Amount'} textValue={`${data.amount}`} />
            <LabelValue textLabel={'Return'} textValue={`${data.return}%`} />
        </View>
    )
}

export default InvestmentItem
