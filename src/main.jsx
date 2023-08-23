import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {MoralisProvider} from "react-moralis"

ReactDOM.createRoot(document.getElementById('root')).render(
<MoralisProvider serverUrl="http://localhost:1337/server" appId="001">
  <App />
</MoralisProvider>

)
