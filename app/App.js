import React from 'react'
import { store } from './store/index'
import { Provider } from 'react-redux'
import InsertInvestasi from './screens/InsertInvestasi'

function App() {
    return (
        <Provider store={store}>
            <InsertInvestasi />
        </Provider>
        )
}

export default App