import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar'
import "./Contact.css"
import Footer from "../Footer/Footer"
import db from "../../firebase"
import { collection, addDoc } from "firebase/firestore"; 
import {  useNavigate } from 'react-router-dom'
import { Alert } from 'bootstrap'


export default function Contact() {
  const navigate=useNavigate();
  const [name, setName] = useState("");
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [namee, setNamee] = useState("");
  const handle = async() => {
    await addDoc(collection(db, "contact"), {
      name:name,
      email:name1,
      contact:name2,
      message:namee
    });
    Alert("We received your message,we will contact you soon");
    navigate('/')
  };

  return (
    <div>
      <Navbar></Navbar>
      <div class="background">
  <div class="contaiiner">
    <div class="sccreen">
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div class="app-contact">CONTACT INFO : +919325262490</div>
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" placeholder="NAME" required value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="EMAIL" required value={name1} onChange={(e) => setName1(e.target.value)}/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="CONTACT NO" required value={name2} onChange={(e) => setName2(e.target.value)}/>
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" placeholder="MESSAGE" required value={namee} onChange={(e) => setNamee(e.target.value)}/>
            </div>
            <div class="app-form-group buttons">
              <button class="app-form-button" onClick={handle}>SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
