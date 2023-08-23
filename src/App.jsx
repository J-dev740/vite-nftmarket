import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import {MoralisProvider} from "react-moralis"
import {ConnectButton} from "web3uikit"
import {useMoralis} from "react-moralis"

function App() {
  // const [count, setCount] = useState(0)
const {isWeb3Enabled}=useMoralis()
  return (
    <>
      <div>
     <ConnectButton/>
     <p>{`${isWeb3Enabled}`}
     {console.log(isWeb3Enabled)}</p>
      </div>

    </>
  )
}

export default App
