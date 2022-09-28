import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Container from '../src/Components/layout/Container'
import Home from './Components/pages/Home'
import Projetos from './Components/pages/Projetos'
import Conhecimento from './Components/pages/Conhecimento'


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
