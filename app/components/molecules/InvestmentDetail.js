import React from 'react'
import { StyleSheet, View } from 'react-native'
import { BackgroundStyle } from '../../styles/BackgroundStyle'
import LabelValue from '../atom/LabelValue'

const InvestmentDetail = ({roundedBorder}) => {
    return (
        <View style={roundedBorder ? BackgroundStyle.whiteShadowedCardView : {}}>
            <LabelValue textLabel='Total Investment:' textValue='Rp50,425,769.80' type='title' />

            <LabelValue textLabel='Total Not Invested Yet:' textValue='Rp10,355,249.17' type='title' />

            <View style={styles.spaceHorizontalData}>
                <LabelValue textLabel='Average Yearly Return:' textValue='Rp5,042,576.98' />
                <LabelValue textLabel='Yearly Return Rate:' textValue='9.98%' />
            </View>

            <View style={styles.spaceHorizontalData}>
                <LabelValue textLabel='Return Value This Month (Oct 21):' textValue='Rp4,646,776.67' />
                <LabelValue textLabel='This Month Return Rate:' textValue='8.3%' />
            </View>
        </View>
    )
}

export default InvestmentDetail

const styles = StyleSheet.create({
    spaceHorizontalData: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
})
