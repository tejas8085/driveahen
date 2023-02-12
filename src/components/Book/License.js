import React,{useState,useEffect} from 'react'
import data from "../../data/data"
import { auth } from "../../firebase"
import "./licence.css"
import axios from 'axios';
import toast from 'react-hot-toast';

export default function License({id}) {
  const [cur, setcur] = useState("");
  const [name, setName] = useState("");
  const [name1, setName1] = useState("");
  const [txnid,settxnid]=useState(Math.random() * (50000 - 10000) + 10000);
  const [namee, setNamee] = useState("");
  const [money, setmoney] = useState(0);
  const [hash, sethash] = useState("");
  let text=parseInt(id)
  const loca= data.filter(x=> x.id === text);
  const req=loca[0].license
  const [valuee, setValuee] = React.useState(req[0].id);
  const handleChangee = (event) => {
    setValuee(event.target.value);
  };
  useEffect(() => {
    const fetchData = async() => {
      const ted=parseInt(valuee)
      const loca= req.filter(x=> x.id === ted);
      const applicationn=loca[0].label
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
              console.log(err);
         })
      const __data={schoolid:text,userid:auth.currentUser.uid,name:auth.currentUser.displayName,contact:cur,aadhar:name,
      pan:namee,oldlicence:name1,applicationn:applicationn,price:pricee}
      axios.post('https://famous-blue-handbag.cyclic.app/infol',__data)
      .then(res=>{
      })
      .catch(err=>{
          settxnid(Math.random() * (50000 - 10000) + 10000);
          console.log(err);
      })
      
    }
    fetchData();
},[cur,name,name1,namee,req,text,valuee,txnid,money])



  // const handlefb = async() => {

  //   const ted=parseInt(valuee)
  //   console.log(valuee);
  //   const loca= req.filter(x=> x.id === ted);
  //   const applicationn=loca[0].label
  //   const pricee=loca[0].value
  //   await addDoc(collection(db, "licence"), {
  //     schoolid: id,
  //     useruid:auth.currentUser.uid,
  //     name:auth.currentUser.displayName,
  //     aadhar:name,
  //     pan:namee,
  //     oldlicence:name1,
  //     application:applicationn,
  //     price:pricee
  //   });
  //   navigate('/')
  // };

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
    const isValid = /^\d{10}$/.test(cur);
      if (!isValid) {
        toast.error("Please enter valid number")
        return;
      }
    event.currentTarget.submit();
  };


  return (
    <div>

      <div className="login-box-licence">
            <h2>Please Fill the Form</h2>
              <form onSubmit={handleSubmit} action='https://secure.payu.in/_payment' method='post'>
              <div className="user-box">
              <input type="hidden" name="key" value="LCiKj1" />
              <input type="hidden" name="txnid" value={txnid}/>
              <input type="hidden" name="productinfo" value="Book" />
              <input type="hidden" name="amount" value={money} />
              <input type="hidden" name="email" value={auth.currentUser.email} />
              <input type="hidden" name="firstname" value={auth.currentUser.displayName} />
              <input type="hidden" name="surl" value="https://famous-blue-handbag.cyclic.app/sucess" />
              <input type="hidden" name="furl" value="https://famous-blue-handbag.cyclic.app/sucess" />
              <input type="hidden" name="hash" value={hash}/>
                <input type="text" name="phone" pattern="^[0-9\b]+$" required value={cur}
                  onChange={(e) => setcur(e.target.value)}/>
                <label>Contact No.</label>
              </div>
              <div className="user-box">
                <input type="text" name="aadhar" required value={name}
                  onChange={(e) => setName(e.target.value)}/>
                <label>Aadhar No.</label>
              </div>
              <div className="user-box">
                <input type="text" name="pan" required value={namee}
                  onChange={(e) => setNamee(e.target.value)}/>
                <label>PAN No.</label>
              </div>
              <div className="user-box">
                <input type="text" name="license"  value={name1}
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
              <br></br>
              <label>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={handleCheckboxChange}
                />
                 I have read and accept the terms of service
              </label>
              <input type="submit" value="Apply" className='grt'/> 
              </form>
          </div>

    </div>
  )
}
