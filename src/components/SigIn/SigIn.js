import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./SigIn.css"
import {  useNavigate } from 'react-router-dom'// import { Link } from 'react-router-dom';
import { auth } from "../../firebase"
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import db  from "../../firebase"
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'


export default function SigIn() {
    const navigate = useNavigate()
    const handle= async ()=>{
        try{
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user
            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)
            if (!docSnap.exists()) {
              await setDoc(doc(db, 'users', user.uid), {
                name: user.displayName,
                email: user.email,
                timestamp: serverTimestamp(),
              })
            }
            navigate('/')
        }
        catch(err){
            console.log(err)
        } 
    }
  return (
    <div>
        <Navbar/>
        <button className='btng' onClick={handle}>
        <div className="google-btn">
            <div className="google-icon-wrapper">
                <img alt="google" className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
            </div>
            <p className="btn-text"><b>Sign in with google</b></p>
            </div>
        </button>
        
    </div>
  )
}
