import { configureStore } from '@reduxjs/toolkit'
import saveInvestmentReducer from './SaveInvestmentReducer'

export const store = configureStore({
    reducer: {
        saveInvestmentReducer
    },
})