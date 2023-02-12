import React,{useEffect, useState} from 'react'
import data from '../../data/data'
import "./Bookc.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {auth } from "../../firebase"
import axios from 'axios';
import toast from 'react-hot-toast';


export default function Bookc({id}) {


  const [name, setName] = useState("");
  const [hash, sethash] = useState("");
  const [txnid,settxnid]=useState(Math.random() * (50000 - 10000) + 10000);
  const [startDate, setStartDate] = useState(new Date());
  const text=parseInt(id)
  const loca= data.filter(x=> x.id === text);
  const req=loca[0].cars
  const [value, setValue] = React.useState(req[0].id);
  const [money, setmoney] = React.useState(0);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [valuee, setValuee] = React.useState("morning");
  const handleChangee = (event) => {
    setValuee(event.target.value);
  };

  useEffect(() => {
    const fetchData = async() => {
      const ted=parseInt(value)
      const loca= req.filter(x=> x.id === ted);
      const carr=loca[0].label
      const pricee=loca[0].value
      setmoney(pricee.toString())
      const firstname=auth.currentUser.displayName;
      const email=auth.currentUser.email
      const _data={ firstname:firstname,email:email,amount:money,txnid:txnid} 
      axios.post('https://famous-blue-handbag.cyclic.app/hash',_data)
         .then(res=>{
              sethash(res.data);
         })
         .catch(err=>{
              settxnid(Math.random() * (50000 - 10000) + 10000);
              console.log(err);
         })
      const __data={schoolid:text,userid:auth.currentUser.uid,name:auth.currentUser.displayName,contact:name,date:startDate,time:valuee,car:carr,price:pricee}
      axios.post('https://famous-blue-handbag.cyclic.app/info',__data)
      .then(res=>{
      })
      .catch(err=>{
          console.log(err);
      })
      
    }
    fetchData();


},[money,req,value,name,startDate,valuee,text,txnid])

const [checked, setChecked] = useState(false);

const handleCheckboxChange = (event) => {
  setChecked(event.target.checked);
};

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!checked) {
      toast.error("Please check the checkbox");
      return;
    }
    const isValid = /^\d{10}$/.test(name);
      if (!isValid) {
        toast.error("Please enter valid number")
        return;
      }
    event.currentTarget.submit();
  };
 

  return (
    <div>
          <div className="login-box">
            <h2>Please Fill the Form</h2>
            <form onSubmit={handleSubmit} action='https://secure.payu.in/_payment' method='post'>
            
              <input type="hidden" name="key" value="LCiKj1" />
              <input type="hidden" name="txnid" value={txnid}/>
              <input type="hidden" name="productinfo" value="Book" />
              <input type="hidden" name="amount" value={money} />
              <input type="hidden" name="email" value={auth.currentUser.email} />
              <input type="hidden" name="firstname" value={auth.currentUser.displayName} />
              <input type="hidden" name="surl" value="https://famous-blue-handbag.cyclic.app/sucess" />
              <input type="hidden" name="furl" value="https://famous-blue-handbag.cyclic.app/sucess" />
              <input type="hidden" name="hash" value={hash}/>
              <div className="user-box">
                <input type="text" name="phone" pattern="^[0-9\b]+$" required value={name}
                  onChange={(e) =>{
                    setName(e.target.value)
                  }} />
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
              <label>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={handleCheckboxChange}
                />
                 I have read and accept the terms of service
              </label>
              <br></br>
              <input type="submit" value="Book" className='tyr'/> 
              
            </form>
          </div>
    </div>
  )
  }


