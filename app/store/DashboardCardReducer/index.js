import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalInvestment: 0,
    averageYearlyReturnValue: 0,
    yearlyReturnRate: 0,
    thisMonthReturnValue: 0,
    thisMonthReturnRate: 0,
}

export const investmentDetailSlice = createSlice({
    name: 'investmentDetail',
    initialState,
    reducers: {
        setTotalInvestment: (state, action) => {
            state.totalInvestment = action.payload
        },
        setAverageYearlyReturnValue: (state, action) => {
            state.averageYearlyReturnValue = action.payload
        },
        setYearlyReturnRate: (state, action) => {
            state.yearlyReturnRate = action.payload
        },
        setThisMonthReturnValue: (state, action) => {
            state.thisMonthReturnValue = action.payload
        },
        setThisMonthReturnRate: (state, action) => {
            state.thisMonthReturnRate = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setTotalInvestment, setAverageYearlyReturnValue, setYearlyReturnRate, setThisMonthReturnValue, setThisMonthReturnRate } = investmentDetailSlice.actions

export default investmentDetailSlice.reducer