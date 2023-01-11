import React from 'react'
import Navbar from '../Navbar/Navbar'
import Location from '../../data/Location';
import LocationCard from './LocationCard';
import Footer from '../Footer/Footer';

export default function Bookings() {
  return (
    <>
        <Navbar/>
        <section className="page-contain">
        {
                Location.map((item) => {
                    const id  = item.id;
                    return (
                        <LocationCard key={id} id={item.id} location={item.location} />
                    );
                })
        }
        </section>
        <Footer/>
    </>
  )
}
