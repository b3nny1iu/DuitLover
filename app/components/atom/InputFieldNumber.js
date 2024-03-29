import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Color } from '../../styles/Color'
import { Dimens } from '../../styles/Dimens'
import { useSelector, useDispatch } from 'react-redux'
import { setAmount, setReturn } from '../../store/SaveInvestmentReducer'

const InputFieldText = ({ textLabel, textPlaceholder, tipe }) => {
    const [number, setNumber] = useState(null);

    const dispatch = useDispatch()

    const onChangeNumber = (test) => {
        setNumber(test)
        if (tipe == 'amount') {
            dispatch(setAmount(test))
        }
        else {
            dispatch(setReturn(test))
        }
        
    }

    return (
        <View>
            <Text style={styles.secondaryBoldMediumText}>{textLabel}</Text>
            <TextInput
                style={styles.txtInput}
                onChangeText={onChangeNumber}
                value={number}
                placeholder={textPlaceholder}
                keyboardType="number-pad"
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
