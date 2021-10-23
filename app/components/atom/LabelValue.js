import React from 'react'
import { Text, View } from 'react-native'
import { Padding } from '../../styles/Dimens'
import { TextStyle } from '../../styles/TextStyle'

const LabelValue = ({textLabel, textValue, type}) => {
    let labelStyle 
    let valueStyle

    switch (type) {
        case 'title':
            labelStyle = [TextStyle.secondaryBoldMediumText, Padding.common_top_horizontal]
            valueStyle = [TextStyle.darkBoldBigText, Padding.common_bottom_horizontal]
            break;
    
        default:
            labelStyle = [TextStyle.secondaryBoldCaptionText, Padding.common_top_horizontal]
            valueStyle = [TextStyle.darkBoldRegularText, Padding.common_bottom_horizontal]
            break;
    }

    return (
        <View style={[{flex:1, flexShrink: 1}]}>
            {textLabel!=undefined && <Text style={labelStyle}>{textLabel}</Text>}
            {textValue!=undefined && <Text style={valueStyle}>{textValue}</Text>}
        </View>
    )
}

export default LabelValue