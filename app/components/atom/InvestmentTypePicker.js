import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { Color } from '../../styles/Color'
import { Dimens } from '../../styles/Dimens'

const InvestmentTypePicker = ({ textLabel }) => {
    const [selectedType, setSelectedType] = useState();

    return (
        <View>
            <Text style={styles.secondaryBoldMediumText}>{textLabel}</Text>
            <Picker
                selectedValue={selectedType}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedType(itemValue)
                }>
                <Picker.Item label="Saham" value="saham" />
                <Picker.Item label="Reksadana" value="reksadana" />
                <Picker.Item label="Logam Mulia" value="logammulia" />
            </Picker>
        </View>
    )
}

export default InvestmentTypePicker

const styles = StyleSheet.create({
    secondaryBoldMediumText: {
        fontWeight: 'bold',
        fontSize: Dimens.text_medium,
        color: Color.secondary,
        paddingHorizontal: 12,
        paddingTop: 12,
    },
})
