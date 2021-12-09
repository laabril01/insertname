import React from 'react'

import { Link } from 'react-router-dom'
import { useState, useEffect} from 'react'
import { useQuery, useMutation } from "@apollo/client";

import { OBTENERINSCRIPCION } from "../graphql/inscripciones/queries";
import { EDITARINSCRIPCION, ELIMINARINSCRIPCION } from '../graphql/inscripciones/mutations';

import MyModal from '../Components/MyModal'
import { getAllByText } from '@testing-library/dom';

import { OBTENERUNPROYECTO } from '../graphql/proyectos/queries'
import { EDITAPROYECTOINSC } from '../graphql/proyectos/mutations'



/* MODULO GESTION Inscripciones Estudiantes */


const Page8 = () => {

 

  const [EstadoInscripcion, setEstadoInscripcion] = useState("Activa")
  const [idInscripcion, setidInscripcion] = useState()
  const [idProyecto, setidProyecto] = useState()
  const [inscritosarray, setinscritosarray] = useState([])

 


  const { data, error, loading } = useQuery( OBTENERINSCRIPCION  );

  const [eliminarInscripcion,{data:delinshData,error:delinsError,loading:delinsLoading}] = useMutation( ELIMINARINSCRIPCION )

  const [editarInscripcione,{data:dataedit,error:dataeditError,loading:dataeditLoading}] = useMutation( EDITARINSCRIPCION )

 

  const [editaProyectoINSC,{data:EPData,error:EPError,loading:EPLoading}] = useMutation( EDITAPROYECTOINSC )



  const { data:Pdata, error:Perror, loading:Ploading } = useQuery(OBTENERUNPROYECTO,{
    variables:{
        id:idProyecto
    }
});
  

useEffect (()=>{  

  if(Pdata){
/*     console.log("holas desde pdata" , Pdata)
    console.log("datos extre" , Pdata.Proyectos[0].inscritos) */
    
    const arrayItems = [...Pdata.Proyectos[0].inscritos, { __typename: "Usuario", _id: "61ae92e7593bba3c48392a5a" } ]
    setinscritosarray(arrayItems)
    console.log("quemado", inscritosarray)

  
  }    


},[Pdata])

  


  

    if(data){
      console.log("el data" , data.Inscripciones[0].estudiante._id)
    }
 
 
  

  

    
  if(loading) return <div> cargando informacion .........</div>

    return (
        <div className="bodyy">
        

            <span> soy la pagina 8</span>
            <Link to="/Page5"> ATRAS</Link>


            <div className="TablaDeUsuarios col-sm-8">
            <table className="table table-Light table-hover">

          
            <thead>
    <tr>
      <th scope="col">Nombre del proyecto</th>
      <th scope="col">Nombre Del estudiante</th>
      <th scope="col">Estado Inscripcion</th>
      <th scope="col">Fecha Egreso</th>
      <th scope="col">Fecha Ingreso</th>
      <th scope="col">Aceptar</th>
      <th scope="col">Eliminar</th>
    

      
    </tr>
  </thead>
  <tbody>
      
  {data && data.Inscripciones.map((x) =>{return (
          
          <tr  key={x._id} >

            <td>{x.proyecto.nombre}</td>
            <td>{x.estudiante.nombreCompleto}</td>
            <td>{x.estado}</td>
            <td>{x.fechaEgreso}</td>
            <td>{x.fechaIngreso}</td>
       
          <td>
        
          <button type="button" className="btn btn-outline-dark" onClick = {   ()=> 
          (
            editarInscripcione( { variables: { id: x._id,estado:EstadoInscripcion}}), 
             setidInscripcion(x._id) ,
             setidProyecto(x.proyecto._id),
             editaProyectoINSC({
              variables:{
                  id: x.proyecto._id,
                  inscritos: x.estudiante._id,
            
              }
          })
            
  
          ) 
          } >✔️</button>
            </td>
          <td> <button type="button" className="btn btn-outline-dark" onClick = { ()=> ( eliminarInscripcion( { variables: { id: x._id}} ) )} >🗑️</button>  </td>
         
        
          </tr>
          )
            })}
    
  </tbody>
            </table>

    
       </div>
        </div>
    )
}

export default Page8
  


