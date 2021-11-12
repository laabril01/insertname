import React from 'react'

import MyNavbarAdmin from "../Components/MyNavbarAdmin"
import Myfootbar from '../Components/Myfootbar'
import { Outlet } from 'react-router'

const PlantillaAdmin = (props) => {
    return (
        <div>

            <MyNavbarAdmin info={props.text}/>
            <Outlet/>
            <Myfootbar/>
            
        </div>
    )
}

export default PlantillaAdmin
