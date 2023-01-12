import React from 'react'
import "./fg.css"

export default function Blicence({item}) {
  return (
    <div>
        <div className="containerer">
            <div className="carrd">
                <div className="boxx">
                <div className="content">
                    <h3>{item.name}</h3>
                    <p>Applicant Type : {item.application}</p>
                    <p>Aadhar No. : {item.aadhar}</p>
                    <p>Pan No. :{item.pan} </p>
                    <p>Old Licence No. :{item.oldlicence}</p>
                    <p>Amount Paid :{item.price}</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
