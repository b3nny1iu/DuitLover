import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Color } from '../../styles/Color'
import { Dimens } from '../../styles/Dimens'

const InputFieldText = ({ textLabel, textPlaceholder }) => {
    const [text, onChangeText] = useState(null);

    return (
        <View>
            <Text style={styles.secondaryBoldMediumText}>{textLabel}</Text>
            <TextInput
                style={styles.txtInput}
                onChangeText={onChangeText}
                value={text}
                placeholder={textPlaceholder}
            />
        </View>
    )
}

export default InputFieldText

const styles = StyleSheet.create({
    secondaryBoldMediumText: {
        fontWeight: 'bold',
        fontSize: Dimens.text_medium,
        color: Color.secondary,
        paddingHorizontal: 12,
        paddingTop: 12,
    },
    txtInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})
