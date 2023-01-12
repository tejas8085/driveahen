import React,{useState,useEffect} from 'react'
import {useLocation,useNavigate} from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase"
import Acard from './Acard';



export default function Admin() {
    const location = useLocation();
    const navigate=useNavigate();
    const id=location.state.id;
    const [loading, setLoading] = useState(true);
    const [currentPost, setCurrentPost] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            if( id !== 1 || id=== undefined){
                navigate('/school/login');
            }
            try {
                const a=[]
                const queryt = await getDocs(collection(db, "school"));
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
           // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) 
  return (
    <div>
            <div className='mainh'>
                <h4>AHEN ADMIN DASHBOARD</h4>
            </div>
            <div className='bookg'>
            {!loading && currentPost.length===0 ? (<h3>No Bookings Yet!</h3>) :
            
                currentPost.map((item) => {
                    return (
                        <Acard key={ Math.floor(Math.random() * (100000 - 0 + 1)) + 0} item={item} />
                    );
                })
        
            }
            </div>
    </div>
  )
}
