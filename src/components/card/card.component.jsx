import React from 'react'
import './car.style.css'

export const Card = (props) => {
     return (
          <div className="card-container">
               <img src={`https://robohash.org/3?set=set${props.monster.id}`} alt="monster" />
               <h2>{props.monster.name}</h2>
               <p>{props.monster.email}</p>
          </div>
     )
}


