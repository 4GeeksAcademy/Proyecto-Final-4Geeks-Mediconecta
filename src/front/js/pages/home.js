import React from "react";

import  Navbar  from "../component/Navbar"; 
import  Footer  from "../component/Footer"; 
import  Body  from "../component/Body";
import  FormularioRegistro  from "../component/FormularioRegistro";


const home = () => {
  return (
	<div>
	  <><Navbar /><Body /><Footer /><FormularioRegistro/></>
	</div>
  )
}

export default home

