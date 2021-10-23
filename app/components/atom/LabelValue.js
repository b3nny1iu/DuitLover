import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Color } from '../../styles/Color'
import { Dimens } from '../../styles/Dimens'

const LabelValue = ({textLabel, textValue, type}) => {
    let labelStyle 
    let valueStyle

    switch (type) {
        case 'title':
            labelStyle = [styles.secondaryBoldMediumText]
            valueStyle = [styles.darkBoldBigText]
            break;
    
        default:
            labelStyle = [styles.secondaryBoldRegularText]
            valueStyle = [styles.darkBoldRegularText]
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

const styles = StyleSheet.create({
    secondaryBoldMediumText: {
        fontWeight: 'bold',
        fontSize: Dimens.text_medium,
        color: Color.secondary,
        paddingHorizontal: 12,
        paddingTop: 12,
    },
    darkBoldBigText: {
        fontWeight: 'bold',
        fontSize: Dimens.text_big,
        color: Color.dark,
        paddingHorizontal: 12,
        paddingBottom: 15,
    },
    secondaryBoldRegularText: {
        fontWeight: 'bold',
        fontSize: Dimens.text_caption,
        color: Color.secondary,
        paddingHorizontal: 12,
        paddingTop: 12,
    },
    darkBoldRegularText: {
        fontWeight: 'bold',
        fontSize: Dimens.text_regular,
        color: Color.dark,
        paddingHorizontal: 12,
        paddingBottom: 15,
    }
})
