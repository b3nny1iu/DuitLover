import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    investmentName: "",
    investmentType: "",
    investmentAmount: 0,
    returnValue: 0,
}

export const saveInvestmentSlice = createSlice({
    name: 'saveInvestment',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.investmentName = action.payload
        },
        setType: (state, action) => {
            state.investmentType = action.payload
        },
        setAmount: (state, action) => {
            state.investmentAmount = action.payload
        },
        setReturn: (state, action) => {
            state.returnValue = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setName, setType, setAmount, setReturn } = saveInvestmentSlice.actions

export default saveInvestmentSlice.reducer