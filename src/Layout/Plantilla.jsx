import React from 'react'
import MyNavbar from '../Components/MyNavbar'
import Myfootbar from '../Components/Myfootbar'
import { Outlet } from 'react-router'

const Plantilla = () => {
    return (
        <div>

            <MyNavbar/>
            <Outlet/>
            <Myfootbar/>
            
        </div>
    )
}

export default Plantilla
