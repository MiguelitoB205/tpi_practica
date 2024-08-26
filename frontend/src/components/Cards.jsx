import React, { useContext} from 'react'
import { Link } from "react-router-dom";
import { ContextGlobal } from '../Context/global.context';

const Cards = ({ id, nombre, urlImagen, autor,  addFav}) => {
    const {
        state: { isDark },
    } = useContext(ContextGlobal);
  return (
    <div className={isDark ? "dark" : ""}> 
        <div className='card'>
            <Link to={`/libro/${id}`}>
                <h1 className={isDark ? "dark" : ""}>
                    {nombre} 
                </h1> <br />
            <img src={urlImagen} width='100px' height='100px'/>
            <p>{autor} </p>
            
                </Link>
            <button onClick={addFav} className='favButton'>Agregar a favoritos</button>
        </div>      
    </div>
  )
}

export default Cards
