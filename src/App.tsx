import { useState } from 'react'
import Presentation from './Components/Presentation'
import './App.css'
import Skills from './Components/Skills'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Presentation/>
      <br/><br/>
      <Skills/>
    </>
  )
}

export default App
