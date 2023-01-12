import React,{useState,useEffect} from 'react'
import {useLocation,useNavigate} from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../../firebase"
import Bcard from './Bcard';
import Blicence from './Blicence';
import "./fg.css"

export default function Data() {
  const navigate=useNavigate()
  const location = useLocation()
  const id = location.state.id
  const [loading, setLoading] = useState(true);
  const [currentPost, setCurrentPost] = useState([]);
  const [currentPostt, setCurrentPostt] = useState([]);
  useEffect(() => {
    const fetchData = async() => {

        try {
            const a=[]
            const b=[]
            const q = query(collection(db, "bookings"), where("schoolid", "==",id));
            const queryt = await getDocs(q);
            queryt.forEach((doc) => {
                a.push(doc.data())
            });
            const ty = query(collection(db, "licence"), where("schoolid", "==",id));
            const tyt = await getDocs(ty);
            tyt.forEach((doc) => {
                b.push(doc.data())
            });
            setCurrentPost(a);
            setCurrentPostt(b)
            setLoading(false);
        } catch(err) {
            console.error(err);
        }
    };

    fetchData();
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]) 
  const handlelg=()=>{
    navigate('/school/login')
  }
  return (
    <div>
        <div className='mainh'>
            <h4>AHEN ADMIN DASHBOARD</h4>
        </div>
         <h3 className='headings'>Bookings</h3>
        <div className='bookg'>
        {!loading && currentPost.length===0 ? (<h3>No Bookings Yet!</h3>) :
            
            currentPost.map((item) => {
                    return (
                        <Bcard key={ Math.floor(Math.random() * (100000 - 0 + 1)) + 0} item={item} />
                    );
                })
        
        }
        </div>
        <br></br>
        <br></br>
        <h3 className='heading'>Licence Applicants</h3>
        <div className='bookg'>
        {!loading && currentPostt.length===0 ? (<h1>No Licence Applicants Yet!</h1>) :
            
            currentPostt.map((item) => {
                    return (
                        <Blicence key={ Math.floor(Math.random() * (100000 - 0 + 1)) + 0} item={item} />
                    );
                })
        
        }
        </div>
        <div className='lgb'>
        <button onClick={handlelg}>Log Out</button>
        </div>
    </div>
  )
}
