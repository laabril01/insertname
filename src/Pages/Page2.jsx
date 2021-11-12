import React from 'react'
import { useState,useEffect } from 'react'
import {useUser} from "../Context/user"
import { Link } from 'react-router-dom'

/* MODULO GESTION USUARIOS login */

const Page2 = () => {


    const {GlobalData,setGlobalData} = useUser();
   
    

    return (
        <div className="bodyy">
         <span>/* MODULO GESTION USUARIOS registro */</span>

          <span>el usuario tendra : nombre completo , identificacion , correo, contraseña, rol , estado </span><br />
      

          

            <Link to="/"> link para index</Link>

        </div>
    )
}

export default Page2
  