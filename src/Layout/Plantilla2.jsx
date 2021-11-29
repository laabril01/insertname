import React from 'react'
import Myfootbar from '../Components/Myfootbar'
import { useLoginContext } from '../Context/loginContex'
import { TESTTOKEN } from '../graphql/usuarios/mutations'
import { useMutation } from '@apollo/client';
import { Outlet } from 'react-router'
import { useEffect} from 'react'

const Plantilla2 = () => {

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


    return (
        <div>

        {  loginToken == null ? (<div className="h1">  NO ESTAS LOGUEADO  : ( </div>) : (<div>  <Outlet/> </div>) }
        
            <Myfootbar/>
            
        </div>
    )
}

export default Plantilla2
