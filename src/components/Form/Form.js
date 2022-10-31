import React, { Component } from 'react'

class Form extends Component {
    constructor() {
        super() 
        this.state = {
            name: '', 
            date: '',
            time: '', 
            number: 0
        }
    }

    handleChange = (event) => {
        const {name , value } = event.target
        this.setState({[name]: [value]})
    }

    createReservation = (event) => {
        event.preventDefault(); 
        const newRes = {
          id: Date.now(), 
          ...this.state 
        }
        this.props.addReservation(newRes);
        this.clearInputs();
      }
    
      clearInputs = () => {
        this.setState({name: '', date: '', time: '', number:''})
      }





  render() {
    return (
      <div className='form-container'>
        <form>
            <input 
            type = 'text'
            placeholder='name'
            name= "name"
            value={this.state.name}
            onChange = {event => this.handleChange(event)}
            /> 
            <input 
            type ='date(mm/dd)'
            placeholder='date'
            name = 'date'
            value = {this.state.date}
            onChange = {event => this.handleChange(event)}
            /> 
            <input 
            type = 'time'
            placeholder='time'
            name ='time'
            value={this.state.time}
            onChange = {event => this.handleChange(event)}
            /> 
            <input 
            type = 'number'
            placeholder='number of people'
            name = 'number'
            value = {this.state.number}
            onChange = {event => this.handleChange(event)}
            /> 

            <button onClick={event => this.createReservation(event)} > Make Reservations</button> 


        </form>
        
      </div>
    )
  }
}

export default Form
