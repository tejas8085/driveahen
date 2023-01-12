import React,{useEffect,useState} from 'react'
import Navbar from '../Navbar/Navbar'
import "./Profile.css"
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from "../../firebase"
import {  useNavigate } from 'react-router-dom'
import Footer from "../Footer/Footer"
import toast from 'react-hot-toast';


export default function Profile() {
  const navigate=useNavigate();
  const [name,Setname]=useState("");
  const [urrl,Seturrl]=useState("");
  const [email,Setemail]=useState("");
  const handle=()=>{
    auth.signOut()
    toast.success("Logged Out Successfully")
    navigate('/')
  }
  useEffect(() => {
    
    onAuthStateChanged(auth, (user) => {
      if(user) {
        Setname(user.displayName)
        Seturrl(user.photoURL)
        Setemail(user.email)
      }
    })
  
  },[])
  return (
    <div className='agb'>
      <Navbar></Navbar>
        <div className="card-containerr-profile">
          <img className="roundd" src={urrl} alt="user" />
          <h3 className="profileh3">{name}</h3>
          {/* <h6 class="profileh6">New York</h6> */}
          <p className="profilep">{email}</p>
          <div className="buttons">
            <button className="primary" onClick={handle}>
              Sign Out
            </button>
          </div>
        </div>
        <br></br>
        <br></br>
        <Footer></Footer>
    </div>
  )
}
