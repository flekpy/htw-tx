import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import React from 'react'

import { MetaMaskContextProvider } from 'app/web3provider'
import App from 'app'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MetaMaskContextProvider>
        <App />
      </MetaMaskContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
