// Navbar con input para buscar y el logo y el icono del carro de compras
import React, { Component } from 'react';
import { Navbar, Form, FormControl, Button} from 'react-bootstrap';
import logo from './../../img/Blue_Bag_ Shopping_Logo.jpg';
import './style.css';


class navbar extends Component {
    constructor(props) {
        super(props);
        // state inicial
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }
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
                            <Button type="submit" value='Submit' bsStyle='success'>Buscar</Button>
                        </Form>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}


export default navbar;