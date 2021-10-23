import React, { useState } from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import { Color } from '../styles/Color'
import { Dimens } from '../styles/Dimens'
import InsertInvestasiForm from '../components/molecules/InsertInvestasiForm'
import Button from '../components/atom/Button'


const InsertInvestasi = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.whiteShadowedCardView}>
                <InsertInvestasiForm />
                
            </View>
            <Button text='Save Investment' styleType='secondaryTopRoundedCorner' />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //marginHorizontal: 50,
        justifyContent: 'space-between'
    },
    txtInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    label: {
        //padding: 20,
        left: 10
    },
    btnStyle: {
        //height: 40,
        margin: 12,
        //borderWidth: 1,
        padding: 10,
    },
    whiteShadowedCardView: {
        backgroundColor: Color.white,
        borderColor: Color.light_gray,
        borderWidth: 2,
        borderRadius: 10,
        margin: 10,
    },
})


export default InsertInvestasi