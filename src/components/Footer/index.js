// Pie de pagina
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import imgPaypal from '../../img/paypal.png';
import './style.css'

const Footer = () => {
    return(
      <div className="in-foo">
        <ul>
          <li><a href="">Sobre Nosotros</a></li>
          <li><a href="">Mapa del sitios</a></li>
          <li><a href="">Otros sitios</a></li>
          <li><a href="">Ayuda</a></li>
        </ul> 
      <div className="img-paypal">
        <a href="index.html"><img height={90} src={imgPaypal} responsive alt={''} /></a>
      </div>
        <h6>Copyright © 1999-2018 Bleeper-shop Ltda</h6>
      </div>         
   ) 
}
export default Footer;