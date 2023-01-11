import React from 'react'
import "./Cart.css"
import data from "../../data/data"

export default function Card({item}) {
  const ted=parseInt(item.schoolid)
  console.log(ted);
  const loca= data.filter(x=> x.id === ted);
  const sname=loca[0].name
  return (
    <div>
        <div className="containerer">
            <div className="carrd">
                <div className="boxx">
                <div className="content">
                    <h3>{sname}</h3>
                    <p>Price paid : {item.price}</p>
                    <p>Booking time : {item.time}</p>
                    <p>Booking Date : {Date(item.date.toString())}</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
