import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then((data) => this.setState({reservations: data}))
    .catch((error) => {console.log(error)})
  }

  addReservation = (newRes) => {
      this.setState({reservations: [newRes, ...this.state.reservations] })
    }
  

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/> 
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations} /> 
        </div>
      </div>
    )
  }
}

export default App;
