import React, {useContext} from 'react'
import Cards from '../components/Cards'
import Header from './Header'
import Footer from './Footer'
import { ContextGlobal } from '../Context/global.context'

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const favs = state.favs
  return (
    <>
      <Header/>
    <h1>Libros favoritos</h1>
    <div className='card_grid'>
    {favs?.map((libro)=>(
      <Cards 
      key={libro.id}
      id={libro.id}
      nombre={libro.nombre}
      urlImagen={libro.urlImagen}
      />
    ))}
    </div>
      <Footer/>
    </>
  )
}

export default Favs
