import React from 'react'
import Form from '../components/Form'
import { useContext } from 'react'
import { ContextGlobal } from '../Context/global.context'

const Contacto = () => {
  const {
    state: {isDark},
  } = useContext(ContextGlobal)
  return (
    <div className={isDark ? "dark" : ""}>
      <h2>Sobre nosotros</h2>
      <p>Envíanos tus peticiones y te contactaremos</p>
     <Form/> 
    </div>
  )
}

export default Contacto
