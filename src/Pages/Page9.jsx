import React from 'react'

import { Link,useParams } from 'react-router-dom'
import { useState, useEffect} from 'react'
import { useQuery, useMutation } from "@apollo/client";
import { TRAERPROYECTOLITE } from '../graphql/proyectos/queries';
import { EDITAPROYECTOAVAN } from '../graphql/proyectos/mutations';
import { CREARAVANCE } from '../graphql/avances/mutations';

/* MODULO GESTION Avances Estudiantes */


const Page9 = () => {

    const [editaProyectoAVAN,{data:EPData,error:EPError,loading:EPLoading}] = useMutation( EDITAPROYECTOAVAN )
    const [crearAVANCE,{data:CAData,error:CAError,loading:CALoading}] = useMutation( CREARAVANCE )

    const [INSCRITOS, setINSCRITOS] = useState()

   
    const{filtro} = useParams()
    const { data, error, loading } = useQuery(TRAERPROYECTOLITE,{
        variables:{filtro}
    })

    console.log("esta info traje " ,data)
    if(data){console.log("esta info traje " ,data.ProyectosLite)}
    

    if(CAData){
        console.log("esta info me feedback el avance " ,CAData)
        console.log("esta info me feedback el avance " ,CAData.crearAvance._id)
    }

    
    if(loading) return <div> cargando informacion .........</div>
 
    return (
        <div className="bodyy">
        

            <span> soy la pagina 9</span>
            <Link to="/Page5"> link para atras</Link>


            {data && 
        data.ProyectosLite.map((x) => {
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

                        <p class="card-text"> <strong>Estado Del Proyecto :</strong> {x.estado}  </p>
                        <p class="card-text"> <strong>Fase Del Proyecto :</strong> {x.faseProyecto}   </p>
                        <input type="text" onChange={(e)=>{ setINSCRITOS(e.target.value)}} />
                        <button type="button" className="btn btn-outline-dark"  onClick = {()=>{
                        
                            
                            crearAVANCE({
                                variables:{
                                    proyecto: x._id,
                                    fechaAvance: "nada",
                                    descripcion: INSCRITOS,
                                    observacionesLider: "adslfkj"
                              
                                }
                            })

                
                        
                        }} >✔️ Crear Un Avance   </button>


{  CAData != undefined ? (<button type="button" className="btn btn-outline-dark"  onClick = {()=>{
                        
                            
                 

                        editaProyectoAVAN({
                            variables:{
                                id: x._id,
                                avances: CAData.crearAvance._id,
                          
                            }
                        })
                    
                    }} >✔️ Enviar avance   </button>) : (<button type="button" className="btn btn-outline-dark"  disabled onClick = {()=>{
                        
                            
            

                    
                    }} >✔️ Enviar avance :(   </button>) }

                        
                 
                        
                        <p class="card-text"> 
                          <small class="text-muted">
                            Lider Del Proyecto: {x.lider.nombreCompleto} <br />
                            Correo Del Lider: {x.lider.correo}
                          </small>
                        </p>

                        <p class="card-text"> 
                        AVANCES: <br />
                          <small class="text-muted">
                            {x.avances.map((y) => {return ( <div> ◾ {y.descripcion} </div> )} ) } <br />
                            
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
    )
}

export default Page9
  


