import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeInvestmentList: []
}

export const investmentsSlice = createSlice({
    name: 'ActiveInvestmentList',
    initialState,
    reducers: {
        setActiveInvestmentList: (state, action) => {
            state.activeInvestmentList = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setActiveInvestmentList } = investmentsSlice.actions

export default investmentsSlice.reducer