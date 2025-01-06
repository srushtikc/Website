import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
  return(
    <>
    <div style={{backgroundColor:"black"}} >
      <ul style={{backgroundColor:"black", textDecorationColorcolor:"whitesmoke", color:"whitesmoke",display:'flex',flexDirection:'row', justifyContent:'space-between',width:"100vw",paddingLeft:"20px",paddingRight:"20px"}}>
        <Link to="/"><li>Home</li> </Link>
        <Link to="/explore"><li>Explore</li></Link>
        <Link to="/aboutUs"><li>About Us</li></Link>
        <Link to="contactUs"><li>Contact Us</li></Link>
      </ul>
    </div>
    </>
  )
}

export default Navbar;