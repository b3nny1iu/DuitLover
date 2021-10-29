import React, { useEffect, useState } from 'react'
import { FlatList, RefreshControl } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveInvestmentList } from '../../store/InvestmentsReducer';
import InvestmentItem from '../atom/InvestmentItem';
import { setTotalInvestment, setAverageYearlyReturnValue, setYearlyReturnRate, setThisMonthReturnValue, setThisMonthReturnRate } from '../../store/DashboardCardReducer'

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const InvestmentList = ({headerComponent, footerComponent}) => {
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = () => {
        setRefreshing(true)
        getActiveInvestmentList()
        handleDasboardInvestmentData()
        setRefreshing(false)
    }

    const investmentsData = useSelector((state) => state.investmentsReducer)
    const dashboardInvestmentData = useSelector((state) => state.dashboardCardReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        getActiveInvestmentList()
    }, [])

    useEffect(() => {
        handleDasboardInvestmentData()
    }, [investmentsData, dashboardInvestmentData])

    const handleDasboardInvestmentData = () => {
        dispatch(setTotalInvestment(calculateTotalInvestment()))
        dispatch(setAverageYearlyReturnValue(calculateReturnValue(type='year')))
        dispatch(setYearlyReturnRate(calculateReturnRate(type='year')))
        dispatch(setThisMonthReturnValue(calculateReturnValue(type='month')))
        dispatch(setThisMonthReturnRate(calculateReturnRate(type='month')))
    }

    const formatDate = (serverFormatDateString) => {
        let date = new Date(serverFormatDateString)
        const day = date.getDay()
        const month = monthNames[date.getMonth()]
        const year = date.getFullYear()
        return `${day} ${month} ${year}`
    }

    const isCurrentMonth = (dateString) => {
        let date = new Date(dateString)
        let currDate = new Date()
        return date.getMonth() == currDate.getMonth()
    }

    const getActiveInvestmentList = async () => {
            let investmentsFromServer = await fetchActiveInvestments(1)
            investmentsFromServer.forEach(invest => {
                invest.createdAt = formatDate(invest.createdAt)
            });
            dispatch(setActiveInvestmentList(investmentsFromServer))
        }

    const fetchActiveInvestments = async (userId) => {
        const response = await fetch(`https://61716cf3c20f3a001705fcdb.mockapi.io/duitlover/api/User/${userId}/InvestmentHeader`)
        const data = await response.json()
        console.log(data)
        return data
    }

    const calculateTotalInvestment = () => {
        let total = 0
        for (const invest of investmentsData.activeInvestmentList) {
            total += parseFloat(invest.amount)
        }
        return total
    }

    const calculateReturnValue = (type) => {
        let returnValue = 0
        for (const invest of investmentsData.activeInvestmentList) {
            if(type === 'month') isCurrentMonth(invest.createdAt) && (returnValue += parseFloat(invest.return * invest.amount))
            else returnValue += parseFloat(invest.return * invest.amount)
        }
        return returnValue
    }

    const calculateReturnRate = (type) => {
        return ((type === 'month' ? dashboardInvestmentData.thisMonthReturnValue : dashboardInvestmentData.averageYearlyReturnValue) / dashboardInvestmentData.totalInvestment).toFixed(2)
    }

    const renderItem = ({ item }) => (
        <InvestmentItem data={item} />
    );

    return (
        <FlatList
            data={investmentsData.activeInvestmentList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            ListHeaderComponent={headerComponent}
            ListFooterComponent={footerComponent}
        />
    )
}

export default InvestmentList
