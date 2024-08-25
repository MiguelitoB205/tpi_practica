import React, {useContext} from 'react'
import Cards from "../components/Cards"
import { ContextGlobal } from '../Context/global.context'

const Home = () => {
  const {
    libros,
    dispatch,
    state: { isDark },
  } = useContext(ContextGlobal);
  return (
    
    <main className={ isDark ? "dark" : ""}>
      <h1>Página principal</h1>
    <div className='card_grid'>
      {libros?.map((libro)=>(
      <Cards key={libro.id}
      id={libro.id}
      nombre={libro.nombre}
      urlImagen={libro.urlImagen}
      addFav = {()=>dispatch({type: "add_fav", payload: libro})}
      />
    ))}
    </div>
    </main>
    
  )
}

export default Home
