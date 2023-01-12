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
					<h3>What we do</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores rerum, veniam debitis nisi
						vero sit rem perspiciatis illum illo sint consectetur, quidem eveniet dignissimos ea, ex maxime
						quasi at harum cumque quas. Possimus natus explicabo quidem veniam deserunt enim tenetur vel ad,
						corporis modi nulla non perferendis alias minima sed placeat laudantium sunt dolorum dolor.</p>
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
