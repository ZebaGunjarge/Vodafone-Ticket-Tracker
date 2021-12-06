
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { NavLink } from 'react-bootstrap'

import {useState,useEffect} from 'react'

function Navbar1() {
  
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light">
          <img onClick={()=>window.location.href="../"} style={{marginLeft:"10%",marginRight:"15%",width:"80px",height:"85px", cursor:"pointer"}} src="voda.png"/>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  
  </div>
</nav> 
        </div>
    )
}

export default Navbar1