import React, { useContext} from 'react'
import { Link } from "react-router-dom";
import { ContextGlobal } from '../Context/global.context';

const Cards = ({ id, nombre, urlImagen, autor, editorial, year, descripcion}) => {
    const {
        state: { isDark }
    } = useContext(ContextGlobal);
  return (
    <div className={isDark ? "dark" : ""}> 
        <div className='card'>
            <Link to={`/libro/${id}`}>
                <h1 className={isDark ? "dark" : ""}>
                    {nombre} 
                </h1> <br />
                <img src={urlImagen} alt="" width='150px' height='150px' />
                <p className={isDark ? "dark" : ""}><strong>Autor: </strong>{autor}</p>
                <p className={isDark ? "dark" : ""}><strong>Editorial: </strong>{editorial}</p>
                <p className={isDark ? "dark" : ""}><strong>Año: </strong>{year}</p>
                <p className={isDark ? "dark" : ""}><strong>Descripción: </strong>{descripcion}</p>        
                </Link>
            <button onClick={addFav} className='favButton'>Agregar a favoritos</button>
        </div>      
    </div>
  )
}

export default Cards
