import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect} from 'react'
import jwt_decode from "jwt-decode";

import { useMutation ,useq } from '@apollo/client';
import { CREARUNPROYECTO } from '../graphql/proyectos/mutations';

/* MODULO GESTION Avances Lideres */


const Page7 = () => {

    const [crearProyecto,{data:patchData,error:patchError,loading:patchLoading}] = useMutation( CREARUNPROYECTO)

    useEffect (()=>{  

    },[patchData , patchError])

    const token = JSON.parse(localStorage.getItem('TOKEN'));
    console.log("este es el token almacenado " , token)
    var decoded = "sin rol"
    if(token!=null){
        decoded = jwt_decode(token)
        console.log("este es el token decifrado " , decoded._id )
    }

   const [nombre, setnombre] = useState("")
   const [presupuesto, setpresupuesto] = useState(100000)
   const [objetivosGenerales, setobjetivosGenerales] = useState(["Obj_G 1" , "Obj_G 2"])
   const [objetivosEspecificios, setobjetivosEspecificios] = useState(["Obj_E 1" , "Obj_E 2"])
   const [fechaInicio, setfechaInicio] = useState("")
   const [fechaFin, setfechaFin] = useState("")
   const [estado, setestado] = useState("Activo")
   const [faseProyecto, setfaseProyecto] = useState("Inicial")
   const [inscritos, setinscritos] = useState([])
   const [avances, setavances] = useState([])
   const [lider, setlider] = useState(decoded._id)

    
    const items = (valor) => {
       const arrayItems = valor.split(/,|;/)
       return (arrayItems)
    }

    

    const handleSubmit = (event) => 
    {
      
      event.preventDefault();  
        console.log("dato" , nombre )
        console.log("presupuesto" , presupuesto )
        console.log("objetivosGenerales" , objetivosGenerales )
        console.log("objetivosEspecificios" , objetivosEspecificios )
        console.log("fechaInicio" , fechaInicio )
        console.log("fechaFin" , fechaFin )
        console.log("estado" , estado )
        console.log("faseProyecto" , faseProyecto )
        console.log("inscritos" , inscritos )
        console.log("avances" , avances )
        console.log("lider" , lider ) 

        crearProyecto({
            variables:{
                nombre:nombre,
                presupuesto:presupuesto,
                objetivosGenerales:objetivosGenerales,
                objetivosEspecificos:objetivosEspecificios,
                fechaInicio:fechaInicio,
                fechaFin:fechaFin,
                estado:estado,
                faseProyecto:faseProyecto,
                inscritos:inscritos,
                avances:avances,
                lider:lider

            }
        })

    
      
    }

    

    return (
        <div className="bodyy">

            <span> soy la pagina 7</span>
            <Link to="/Page5"> ATRAS</Link>


            
         <form id="formData" name="formData" onSubmit={handleSubmit}  > 
         
         <div className="TablaCrearProyecto col-sm-6 was-validated  ">
     
             <div className="form-group row">
             <label for="nombre" className=" col-sm-2 col-form-label"> <strong>Nombre Proyecto</strong></label>
             <div className="col-sm-10">
             <input type="text" className="form-control" id="nombre"  required  onChange={(e)=>{ setnombre(e.target.value)}} />
             </div>
             </div> 

    
     
             <div className="form-group row">
             <label for="nombre" className="col-sm-2 col-form-label"> <strong>Presupuesto</strong></label>
             <div className="col-sm-10">
             <input type="number" className="form-control" id="nombre"  defaultValue={presupuesto} required onChange={(e)=>{ setpresupuesto(e.target.value)}} />
             </div>
             </div> 
     
             <div className="form-group row">
             <label for="nombre" className=" col-sm-2 col-form-label"> <strong>Objetivos Generales </strong></label>
             <div className="col-sm-10">
             <input type="array" className="form-control" id="nombre" defaultValue={objetivosGenerales}   required onChange={(e)=>{ setobjetivosGenerales(items(e.target.value))}} />
             </div>
             </div>  

             <div className="form-group row">
             <label for="nombre" className=" col-sm-2 col-form-label"> <strong>Objetivos Especificos</strong></label>
             <div className="col-sm-10">
             <input type="text" className="form-control" id="nombre" defaultValue={objetivosEspecificios} required onChange={(e)=>{ setobjetivosEspecificios(items(e.target.value))}} />
             </div>
             </div>  



             <div className="form-group row">
             <label for="nombre" className=" col-sm-2 col-form-label"> <strong>Fecha Inicio</strong></label>
             <div className="col-sm-10">
             <input type="date" className="form-control" id="nombre"  required onChange={(e)=>{ setfechaInicio(e.target.value)}} />
             </div>
             </div>  

             <div className="form-group row">
             <label for="nombre" className=" col-sm-2 col-form-label"> <strong>Fecha fin</strong></label>
             <div className="col-sm-10">
             <input type="date" className="form-control" id="nombre"  required onChange={(e)=>{ setfechaFin(e.target.value)}} />
             </div>
             </div>  

             <div className="form-group row">
             <label for="nombre" className=" col-sm-2 col-form-label"> <strong>Estado </strong></label>
             <div className="col-sm-10">
             <input type="text" className="form-control" id="nombre" defaultValue={estado} required  onChange={(e)=>{ setestado(e.target.value)}} />
             </div>
             </div>  

             <div className="form-group row">
             <label for="nombre" className=" col-sm-2 col-form-label"> <strong>Fase del Proyecto</strong></label>
             <div className="col-sm-10">
             <input type="text" className="form-control" id="nombre" defaultValue={faseProyecto} required onChange={(e)=>{ setfaseProyecto(e.target.value)}}/>
             </div>
             </div>  

             <div className="form-group row">
             <label for="nombre" className=" col-sm-2 col-form-label"> <strong>Inscritos </strong></label>
             <div className="col-sm-10">
             <input type="text" className="form-control" id="nombre" defaultValue={inscritos} disabled onChange={(e)=>{ setinscritos(items(e.target.value))}}/>
             </div>
             </div>  

             <div className="form-group row">
             <label for="nombre" className=" col-sm-2 col-form-label"> <strong>Avances </strong></label>
             <div className="col-sm-10">
             <input type="text" className="form-control" id="nombre" defaultValue={avances} disabled onChange={(e)=>{ setavances(items(e.target.value))}}/>
             </div>
             </div>  

             <div className="form-group row">
             <label for="nombre" className=" col-sm-2 col-form-label"> <strong>Lider </strong></label>
             <div className="col-sm-10">
             <input type="text" className="form-control" id="nombre" defaultValue={decoded._id} disabled value={decoded._id}  />
             </div>
             </div>  

             <button type="submit" className="btn btn-dark" >crear  💻 </button>
     
     
       
        </div>
        </form>
     
            
        </div>
    )
}

export default Page7
  