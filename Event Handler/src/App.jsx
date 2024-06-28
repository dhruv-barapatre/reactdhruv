import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fetch from './Fetch'

function App() {
  const [count, setCount] = useState(true)

  return (
    <>
      <div>{count? <button style={{backgroundColor:"#44cdcd"}} onClick={()=>setCount(!count)}>Get Posts</button>:<Fetch /> }</div>
      
    </>
  )
}

export default App
