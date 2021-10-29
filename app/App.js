import React from 'react'
import { store } from './store/index'
import { Provider } from 'react-redux'
import InsertInvestasi from './screens/InsertInvestasi'
import HomePage from './screens/HomePage'
import RouteNavigation from './routes'

function App() {
    return (
        <Provider store={store}>
            <RouteNavigation />
        </Provider>
        )
}

export default App