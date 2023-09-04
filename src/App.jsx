import { useState } from 'react'
import './App.css'
import Content from './Components/Content'
import Esraa from './Esraa/Esraa'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Content/>
    <Esraa/>

   </>
  )
}

export default App
