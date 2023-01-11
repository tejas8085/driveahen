import React,{useEffect,useState} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import db from "../../firebase"
import {auth} from "../../firebase"
import { collection, query, where, getDocs } from "firebase/firestore";
import Card from "./Card"


export default function Cart() {
    const [loading, setLoading] = useState(true);
    const [currentPost, setCurrentPost] = useState([]);
    useEffect(() => {
        const fetchData = async() => {

            try {
                const a=[]
                const q = query(collection(db, "bookings"), where("useruid", "==",auth.currentUser.uid));
                const queryt = await getDocs(q);
                queryt.forEach((doc) => {
                    a.push(doc.data())
                });
                setCurrentPost(a);
                setLoading(false);
            } catch(err) {
                console.error(err);
            }
        };

        fetchData();

    },[])

  return (
    <div>
        <Navbar/>
        <div className='ahenb'>
            {/* <h1>Your Bookings</h1> */}
        {!loading && currentPost.length===0 ? (<h1>No Bookings Yet!</h1>) :
            
            currentPost.map((item) => {
                    return (
                        <Card key={ Math.floor(Math.random() * (100000 - 0 + 1)) + 0} item={item} />
                    );
                })
        
        }
        </div>
        <Footer/>
    </div>
  )
}
