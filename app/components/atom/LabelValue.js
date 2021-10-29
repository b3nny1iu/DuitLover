import React from 'react'
import { Text, View } from 'react-native'
import { Padding } from '../../styles/Dimens'
import { TextStyle } from '../../styles/TextStyle'

const LabelValue = ({textLabel, textValue, type}) => {
    let labelStyle 
    let valueStyle

    switch (type) {
        case 'title':
            labelStyle = [TextStyle.secondaryBoldMediumText, Padding.title_top_horizontal]
            valueStyle = [TextStyle.darkBoldBigText, Padding.title_bottom_horizontal]
            break;
        case 'header':
            labelStyle = [Padding.common_top_horizontal]
            valueStyle = [Padding.common_bottom_horizontal]
        default:
            labelStyle = [labelStyle === undefined ? Padding.little_top_horizontal : labelStyle, TextStyle.secondaryBoldCaptionText]
            valueStyle = [valueStyle === undefined ? Padding.little_bottom_horizontal : valueStyle, TextStyle.darkBoldRegularText]
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