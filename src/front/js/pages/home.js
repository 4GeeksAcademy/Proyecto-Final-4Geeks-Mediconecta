import React from "react";

import { Navbar } from "../component/Navbar"; 
import { Footer } from "../component/Footer"; 
import { Body } from "../component/Body";
import { FormularioRegistro } from "../component/FormularioRegistro";

import "./../../styles/index.css";


export const Home = () => {
	

	return (
		<><Navbar /><Body /><Footer /><FormularioRegistro/></>
	);
};
