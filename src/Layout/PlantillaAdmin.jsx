import React from 'react'
import { useState, useEffect} from 'react'
import MyNavbarAdmin from "../Components/MyNavbarAdmin"
import Myfootbar from '../Components/Myfootbar'
import { Outlet } from 'react-router'
import { useLoginContext } from '../Context/loginContex'
import { TESTTOKEN } from '../graphql/usuarios/mutations'
import { useMutation } from '@apollo/client';

const PlantillaAdmin = (props) => {
    const {loginToken, setloginToken, setToken} = useLoginContext() // reviso token

    const [testtoken,{data:TESTTOKENData,error:TESTTOKENError,loading:TESTTOKENLoading}] = useMutation( TESTTOKEN )

    useEffect (()=>{ testtoken() },[])

    return (
        <div>

            <MyNavbarAdmin info={props.text}/>
            <Outlet/>
            <Myfootbar/>
            
        </div>
    )
}

export default PlantillaAdmin
