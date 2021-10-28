import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Color } from '../../styles/Color'
import { Dimens } from '../../styles/Dimens'

let buttonStyle = []

const Button = ({text, styleType, SaveData}) => {

    //const OnPressHandle = () => {
    //    console.log(returnValue)
    //}

    switch (styleType) {
        case 'secondaryTopRoundedCorner':
            buttonStyle = [styles.secondaryTopRoundedBackground]
            break;
    
        default:
            buttonStyle = []
            break;
    }

    return (
        <TouchableOpacity activeOpacity={0.9} style={buttonStyle} onPress={SaveData}>
            <Text style={[styles.whiteBoldMediumText, {textAlign: 'center'}]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    whiteBoldMediumText: {
        fontWeight: 'bold',
        fontSize: Dimens.text_medium,
        color: Color.white,
        padding: 12,
    },
    secondaryTopRoundedBackground: {
        backgroundColor: Color.secondary,
        borderTopStartRadius: 10, 
        borderTopEndRadius: 10
    },
})
