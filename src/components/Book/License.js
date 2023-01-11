import React,{useState} from 'react'
import data from "../../data/data"
import db from "../../firebase"
import { collection, addDoc } from "firebase/firestore";
import { auth } from "../../firebase"
import {  useNavigate } from 'react-router-dom'

export default function License({id}) {
  const navigate=useNavigate();
  const [name, setName] = useState("");
  const [name1, setName1] = useState("");
  const [namee, setNamee] = useState("");
  let text=parseInt(id)
  const loca= data.filter(x=> x.id === text);
  const req=loca[0].license
  const [valuee, setValuee] = React.useState(req[0].id);
  const handleChangee = (event) => {
    setValuee(event.target.value);
  };
  const handlefb = async() => {

    const ted=parseInt(valuee)
    console.log(valuee);
    const loca= req.filter(x=> x.id === ted);
    const applicationn=loca[0].label
    const pricee=loca[0].value
    await addDoc(collection(db, "licence"), {
      schoolid: id,
      useruid:auth.currentUser.uid,
      name:auth.currentUser.displayName,
      aadhar:name,
      pan:namee,
      oldlicence:name1,
      application:applicationn,
      price:pricee
    });
    navigate('/')
  };

  return (
    <div>

      <div className="login-box">
            <h2>Please Fill the Form</h2>
              <div className="user-box">
                <input type="text" name="aadhar" required="" value={name}
                  onChange={(e) => setName(e.target.value)}/>
                <label>Aadhar No.</label>
              </div>
              <div className="user-box">
                <input type="text" name="pan" required="" value={namee}
                  onChange={(e) => setNamee(e.target.value)}/>
                <label>PAN No.</label>
              </div>
              <div className="user-box">
                <input type="text" name="license" required="" value={name1}
                  onChange={(e) => setName1(e.target.value)}/>
                <label>Old Licence Id (Optional)</label>
              </div>
              <span className='note'>Note: Please fill old Licence id only if you apply for renewal of license</span>
              <br></br>
              <label className='pjh'>Select Licence Applicant Type.</label>
              <br></br>
              <br></br>
              <select value={valuee} onChange={handleChangee} className='dropdown'>
                {req.map((option) => (
                  <option key={option.id} value={option.id}>{option.label}</option>
                ))}
              </select>

              <button className='bgg' onClick={handlefb}>
                Submit
              </button>
          </div>

    </div>
  )
}
