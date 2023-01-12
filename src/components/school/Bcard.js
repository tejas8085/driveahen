import React from 'react'
import "./fg.css"

export default function Bcard({item}) {
  return (
    <div>
        <div className="containerer">
            <div className="carrd">
                <div className="boxx">
                <div className="content">
                    <h3>{item.name}</h3>
                    <p>Contact :{item.contact}</p>
                    <p>Car : {item.car}</p>
                    <p>Price paid : {item.price}</p>
                    <p>Booking time :{item.time} </p>
                    <p>Booking Date :{Date(item.date.toString())}</p>
                </div>
                </div>
            </div>
        </div>

    </div>
  )
}
