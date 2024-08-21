import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GoSun } from 'react-icons/go'
import { FaMoon } from 'react-icons/fa'
import { Mycontext } from './Context'

function App() {
  const [count, setCount] = useState(0)
  const {theme,Themechange} = useContext(Mycontext)
  return (
    <div className='d-flex flex-column align-items-center justify-content-center p-5 m-5' style={{backgroundColor:theme=="dark"?"black":"white",color:theme=="dark"?"white":"black",transition:"0.5s ease"}}>
      <h1>This Theme Is {theme=="dark"?"Dark":"Light"}</h1>
      <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugiat, veniam dolor eos consectetur culpa voluptatum ipsum commodi dicta corrupti atque eveniet illum architecto voluptates amet quasi in similique nostrum.</p>
      <button onClick={Themechange} style={{backgroundColor:theme=="dark"?"black":"white",color:theme=="dark"?"white":"black",border:theme=="dark"?"1px solid white":"1px solid black",transition:"0.5s ease"}}>
        { theme =="dark" ? <GoSun className='btna'/>:<FaMoon className='btnb'/>}
      </button>
    </div>
  )
}

export default App
