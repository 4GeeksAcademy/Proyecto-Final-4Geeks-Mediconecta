import React, { Component } from "react";

export const Footer = () => (
	<footer className="ftco-footer ftco-section img" style="background-image: url(images/footer-bg.jpg);">
    	<div className="overlay"></div>
      <div className="container-fluid px-md-5">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">MediConecta</h2>
              <p>Muy muy lejos, detrás de la palabra montañas, lejos de los países..</p>
              <ul className="ftco-footer-social list-unstyled mt-5">
                <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Departmentos</h2>
              <ul className="list-unstyled">
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Neurologia</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Oftalmologia</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Nuclear</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Surgical</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Cardiologia</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Dental</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Inicio</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Sobre Nosotros</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Departmentos</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Doctores</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Blog</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Precios</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Contactenos</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
             <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Servicios</h2>
              <ul className="list-unstyled">
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Servicios de Emergencia</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Doctores Calificados</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Revisión Online</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Servicio las 24h</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
            	<h2 className="ftco-heading-2">Alguna Pregunta?</h2>
            	<div className="block-23 mb-3">
	              <ul>
	                <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
	                <li><a href="#"><span className="icon icon-phone"></span><span className="text">+66666666</span></a></li>
	                <li><a href="#"><span className="icon icon-envelope pr-4"></span><span className="text">info@MediConecta.com</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
	
            <p>Todos los derechos reservados &copy;<script>document.write(new Date().getFullYear());</script> | Web diseñada por <a href="https://4geeksacademy.com/es/inicio" target="_blank">Diana Pérez - José Reimondez</a>
  </p>
          </div>
        </div>
      </div>
    </footer>
);
