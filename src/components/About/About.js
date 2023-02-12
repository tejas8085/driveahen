import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import "./About.css"

export default function About() {
  return (
    <div>
      <Navbar></Navbar>
      <div class="sectionn">
		<div class="containeer">
			<div class="contennt-section">
				<div class="titlle">
					<h1>About Us</h1>
				</div>
				<div class="contenttt">
					<h3>Go Ahead With AHEN</h3>
					<p>AHEN is a driving class booking application where you can book a driving session in 3 taps and
						learn driving with various services like home pickup and drop and many more</p>
				</div>
				<div class="info">
					<h3>Why we need AHEN?</h3>
					<p>Driving schools in every city currently rely on manual processes for booking and scheduling driving lessons, which is causing inefficiencies and a lack of transparency for both the schools and users. This is a problem because it leads to difficulties in coordinating instructors and vehicles, scheduling conflicts, and a lack of real-time information for users on the status of their bookings</p>
				</div>
			</div>
			<div class="image-section">
				<img src="images/img two.jpg" alt="school"/>
			</div>
		</div>
	</div>
    <Footer></Footer>
    </div>
  )
}
