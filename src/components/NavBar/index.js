// Navbar con input para buscar y el logo y el icono del carro de compras
import React, { Component } from 'react';
import { Navbar, Form, FormControl, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import logo from './../../img/Blue_Bag_ Shopping_Logo.jpg';
import './style.css';

// Inicio el componente de clase
class navbar extends Component {
    constructor() {
        super();
        // Declaro un estado vacio inicial en el formControl
        this.state = {
            value: ''
        }
        // Llamo a mis funciones declaradas más abajo .bind les pide que estas funciones
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Funcion que detecta el cambio de estado en el formControl
    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    // Funcion que toma el valor y poder usarlo
    handleSubmit(event) {
        console.log(`value ${this.state.value}`);
        event.preventDefault();
        const { value } = this.state
    fetch(`https://api.mercadolibre.com/sites/MLC/search?q=${value}&limit=20`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const { results } = data;
        console.log({results})
        this.props.onResults(results)
      })
    }

    // Aquí se renderiza el navbar
    render() {
        return (
            <Navbar className='nav-bar'>
                <Navbar.Header>
                    <Navbar.Brand className='logo'>
                        <a href="index.html"><img height={50} src={logo} alt={''} /></a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse className='container-form'>
                    <Navbar.Form className='form-search'>
                        <Form onSubmit={this.handleSubmit}>
                            <FormControl type="text" value={this.state.value} onChange={this.handleChange} placeholder="Ropa, Autos, etc..." />
                            <Button type="submit" bsStyle='success'>Buscar</Button>
                        </Form>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

navbar.propTypes = {
    value: PropTypes.string,
}

export default navbar;