import React, { useState } from 'react'
//import components
import '../NavBar/nav.css'
// importing logo
import logo from '../Assets/logo.png'

import { Link } from 'react-router-dom'

function Nav() {
  const [isClick, setIsClick] = useState(false);
  return (
    <>
      <div className="nav font">
        <div className="logo">
            <Link to="/"><img alt='img' src={logo}/></Link>
        </div>
        <div className={isClick ? "link" : "closelink"} >
       
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/guides">City Guides</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
             <div className="login">
             <Link  to="/login">
              <button className='btn'>Login</button>
              </Link>
                
             </div>
        </ul>
        </div>
        <a href="/con" onClick={()=>setIsClick(!isClick)}>
          {isClick? <i style={{position:'absolute', zIndex:'2',transition:'0.01s',fontSize:'25px',top:'20px',right:'90px'}} className="fa-solid fa-xmark fa"></i> : <i style={{position:'absolute',zIndex:'2'}} className="fa fa-sharp fa-solid fa-bars i" ></i>}
        
        </a>
        
      </div>
    </>
  )
}

export default Nav