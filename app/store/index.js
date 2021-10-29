import { configureStore } from '@reduxjs/toolkit'
import saveInvestmentReducer from './SaveInvestmentReducer'
import investmentsReducer from './InvestmentsReducer'
import dashboardCardReducer from './DashboardCardReducer'
import registerReducer from './RegisterReducer'

export const store = configureStore({
    reducer: {
        saveInvestmentReducer,
        investmentsReducer,
        dashboardCardReducer,
        registerReducer
    },
})