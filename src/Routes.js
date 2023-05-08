import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SobreNosotros from "./Pages/SobreNosotros";
import React from 'react'
import Tienda from "./Pages/Tienda";
import CheckOutContainer from "./Pages/CheckOut/CheckOut";


 export const Routes = () => {
  return (
    <ReactDomRoutes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre-nosotros" element={<SobreNosotros/>}/>
        <Route path="/tienda" element={<Tienda/>}/>
        <Route path="/checkout" element={<CheckOutContainer/>}/>
    </ReactDomRoutes>
  )
}

export default Routes