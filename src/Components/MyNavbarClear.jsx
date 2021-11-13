import React from 'react'
import { Link    } from 'react-router-dom'



import "../Styles/MyNavbar.css"

const MyNavbarClear = (props) => {

  
 
    return (

      <nav className="navbar navbar-expand-lg navbar-light  sticky-top ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src="https://i.imgur.com/d215U6l.png" className="img-fluid" alt="Responsive image"/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <span className="nav-link active"> <i class="fas fa-sign-in-alt"/> {props.info} </span>
            </li>
          </ul>

            <span className="navbar-text">
            <Link to="/"> <a className="nav-link active" aria-current="page" href="#"><i class="fas fa-home"></i> HOME </a></Link>
            
      </span>

        </div>
      </div>
    </nav>


    )
}

export default MyNavbarClear
