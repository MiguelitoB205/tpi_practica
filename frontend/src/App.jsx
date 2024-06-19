import Home from './Rutas/Home'
import Categorias from './Rutas/Categorias'
import Favs from './Rutas/Favs'
import { Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/categorias' element={<Categorias/>}/>
        <Route path='/favs' element={<Favs/>}/>
      </Routes>
    </>
  )
}

export default App
