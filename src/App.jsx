import { useState } from 'react'
import Home from './Components/Home'
import Container from './Components/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Container>
        <Home/>
      
      
      
      </Container>
    </div>
  )
}

export default App
