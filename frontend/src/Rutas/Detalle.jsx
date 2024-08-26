import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Context/global.context"


const Detalle = () => {
  const {id }= useParams();
  const [libro, setLibro ] = useState([]);
  const {isDark} = useContext(ContextGlobal);

  const getLibro  = async () =>{
    const res = await fetch("http://localhost:3100/api/libros/" + id);
    const data = await res.json();
    setLibro(data);
}  

useEffect(() => {
  getLibro();
}, [])
return (
    <div className={isDark ? "dark" : ""} >
      <h1>Detalle del libro { id }</h1>
      <div>{libro.nombre}</div>
      <div>{libro.autor}</div>
      <div> {libro.editorial}</div>
      <div>{libro.year}</div>
      <div>{libro.descripcion}</div>
      
    </div>
  )
}

export default Detalle
