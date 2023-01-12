import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar, Section, Skills } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Section/>
      <Skills/>
    </div>
  )
}

export default App
