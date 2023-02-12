import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css"



export default function Footer() {
  return (
    <div>
            <footer className="footer-distributed">

    <div className="footer-left">

        <h3>Go Ahead<span> With AHEN</span></h3>

        <p className="footer-links">
            <Link to="/" className="link-1">Home</Link>
            
            <Link to="/about">About</Link>
            
            <Link to="/bookings">Bookings</Link>
            
            <Link to="/contact">Contact</Link>

            <Link to="/terms">Terms of service</Link>
        </p>

        <p className="footer-company-name">AHEN © 2023</p>
        <Link to="/school/login" className="footer-company-name" style={{ textDecoration: 'none'}} >school login</Link>
    </div>

    <div className="footer-center">

        <div>
            <i className="fa fa-map-marker"></i>
            <p><span>Shivajiwadi, Moshi,</span>Pune, Maharashtra- 412105</p>
        </div>

        <div>
            <i className="fa fa-phone"></i>
            <p>+919325262490</p>
        </div>

        <div>
            <i className="fa fa-envelope"></i>
            <p>ahenbookit@gmail.com</p>
        </div>
    </div>

    <div className="footer-right">

        <p className="footer-company-about">
            <span>About the company</span>
            Ahen is a driving class booking application where you can book a driving session in 3 taps and learn driving with various services like home pickup and drop and many more.
        </p>
        
    </div>
    
    </footer>

    </div>
  )
}
