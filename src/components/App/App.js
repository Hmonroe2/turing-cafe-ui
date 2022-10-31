import React, { Component } from 'react';
import './App.css';
import { fetchReservationData } from '../../ApiCalls';
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


    // fetchReservationData()
    //   .then((data) => this.setState({ reservations: data }))
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  render() {
    console.log(this.state.reservations)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form /> 
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations} /> 
        </div>
      </div>
    )
  }
}

export default App;
