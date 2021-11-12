import React from 'react'

import MyNavbarClear from "../Components/MyNavbarClear"
import Myfootbar from '../Components/Myfootbar'
import { Outlet } from 'react-router'

const PlantillaLogin = (props) => {
    return (
        <div>

            <MyNavbarClear info={props.text}/>
            <Outlet/>
            <Myfootbar/>
            
        </div>
    )
}

export default PlantillaLogin
