import React from "react";
import { Route, Routes} from "react-router-dom";

import Home from "../Home/Index";
import View from "../View/index";
import Create from "../Create/index";
import Perfil from "../Perfil/index";

export default function Rotas(){
   return(
       <Routes>
           <Route exact path="/" element={<Home/>}/>
           <Route path="/view" element = { <View/> } />
           <Route path="/perfil" element = { <Perfil/> } />
           <Route path="/create" element = { <Create/> } />
       </Routes>
   )
}