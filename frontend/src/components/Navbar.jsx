import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='barra_de_busqueda'>
      <nav>
        <Link to='/'>
          <p>Home</p>
        </Link>
        <Link to="/categorias">
          <p>Categorías</p>
        </Link>
        <Link to='/favs'>
        <p>Favoritos</p>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
