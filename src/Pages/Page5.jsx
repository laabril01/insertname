import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { obtenerProyectosLite } from "../graphql/proyectos/queries";
import '../Styles/Page5.css';

/* MODULO GESTION PROYECTOS Estudiantes */

const Page5 = () => {
  const { data, error, loading } = useQuery(obtenerProyectosLite);

  
  useEffect(() => {
    console.log(data, "los datos");
    console.log(error, "los datos error");
    if(data!=null){console.log( data.Proyectos[0].lider , "los datos anidados SON");}
  }, [data!= undefined]);

  if(loading) return <div> cargando informacion .........</div>
  return (
    <div className="bodyy">
 
 <div className="d-flex justify-content-center mt-2">
 <br />
 <Link to={`/page7/`}><button type="button" className="btn btn-outline-dark">✏️ Crear Un Nuevo Proyecto </button></Link>
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
                        <button type="button" className="btn btn-outline-dark" onClick = { ()=> ( console.log("click"))  } >✔️ Peticion de unirse al Proyecto </button>
                        <Link to={`/page6/${x._id}`}><button type="button" className="btn btn-outline-dark">✏️ Editar Proyecto </button></Link>

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
