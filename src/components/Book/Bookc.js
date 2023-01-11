import React,{useState} from 'react'
import data from '../../data/data'
import "./Bookc.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {auth } from "../../firebase"
import db from "../../firebase"
import { collection, addDoc } from "firebase/firestore"; 
import {  useNavigate } from 'react-router-dom'


export default function Bookc({id}) {

  const navigate=useNavigate();
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  
  const text=parseInt(id)
  const loca= data.filter(x=> x.id === text);
  const req=loca[0].cars
  const [value, setValue] = React.useState(req[0].id);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [valuee, setValuee] = React.useState("morning");
  const handleChangee = (event) => {
    setValuee(event.target.value);
  };

  const handlefb = async() => {
    const ted=parseInt(value)
    const loca= req.filter(x=> x.id === ted);
    const carr=loca[0].label
    const pricee=loca[0].value
    await addDoc(collection(db, "bookings"), {
      schoolid: id,
      useruid:auth.currentUser.uid,
      name:auth.currentUser.displayName,
      contact:name,
      date:startDate,
      time:valuee,
      car:carr,
      price:pricee
    });
    navigate('/')
  };

  return (
    <div>
          <div className="login-box">
            <h2>Please Fill the Form</h2>
              <div className="user-box">
                <input type="text" name="contact" required="" value={name}
                  onChange={(e) => setName(e.target.value)}/>
                <label>Contact No.</label>
              </div>
              <label className='pjh'>Select Date.</label>
              <div className="user-box">
               <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
              </div>
              <label className='pjh'>Select Car.</label>
              <br></br>
              <select value={value} onChange={handleChange} className='dropdown'>
              {req.map((option) => (
                <option key={option.id} value={option.id}>{option.label}</option>
              ))}
              </select>
              <br></br>
              <label className='pjh'>Select Time.</label>
              <br></br>
              <div className='select'>
              <select value={valuee} onChange={handleChangee} className='dropdown'>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
              </div>
              <br></br>
              <button className='bgg' onClick={handlefb}>
                Submit
              </button>
          </div>
    </div>
  )
}


