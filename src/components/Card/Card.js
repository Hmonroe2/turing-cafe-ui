import React from 'react'
import './Card.css'

const Card = ({name, date, time, number}) => {
    console.log(date)
    return (
        <div className= 'card'> 
            <p> {name}</p>
            <p>{date}</p>
            <p> {time} </p>
            <p>{number}</p>
            <button> Cancel </button>
        </div>
    )

}
export default Card 