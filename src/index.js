import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { Provider } from 'react-redux'
import store from './store/store'

import  { BreakpointProvider } from 'react-socks'
import { SnackbarProvider } from 'notistack'

ReactDOM.render(
    <Provider store={store}>
        <BreakpointProvider>
            <SnackbarProvider maxSnack={3}>
                <App />
            </SnackbarProvider>
        </BreakpointProvider>   
    </Provider>, 
    document.getElementById('root')
)

serviceWorker.register()
