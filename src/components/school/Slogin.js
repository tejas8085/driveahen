import React,{useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import {auth} from "../../firebase"
import db from "../../firebase"
import "./slogin.css"
import {  useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { collection, query, where, getDocs } from "firebase/firestore";

export default function Slogin() {
  useEffect(() => {
    const fetchData = async() => {
        // auth.signOut()
    };
    fetchData();
},[])
const navigate=useNavigate()
const [email, setemail] = React.useState("");
const [password, setpassword] = React.useState("");
const handlesub=async()=>{
  const q = query(collection(db, "school"), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    if(doc.data().password === password){
      navigate('/school',{state:{id:doc.data().id}});
    }

  });
}
  return (
    <div>
        <Navbar></Navbar>
        <div className="container">
          <div className="screen">
            <div className="screen__content">
                <div className='login'>
                <div className="login__field">
                  <input type="text" value={email} className="login__input" placeholder="Email" onChange={(e) => setemail(e.target.value)}/>
                </div>
                <div className="login__field">
                  <input type="password" value={password} className="login__input" placeholder="Password" onChange={(e) => setpassword(e.target.value)}/>
                </div>
                <button className="button login__submit" onClick={handlesub}>
                  <span className="button__text">Login</span>
                </button>				
                </div>
            </div>
            <div className="screen__background">
              <span className="screen__background__shape screen__background__shape4"></span>
              <span className="screen__background__shape screen__background__shape3"></span>		
              <span className="screen__background__shape screen__background__shape2"></span>
              <span className="screen__background__shape screen__background__shape1"></span>
            </div>		
          </div>
        </div>
        <Footer></Footer>
    </div>
  )
}
