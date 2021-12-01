import React from 'react'

import { Link } from 'react-router-dom'

import { useQuery, useMutation } from "@apollo/client";

import { OBTENERINSCRIPCION } from "../graphql/inscripciones/queries";



/* MODULO GESTION Inscripciones Estudiantes */


const Page8 = () => {


  const { data, error, loading } = useQuery( OBTENERINSCRIPCION  );

  
  

  

    
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
      <th scope="col">Editar</th>
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
       
          <td><Link to={`/page9/${x._id}`}><button type="button" className="btn btn-outline-dark">✏️</button></Link></td>
          <td> <button type="button" className="btn btn-outline-dark" onClick = { ()=> ( console.log("sdf")    )} >🗑️</button>  </td>
         
        
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
  


