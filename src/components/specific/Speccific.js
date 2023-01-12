import React from 'react'
import { Link } from 'react-router-dom';

export default function Speccific({ id ,name , address , facilities , email , contact, }) {
  const link=`/book/${id}`
  return (
    <div>
        <div class="a-box">
          <div class="img-container">
            <div class="img-inner">
              <div class="inner-skew">
                <img alt="school" src="/images/ahenlogo.jpg"/>
              </div>
            </div>
          </div>
          <div class="text-containerr">
            <h3 className="extc">{name}</h3>
            <div>
              <span className='heads'>Address: </span>{address}
          </div>
          <br></br>
          <div>
              <span className='heads'>Facilities: </span>{facilities}
          </div>
          <br></br>
          <div>
              <span className='heads'>Email: </span>{email}
          </div>
          <br></br>
          <div>
              <span className='heads'>Contact: </span>{contact}
          </div>
          <div className='lij'>
            <Link style={{ textDecoration: 'none',color:'black'}} className='ghb' to={link}>Book Now</Link>
          </div>
        </div>
    </div>
    </div>
  )
}
