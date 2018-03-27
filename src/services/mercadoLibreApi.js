// Aquí haremos el llamado a la API
import React, { Component } from 'react';

const url = 'https://api.mercadolibre.com/sites/MLC/search?q=';

class search extends Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
  }

  componentDidMount(){
    fetch('https://api.mercadolibre.com/sites/MLC/search?q=')
    .then(search => {
      return search.json();
    }).then(data => {
      let results = data.results.map((e) => {
        return(
          <div key={e.search}>
            <div {e.search}></div>
          </div>
        )
      })
      this.setState({results: results});
      console.log("state", this.state.results);
    })
  }
  render() {
    return (
      <div>
        {this.state.results}
      </div>
    )
  }
}