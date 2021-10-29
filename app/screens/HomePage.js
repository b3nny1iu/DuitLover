import React from 'react'
import { Text, View } from 'react-native'
import Button from '../components/atom/Button'
import InvestmentDetail from '../components/molecules/InvestmentDetail'
import InvestmentList from '../components/molecules/InvestmentList'
import Welcome from '../components/molecules/Welcome'
import { Padding } from '../styles/Dimens'
import { TextStyle } from '../styles/TextStyle'

const HomePage = () => {

    return (
        <View style={{flex: 1}}>

            <View style={{flex: 1}}>
                <InvestmentList
                    headerComponent={
                        <>
                            <Welcome />
                            <InvestmentDetail roundedBorder={true} />
                            <Text style={[TextStyle.secondaryBoldBigText, Padding.common_top_horizontal]}>Active Investment List</Text>
                        </>
                    }
                />
            </View>

            <Button text='Insert New Investment     +' styleType='secondaryTopRoundedCorner' />

        </View>
    )
}

export default HomePage
