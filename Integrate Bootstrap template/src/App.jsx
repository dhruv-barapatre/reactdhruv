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
  

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-7 col-sm-12 col-md-12 col-lg-9 col-xl-7">
          <Headiing />
          <Para />
          <Button />
          <br />
          <Icons />
        </div>
        <div className="col-4 justify-content-center align-items-center">
          <img src={manImage} alt="" style={{marginLeft:"-100px"}}/>
        </div>
      </div>
    </>
  )
}

export default App
