import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useQuery, useMutation } from '@apollo/client';
import { obtenerUsuarios } from '../graphql/usuarios/queries';
import { ELIMINARUSUARIO } from '../graphql/usuarios/mutations';
import { useNavigate,    } from 'react-router';

import '../Styles/Page3.css';


import jwt_decode from "jwt-decode";

/* MODULO GESTION USUARIOS ADMIN  podra cambiar el estado de los usuarios registrados   (pendiente - autorizado - no autorizado) */

const Page3 = () => {

  const navigatePage = useNavigate()
  

  const [eliminarUsuario,{data:deleteData,error:deleteError,loading:deleteLoading}] = useMutation(ELIMINARUSUARIO)

  useEffect (()=>{    console.log(deleteData , "los datos del USUARIO deleteado")    },[deleteData])
  
    const {data,error,loading} = useQuery(obtenerUsuarios)


    useEffect (()=>{
      
        console.log(data , "los datos");
        

    },[error , deleteData])

    if(loading) return <div> cargando informacion .........</div>
    return (
        <div className="bodyy">


            <br /><br /><span> soy la pagina 3</span>
            <span>MODULO GESTION USUARIOS ADMIN  podra cambiar el estado de los usuarios registrados   (pendiente - autorizado - no autorizado)</span>

            <div className="TablaDeUsuarios col-sm-8">
            <table className="table table-Light table-hover">

          
            <thead>
    <tr>
      <th scope="col">Correo</th>
      <th scope="col">Identificacion</th>
      <th scope="col">NombreCompleto</th>
      <th scope="col">Clave</th>
      <th scope="col">TipoUsuario</th>
      <th scope="col">Estado</th>
      <th scope="col">Editar</th>
      <th scope="col">Eliminar</th>

      
    </tr>
  </thead>
  <tbody>
      
  {data && data.Usuarios.map((x) =>{return (
          
          <tr key={x._id}>
            
            <td>{x.correo}</td>
            <td>{x.identificacion}</td>
            <td>{x.nombreCompleto}</td>
            <td>{x.clave}</td>
            <td>{x.tipoUsuario}</td>
            <td>{x.estado}</td>
          <td><Link to={`/page4/${x._id}`}><button type="button" className="btn btn-outline-dark">✏️</button></Link></td>
          <td> <button type="button" className="btn btn-outline-dark" onClick = { ()=> ( eliminarUsuario({ variables:{id:x._id}} ,  window.location.reload()  )   )} >🗑️</button>  </td>
         
        
          </tr>
          )
            })}
    
  </tbody>
            </table>

            </div>
     
            
        </div>
    )
}

export default Page3
  