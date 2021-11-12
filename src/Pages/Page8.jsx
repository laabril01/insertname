import React from 'react'
import {useUser} from "../Context/user"
import { Link } from 'react-router-dom'

/* MODULO GESTION Avances Estudiantes */


const Page8 = () => {

    const {GlobalData,setGlobalData} = useUser();



    return (
        <div className="bodyy">
            <span>pagina 8 {GlobalData.apellido} </span>
            <span>pagina 8 {GlobalData.nombre} </span>

            <span> soy la pagina 8</span>
            <Link to="/"> link para Index</Link>
     
            
        </div>
    )
}

export default Page8
  


