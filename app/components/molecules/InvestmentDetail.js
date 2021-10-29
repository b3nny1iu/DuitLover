import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import { BackgroundStyle } from '../../styles/BackgroundStyle'
import LabelValue from '../atom/LabelValue'

const InvestmentDetail = ({roundedBorder}) => {
    const dashboardInvestmentData = useSelector((state) => state.dashboardCardReducer)

    return (
        <View style={roundedBorder ? BackgroundStyle.whiteShadowedCardView : {}}>
            <LabelValue textLabel='Total Investment:' textValue={`Rp${dashboardInvestmentData.totalInvestment}`} type='title' />

            <View style={styles.spaceHorizontalData}>
                <LabelValue textLabel='Total Yearly Return:' textValue={`Rp${dashboardInvestmentData.averageYearlyReturnValue}`} type='header' />
                <LabelValue textLabel='Yearly Return Rate:' textValue={`${dashboardInvestmentData.yearlyReturnRate}%`} type='header' />
            </View>

            <View style={styles.spaceHorizontalData}>
                <LabelValue textLabel='This Month Return (Oct 21):' textValue={`Rp${dashboardInvestmentData.thisMonthReturnValue}`} type='header' />
                <LabelValue textLabel='This Month Return Rate:' textValue={`${dashboardInvestmentData.thisMonthReturnRate}%`} type='header' />
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
