import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { obtenerProyectosLite } from "../graphql/proyectos/queries";
import '../Styles/Page5.css';
import { ELIMINARPROYECTO } from "../graphql/proyectos/mutations";
import { CREARUNAINSCRIPCION } from "../graphql/inscripciones/mutations";

import jwt_decode from "jwt-decode";

/* MODULO GESTION PROYECTOS Estudiantes */

const Page5 = () => {
  const hoy = new Date();
  
  console.log("fecha" , hoy.toLocaleDateString())
  const { data, error, loading } = useQuery(obtenerProyectosLite);

  const [eliminarProyecto,{data:patchData,error:patchError,loading:patchLoading}] = useMutation( ELIMINARPROYECTO )

  const [crearUnaInscripcion,{data:patchDataINS,error:patchErrorINS,loading:patchLoadingINS}] = useMutation( CREARUNAINSCRIPCION )

     // aqui cargo los datos del token y valido con ellos
     const token = JSON.parse(localStorage.getItem('TOKEN'));
     console.log("este es el token almacenado " , token)
     var decoded = "sin rol"
     if(token!=null){
         decoded = jwt_decode(token)
         console.log("este es el token almacenado rol " , decoded._id)

     }

 



  
  useEffect(() => {
    console.log(data, "los datos");
    console.log(error, "los datos error");
    if(data!=null){console.log( data.Proyectos[0].lider , "los datos anidados SON");}
  }, [data!= undefined]);


  useEffect(() => {
   console.log("borro algo")
  }, [patchData]);

  if(loading) return <div> cargando informacion .........</div>
  return (
    <div className="bodyy">
 
 <div className="d-flex justify-content-center mt-2">
 <br />
 <Link to={`/page7/`}><button type="button" className="btn btn-outline-dark">✏️ Crear Un Nuevo Proyecto </button></Link>
 <Link to={`/page8/`}><button type="button" className="btn btn-outline-dark">👁️ Ver y aceptar Inscripciones </button></Link>
 <Link to={`/page9/${decoded._id}`}><button type="button" className="btn btn-outline-dark">✍️ Agregar Avances en Mis Proyectos </button></Link>
 
 </div>

      {data && 
        data.Proyectos.map((x) => {
          return (
            <div>

            
              <div className="TablaDeProyectos container">


            
  <div class="row">

  <div class="card mb-4 col">
                  <div class="row g-4">
                    <div class="col-md-3">
                      <img
                        src="https://i.imgur.com/kKe0E2N.png"
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-9">
                      <div class="card-body">
                        <h5 class="card-title"> <strong>Nombre Del Proyecto: </strong> {x.nombre} </h5>

                        <p class="card-text"> <strong>Estado Del Proyecto :</strong>  {x.estado} </p>
                        <p class="card-text"> <strong>Fase Del Proyecto :</strong>  {x.faseProyecto} </p>
                        <button type="button" className="btn btn-outline-dark" onClick = { ()=> 
                          crearUnaInscripcion( { variables: { 
                            
                        
                            proyecto: x._id,
                            estudiante: decoded._id,
                            estado: "InActiva",
                            fechaIngreso: hoy.toLocaleDateString(),
                            fechaEgreso: "0/00/0000",
                            
                          
                          }})} >✔️ Peticion de unirse al Proyecto </button>
                        <Link to={`/page6/${x._id}`}><button type="button" className="btn btn-outline-dark">✏️ Editar Proyecto </button></Link>
                        <button type="button" className="btn btn-outline-dark" onClick = { ()=> ( eliminarProyecto( { variables: { id: x._id}} ) , window.location.reload( )  )   } >🚮 Eliminar Proyecto </button>
                        
                        <p class="card-text"> 
                          <small class="text-muted">
                            Lider Del Proyecto: {x.lider.nombreCompleto} <br />
                            Correo Del Lider: {x.lider.correo}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

      
  </div>
  


                  

   
 
              </div>
            </div>
          );
        })} 

    </div>
  );
};

export default Page5;
