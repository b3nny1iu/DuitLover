import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Button from '../components/atom/Button'
import InvestmentDetail from '../components/molecules/InvestmentDetail'
import InvestmentList from '../components/molecules/InvestmentList'
import Welcome from '../components/molecules/Welcome'
import { Padding } from '../styles/Dimens'
import { TextStyle } from '../styles/TextStyle'

const HomePage = () => {
    const [activeInvestments, setActiveInvestments] = useState([])
    const [totalInvestment, setTotalInvestment] = useState(0)

    useEffect(() => {
        const getActiveInvestmentList = async () => {
            const investmentsFromServer = await fetchActiveInvestments(1)
            setActiveInvestments(investmentsFromServer)
            setTotalInvestment(calculateTotalInvestment())
        }

        getActiveInvestmentList()
    }, [])

    const fetchActiveInvestments = async (userId) => {
        const response = await fetch(`https://61716cf3c20f3a001705fcdb.mockapi.io/duitlover/api/User/${userId}/InvestmentHeader`)
        const data = await response.json()
        return data
    }

    const calculateTotalInvestment = () => {
        let total = 0
        for (const invest of activeInvestments) {
            total += parseFloat(invest.amount)
        }
        return total
    }

    return (
        <View style={{flex: 1}}>

            <View style={{flex: 1}}>
                <InvestmentList
                    data = {activeInvestments}
                    headerComponent={
                        <>
                            <Welcome />
                            <InvestmentDetail roundedBorder={true} data={{totalInvestment}} />
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
