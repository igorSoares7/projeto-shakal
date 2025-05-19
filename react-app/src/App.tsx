import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MenuStyled from './Components/Menu/Menu.styled'
import Home from './Pages/Home'
import Contato from './Pages/Contato/Contato'
import Loja from './Pages/Loja/Loja'

function App() {

  return (
    <>
      <BrowserRouter>
        <MenuStyled />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/loja' element={<Loja />} />
          
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
