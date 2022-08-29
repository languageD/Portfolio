import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './Components/Home'
import Container from './Components/Container'
import SideHamburger from './Components/SideHamburger'
import Footer from './Components/footer'



function App() {
  

  return (
    <Router>

      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route> 
        
        </Routes>
      </Container>
        <Footer/>

     
    </Router>
  )
}

export default App
