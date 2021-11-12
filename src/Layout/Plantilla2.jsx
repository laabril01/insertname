import React from 'react'
import Myfootbar from '../Components/Myfootbar'
import { Outlet } from 'react-router'

const Plantilla = () => {
    return (
        <div>

            
            <Outlet/>
            <Myfootbar/>
            
        </div>
    )
}

export default Plantilla
