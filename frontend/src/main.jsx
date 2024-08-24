import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"
import App from "./App";
import Home from "./Rutas/Detalle";
import Contacto from './Rutas/Contacto';
import ContextProvider from './Context/global.context';
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
      <BrowserRouter>
     <App/>

    </BrowserRouter>
  </ContextProvider>
 
);
