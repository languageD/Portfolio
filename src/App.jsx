import { useState } from 'react'
import Home from './Components/Home'
import Container from './Components/Container'
import SideHamburger from './Components/SideHamburger'
import Footer from './Components/footer'

function App() {
  

  return (
    <>
      <Container customClass='min-height'>
        <Home/>
        
      
      </Container>
       <Footer/>
     
    </>
  )
}

export default App
