import React from 'react'
import { Link } from 'react-router-dom';
import "./Bookings.css"

export default function LocationCard({id,location}) {
  return (
    <div>
        <Link to={`/bookings/school/${id}`} className="data-card">
            <h4>{location}</h4>
            <p>GO AHEAD WITH AHEN</p>
            <span className="link-text">
            View All Providers
            </span>
        </Link>
    </div>
  )
}
