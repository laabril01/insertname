import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { obtenerOneUsuario } from '../graphql/usuarios/queries';

/* MODULO GESTION PROYECTOS  */


const Page4 = () => {

    const{_id} = useParams()

    const {data,error,loading} = useQuery(obtenerOneUsuario,{
        variables:{_id}
    })

    useEffect (()=>{
        
        console.log(data , "los datos del USUARIO")
        


    },[data])





    if(loading) return <div> cargando informacion .........</div>
    return (
        <div className="bodyy">
            

            <span> soy la pagina 4</span>
            <Link to="/"> link para Index</Link>
            <span className="h4"> /* MODULO GESTION Usuarios perfil*/</span><br />

            <span className="h2"> Hola esta en la pagina de perfil del usuario N° { _id}</span> <br />

            <span>{data.Usuarios[0].nombreCompleto} nombreCompleto </span> <br />
            <span>{data.Usuarios[0].correo} correo </span> <br />
            <span>{data.Usuarios[0].clave} clave </span> <br />
            <span>{data.Usuarios[0].estado} estado </span> <br />
            <span>{data.Usuarios[0].identificacion} identificacion </span> <br />
            <span>{data.Usuarios[0].tipoUsuario} tipoUsuario </span> <br />

        
        </div>
    )
}

export default Page4
  