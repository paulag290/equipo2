import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Inicio from "../components/Inicio";
import Iniciosesion from "../components/Iniciosesion";
import Registro from "../components/Registro";

export default function Ppicontainer() {
  return (
   <BrowserRouter>
       <Route path="/" exact component={Inicio}/>
       <Route path="/Iniciosesion" component={Iniciosesion}/>
       <Route path="/Registro" component={Registro}/>
     </BrowserRouter>
  );
}
