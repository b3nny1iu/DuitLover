import React from 'react'
import { Text, View } from 'react-native'
import { BackgroundStyle } from '../../styles/BackgroundStyle'
import { TextStyle } from '../../styles/TextStyle'

const Welcome = () => {
    return (
        <View style={BackgroundStyle.secondaryBottomRoundedBackground}>
            <Text style={[TextStyle.whiteBoldMediumText]}>Welcome, DuitLover User!</Text>
        </View>
    )
}

export default Welcome
