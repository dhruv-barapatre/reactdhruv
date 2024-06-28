import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(false)

  return (
    <>
      <div>{count? "hi" : <button onClick={setCount(!count)}></button>}</div>
      
    </>
  )
}

export default App
