import React from 'react'
// import Card from '../Card/Card'
import Card from '../Card/Card'
import './Reservations.css'

const Reservations = ({reservations}) => {
    const reservation = reservations.map((res) => {
        return (
            <Card 
                name = {res.name}
                date = {res.date}
                time = {res.time}
                number = {res.number}
                key = {res.id}
            /> 
        )
        

    })
 
 
 
 
 
    return (
    <div className='reservation-container'>
      {reservation}
    </div>
  )
}

export default Reservations
