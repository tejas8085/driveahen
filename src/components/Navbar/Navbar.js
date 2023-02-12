import React,{useEffect,useState} from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth' 
import { auth } from "../../firebase";



export default function Navbar() {
	const [loginState, setLoginState] = useState(true)
	
	useEffect(() => {
	  onAuthStateChanged(auth, (user) => {
		if (user) {
		  setLoginState(true)
		} else {
		  setLoginState(false)
		}
	  })
	}, [])

  return (
    <div className='navbody'>
            <div className='logo'>
                <Link to="/" style={{ textDecoration: 'none',color:'white'}}>AHEN</Link>
            </div>
		

			{!loginState &&
			 	<div className='rev'>
                	<Link to="/signin" style={{ textDecoration: 'none',color:'white'}}>Sign IN</Link>
            	</div>
			}
			{loginState &&
			 	<div className='rev'>
                	<Link to="/cart" style={{ textDecoration: 'none',color:'white'}}>CART</Link>
            	</div>
			}
			{loginState &&
			 	<div className='rev1'>
                	<Link to="/profile" style={{ textDecoration: 'none',color:'white'}}>Profile</Link>
            	</div>
			}
			<input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
			<label for="menu-icon"></label>
			<nav className="nav"> 		
				<ul className="pt-5">
					<li><Link to="/" style={{ textDecoration: 'none'}}>Home</Link></li>
					<li><Link to="/about" style={{ textDecoration: 'none'}}>About</Link></li>
					<li><Link to="/bookings" style={{ textDecoration: 'none'}}>Bookings</Link></li>
					<li><Link to="/contact" style={{ textDecoration: 'none'}}>Contact</Link></li>
					<li><Link to="/terms" style={{ textDecoration: 'none'}}>T&C</Link></li>
				</ul>
			</nav>
    </div>
  )
}
