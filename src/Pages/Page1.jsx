import React from 'react'
import {useUser} from "../Context/user"
import { Link } from 'react-router-dom';

/* MODULO GESTION USUARIOS Registro */

const Page1 = () => {
    

    const {GlobalData,setGlobalData} = useUser();

    return (
        <div>
<div className="bodyy">
            <span>/* MODULO GESTION USUARIOS login */</span>
     
            <Link to="/"> link para index</Link>
            </div>
             
            
        </div>
    )
}

export default Page1
