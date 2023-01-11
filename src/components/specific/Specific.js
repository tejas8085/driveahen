import React from 'react'
import Navbar from '../Navbar/Navbar'
import Location from '../../data/Location';
import data from '../../data/data';
import { useParams } from 'react-router-dom';
import Speccific from './Speccific';
import "./Specific.css"
import Footer  from "../Footer/Footer"

export default function Specific() {
  const { id }=useParams();
  let text=parseInt(id)
  const loca= Location.filter(x=> x.id === text);
  const req=loca[0].location
  const schools=data.filter(item => item.tag === req)
  // console.log(schools);
  return (
    <div>
        <Navbar/>
        <section className='containh'>
        {
                schools.map((item) => {
                    const id  = item.id;
                    return (
                        <Speccific key={id} id={id} name={item.name} address={item.address} facilities={item.facilities} email={item.email} contact={item.contact} />
                    );
                })
        }
        </section>
        <Footer/>
    </div>
  )
}
