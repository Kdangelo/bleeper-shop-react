// Aquí se mostraran los productos
import React, { Component } from 'react';
import Navbar from '../NavBar';
import {Grid, Row, Col, Thumbnail, Button} from "react-bootstrap";
import Navbar from '../../components/NavBar';
import "./style.css"


class ProductList extends Component {
  render() {
    const {title, price, condition, available, sold, state, city, thumbnail } = this.props
  
    return (
      <Grid>
        <Row>
          <Col xs={6} md={4}>
            <Thumbnail 
              src={thumbnail} 
              alt={title}>
              <h3>Nombre: {title}</h3>
              <p>Precio: {price}</p>
              <p>Condicion: {condition}</p>
              <p>Disponibles: {available}</p>
              <p>Vendidos: {sold}</p>
              {/* <p>Ciudad: {state}</p>
              <p>Comuna: {city}</p> */}
              <p>
                <Button bsStyle="default">Agregar</Button>
              </p>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    )
  }
}


export default ProductList;