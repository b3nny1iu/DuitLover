import React from 'react'
import { store } from './store/index'
import { Provider } from 'react-redux'
import InsertInvestasi from './screens/InsertInvestasi'
import HomePage from './screens/HomePage'

function App() {
    return (
        <Provider store={store}>
            <HomePage />
        </Provider>
        )
}

export default App