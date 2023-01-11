import React from 'react'
import Navbar from '../Navbar/Navbar'
import Carousell from '../Carousel/Carousel'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import "./home.css"


export default function Home() {
  return (
    <div>
        <Navbar/>
        <Carousell/>
        <br></br>
        <br></br>
      <div className="main-container">
        <div className="cards">
          <div className="card card-1">
            <h2 className="card__title">Download Ahen App from Playstore</h2>
            <p className="card__apply">
              <Link class="card__link" to="/">Download</Link>
            </p>
          </div>
          <div className="card card-2">
            <h2 className="card__title">Book your first driving class here</h2>
            <p className="card__apply">
              <Link className="card__link" to="/bookings">Book</Link>
            </p>
          </div>
          <div className="card card-3">
            <h2 className="card__title">What is Ahen ?</h2>
            <p className="card__apply">
              <Link className="card__link" to="/about">About </Link>
            </p>
          </div>
          <div className="card card-4">
            <h2 className="card__title">24 hrs Service available.</h2>
            <p className="card__apply">
              <Link className="card__link" to="/contact">Contact here </Link>
            </p>
          </div>
        </div>
      </div>
        <Footer/>
    </div>
  )
}
