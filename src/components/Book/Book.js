import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Bookc from './Bookc';
import License from './License';
import "./Book.css"
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';

export default function Book() {
  const { id }=useParams();
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  return (
    <div>
      <Navbar></Navbar>
        <div className="Tabs">
        <div className='temp'>
        <ul className="navs">
          <li
            className={activeTab === "tab1" ? "active" : ""}
            onClick={handleTab1}
          >
            Book Appointment
          </li>
          <li
            className={activeTab === "tab2" ? "active" : ""}
            onClick={handleTab2}
          >
          Apply for Licence
          </li>
        </ul>
        </div>
          <div className="outlet">
            {activeTab === "tab1" ? <Bookc id={id} /> : <License id={id} />}
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer></Footer>
    </div>
  )
}
