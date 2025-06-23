// import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './store'

fetch('/config.json')
  .then((res) => res.json())
  .then((config) => {
    window.__RUNTIME_CONFIG__ = config
    // Now render your app
    const root = document.getElementById('root')
    if (root) {
      ReactDOM.createRoot(root).render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      )
    }
  })
