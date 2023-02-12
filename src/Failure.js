import axios from 'axios'
import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'


export default function Failure() {
  

  useEffect(()=>{   
    axios.get('/failure').then(res=>{
      console.log("ghjkl;'");
      // console.log(res);
    })
  })
  return (
    <div>
        <Navbar></Navbar>
        <h2>FAIL</h2>
    </div>
  )
}
