import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { BackgroundStyle } from '../../styles/BackgroundStyle'
import { TextStyle } from '../../styles/TextStyle'
import RegisterForm from '../molecules/RegistrationForm'

let buttonStyle = []

const Button = ({text, styleType}) => {
    switch (styleType) {
        case 'secondaryTopRoundedCorner':
            buttonStyle = [BackgroundStyle.secondaryTopRoundedBackground]
            break;
        case 'secondaryTopRoundedCornerLogin':
            buttonStyle = [BackgroundStyle.secondaryTopRoundedBackgroundLogin]
            break;
        default:
            buttonStyle = []
            break;
    }

    return (
        <TouchableOpacity activeOpacity={0.9} style={buttonStyle}>
            <Text style={[TextStyle.whiteBoldMediumText, {textAlign: 'center'}]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button