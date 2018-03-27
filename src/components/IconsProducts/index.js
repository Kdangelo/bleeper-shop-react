// Iconos con productos, si hay tiempo serán filtros
import React from "react";
import { Grid, Row, Col, Glyphicon} from 'react-bootstrap';
import './style.css';


const IconsProducts = ({ }) => {
    return (

           <div className= "item-icons">
             <h2>Productos destacados</h2>
               <ul>
                 <li><Glyphicon className="icon" glyph="phone"/></li>
                 <li><Glyphicon className="icon" glyph="camera"/></li>
                 <li><Glyphicon className="icon" glyph="book"/></li>
                 <li> <Glyphicon className="icon" className="icon" glyph="cutlery"/></li>
               </ul>
           </div>
        )
}





export default IconsProducts;