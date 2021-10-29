import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { BackgroundStyle } from '../../styles/BackgroundStyle'
import { TextStyle } from '../../styles/TextStyle'

let buttonStyle = []

const Button = ({text, styleType, SaveData}) => {

    //const OnPressHandle = () => {
    //    console.log(returnValue)
    //}

    switch (styleType) {
        case 'secondaryTopRoundedCorner':
            buttonStyle = [BackgroundStyle.secondaryTopRoundedBackground]
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