import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

window.dataLayer = window.dataLayer || []
console.log(`dataLayer status : ${window.dataLayer}`)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
