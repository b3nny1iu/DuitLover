import React from 'react'
import { Text, View } from 'react-native'
import { TextStyle } from '../../styles/TextStyle'

const LabelValue = ({textLabel, textValue, type}) => {
    let labelStyle 
    let valueStyle

    switch (type) {
        case 'title':
            labelStyle = [TextStyle.secondaryBoldMediumText]
            valueStyle = [TextStyle.darkBoldBigText]
            break;
    
        default:
            labelStyle = [TextStyle.secondaryBoldRegularText]
            valueStyle = [TextStyle.darkBoldRegularText]
            break;
    }

    return (
        <View style={[{flex:1, flexShrink: 1}]}>
            <Text style={labelStyle}>{textLabel}</Text>
            <Text style={valueStyle}>{textValue}</Text>
        </View>
    )
}

export default LabelValue