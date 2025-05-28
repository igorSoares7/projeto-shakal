import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MenuStyled from './Components/Menu/Menu.styled'
import HomeStyled from './Pages/Home/Home.styled'
import Contato from './Pages/Contato/Contato'
import Loja from './Pages/Loja/Loja'
import GaleriaStyled from './Pages/Galeria/Galeria.styled'
import Reservas from './Pages/Reservas'


function App() {

  return (
    <>
      <BrowserRouter>
        <MenuStyled />
        <Routes>

          <Route path='/' element={<HomeStyled />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/reservas' element={<Reservas />} />
          <Route path='/loja' element={<Loja />} />
          <Route path='/galeria' element={<GaleriaStyled />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
