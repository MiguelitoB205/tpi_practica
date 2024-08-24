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
        <Link to="/detalle">
          <button>Detalle</button>
        </Link>
        <Link to='/favs'>
        <button>Favoritos</button>
        </Link>
        <button onClick={() => dispatch({type: "toggle_them"})}>Change theme</button>
    </nav>
  )
}

export default Navbar
