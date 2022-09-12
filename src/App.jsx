import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Container from './Components/Container'
import Home from './pages/Home'
import Projetos from './pages/Projetos'
import Footer from './Components/footer'
import Conhecimento from './pages/Conhecimento'



function App() {
  

  return (
    <Router>

      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route> 
          <Route path='/Projetos' element={<Projetos/>}></Route> 
          <Route path='/Conhecimento' element={<Conhecimento/>}></Route> 
        
        </Routes>
      </Container>
        

     
    </Router>
  )
}

export default App
