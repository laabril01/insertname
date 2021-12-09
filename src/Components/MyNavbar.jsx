import React from 'react'
import { Link    } from 'react-router-dom'

import "../Styles/MyNavbar.css"

const MyNavbar = () => {

  
 
    return (

        <nav className="navbar navbar-expand-lg navbar-light  sticky-top ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="https://i.imgur.com/d215U6l.png" className="img-fluid" alt="Responsive image"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <span className="navbar-text">
      <button type="button" className="btn btn-dark"  onClick = { ()=> localStorage.removeItem("TOKEN") }> <i className="fas fa-user-edit"></i> Log Out</button>
      <Link to="/page2"><button type="button" className="btn btn-dark"  onClick = { ()=> console.log("check in") }> <i className="fas fa-user-edit"></i> Check In</button></Link>
      <Link to="/page1"><button type="button" className="btn btn-dark"  onClick = { ()=>  console.log("log in")}> <i className="fas fa-user"></i> Log In  </button></Link>
      </span>
    </div>
  </div>
</nav>


    )
}

export default MyNavbar
