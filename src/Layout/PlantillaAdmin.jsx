import React from 'react'
import { useEffect} from 'react'
import MyNavbarAdmin from "../Components/MyNavbarAdmin"
import Myfootbar from '../Components/Myfootbar'
import { Outlet } from 'react-router'
import { useLoginContext } from '../Context/loginContex'
import { TESTTOKEN } from '../graphql/usuarios/mutations'
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router';

import jwt_decode from "jwt-decode";

const PlantillaAdmin = (props) => {

    const navigatePage = useNavigate()


    const {loginToken, setloginToken, setToken} = useLoginContext() // reviso token y lo guarda

    const [testtoken,{data:TESTTOKENData,error:TESTTOKENError,loading:TESTTOKENLoading}] = useMutation( TESTTOKEN )

    useEffect (()=>
    { 
        testtoken() 
    },[])

    useEffect (()=>
    { 
        console.log("el nuevo token es " , TESTTOKENData)
        if(TESTTOKENData){
            if(TESTTOKENData.testToken.token){setToken(TESTTOKENData.testToken.token)}
        }
        else{setToken(null)}
        
    },[TESTTOKENData])


    useEffect (()=>
    {    
        console.log("token actual" , loginToken )
    },[loginToken])

    
    // aqui cargo los datos del token y valido con ellos
    const token = JSON.parse(localStorage.getItem('TOKEN'));
    console.log("este es el token almacenado " , token)
    var decoded = "sin rol"
    if(token!=null){
        decoded = jwt_decode(token)
        console.log("este es el token decifrado " , decoded.tipoUsuario)
    }
    
    if(TESTTOKENData==null && decoded ==null){navigatePage("page1")} 
   ///////////////

    return (
        <div>

            <MyNavbarAdmin info={props.text}/>
            <div>el rol actual es {decoded.tipoUsuario +" "+ decoded._id}</div>

{  loginToken == null ? (<div className="h1 min-vh-100 ">  NO ESTAS LOGUEADO  : ( </div>) :  
<div>   {decoded.tipoUsuario != "Admin" ? ( <div> no eres admin y no puede ver la seccion </div> ) :( <div> <Outlet/> </div> )  }        </div> }


            
            <Myfootbar/>
            
        </div>
    )
}

export default PlantillaAdmin
