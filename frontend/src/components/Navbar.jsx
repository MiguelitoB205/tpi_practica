import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from '../Context/global.context'

const Navbar = () => {
  const{
    dispatch,
    state: {isDark},
  } = useContext(ContextGlobal)
  return (
    <nav className={isDark ? "dark": ""}>
        <Link to='/'>
          <button>Home</button>
        </Link>
        <Link to="/favs">
          <button>Favoritos</button>
        </Link>
        <Link to='/contacto'>
        <button>Contacto</button>
        </Link>
        <button onClick={() => dispatch({type: "toggle_theme"})}>Change theme</button>
    </nav>
  )
}

export default Navbar
