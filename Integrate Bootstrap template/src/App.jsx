import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Components/Button'
import Para from './Components/Para'
import Headiing from './Components/Headiing'
import Icons from './Components/Icons'
import manImage from './man.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="row">
        <div className="col-8">
          <Headiing />
          <Para />
          <Button />
          <br />
          <Icons />
        </div>
        <div className="col-4">
          <img src={manImage} alt="" />
        </div>
      </div>
    </>
  )
}

export default App
