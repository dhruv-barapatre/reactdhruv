import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './compone/Header'
import Content from './compone/Content'
import Footer from './compone/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Content />
     <Footer />
    </>
  )
}

export default App
