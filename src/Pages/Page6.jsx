import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect} from 'react'
import { useMutation ,useQuery } from '@apollo/client'
import { OBTENERUNPROYECTO } from '../graphql/proyectos/queries'
import { EDITAPROYECTO } from '../graphql/proyectos/mutations'

/* MODULO GESTION INSCRIPCIONES sera para los lideres unicamente */

const Page6 = () => {

    const{_id} = useParams()

    
    const { data, error, loading } = useQuery(OBTENERUNPROYECTO,{
        variables:{
            id:_id
        }
    });


    const [editaProyecto,{data:patchData,error:patchError,loading:patchLoading}] = useMutation( EDITAPROYECTO )


    useEffect (()=>{  

      
        console.log(data)

    },[error , data])



    const [nombre, setnombre] = useState()
    const [presupuesto, setpresupuesto] = useState()
    const [objetivosGenerales, setobjetivosGenerales] = useState()
    const [objetivosEspecificios, setobjetivosEspecificios] = useState()
    const [fechaInicio, setfechaInicio] = useState()
    const [fechaFin, setfechaFin] = useState()
    const [estado, setestado] = useState()
    const [faseProyecto, setfaseProyecto] = useState()
    const [inscritos, setinscritos] = useState()
    const [avances, setavances] = useState()
    const [lider, setlider] = useState()

  

   



    const handleSubmit = (event) => 
    {
      
      event.preventDefault(); 
        console.log("nombre" , nombre )
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


        editaProyecto({
            variables:{
                id: _id,
                nombre: nombre,
                presupuesto: presupuesto,
                objetivosGenerales: objetivosGenerales,
                objetivosEspecificos: objetivosEspecificios,
                fechaInicio: fechaInicio,
                fechaFin: fechaFin,
                estado: estado,
                faseProyecto: faseProyecto,
                inscritos: inscritos,
                avances: avances,
                lider: lider
            }
        })

        

    
    }

    if(loading) return <div> cargando informacion .........</div>

    return (
        <div className="bodyy">

            <span> soy la pagina 6</span>
            <Link to="/Page5"> link para atras </Link>


            <form id="formData" name="formData" onSubmit={handleSubmit}  > 
         
         <div className="TablaEditarProyecto col-sm-6 was-validated  ">
     
             <div className="form-group row">
             <label for="nombre" className=" col-sm-2 col-form-label"> <strong>Nombre Proyecto</strong></label>
             <div className="col-sm-10">
             <input type="text" className="form-control" id="nombre"   defaultValue={data.Proyectos[0].nombre} onChange={(e)=>{ setnombre(e.target.value)}} />
             </div>
             </div> 

    
     
             <div className="form-group row">
             <label for="nombre" className="col-sm-2 col-form-label"> <strong>Presupuesto</strong></label>
             <div className="col-sm-10">
             <input type="number" className="form-control" id="nombre"  defaultValue={data.Proyectos[0].presupuesto} required onChange={(e)=>{ setpresupuesto(e.target.value)}} />
             </div>
             </div> 
     
             <div className="form-group row">
             <label for="nombre" className=" col-sm-2 col-form-label"> <strong>Objetivos Generales </strong></label>
             <div className="col-sm-10">
             <input type="array" className="form-control" id="nombre" defaultValue={data.Proyectos[0].objetivosGenerales}  required onChange={(e)=>{ setobjetivosGenerales(e.target.value)}} />
             </div>
             </div>  

             <div className="form-group row">
             <label for="nombre" className=" col-sm-2 col-form-label"> <strong>Objetivos Especificos</strong></label>
             <div className="col-sm-10">
             <input type="text" className="form-control" id="nombre" defaultValue={data.Proyectos[0].objetivosEspecificos} required onChange={(e)=>{ setobjetivosEspecificios(e.target.value)}} />
             </div>
             </div>  



             <div className="form-group row">
             <label for="nombre" className=" col-sm-2 col-form-label"> <strong>Fecha Inicio</strong></label>
             <div className="col-sm-10">
             <input type="text" className="form-control" id="nombre"  required defaultValue={data.Proyectos[0].fechaInicio } onChange={(e)=>{ setfechaInicio(e.target.value)}} />
             </div>
             </div>  

             <div className="form-group row">
             <label for="nombre" className=" col-sm-2 col-form-label"> <strong>Fecha fin</strong></label>
             <div className="col-sm-10">
             <input type="text" className="form-control" id="nombre"  required  defaultValue={data.Proyectos[0].fechaFin} onChange={(e)=>{ setfechaFin(e.target.value)}} />
             </div>
             </div>  

             <div className="form-group row">
             <label for="nombre" className=" col-sm-2 col-form-label"> <strong>Estado </strong></label>
             <div className="col-sm-10">
             <input type="text" className="form-control" id="nombre" defaultValue={data.Proyectos[0].estado}  required  onChange={(e)=>{ setestado(e.target.value)}} />
             </div>
             </div>  

             <div className="form-group row">
             <label for="nombre" className=" col-sm-2 col-form-label"> <strong>Fase del Proyecto</strong></label>
             <div className="col-sm-10">
             <input type="text" className="form-control" id="nombre" defaultValue={data.Proyectos[0].faseProyecto}  required onChange={(e)=>{ setfaseProyecto(e.target.value)}}/>
             </div>
             </div>  

             <div className="form-group row">
             <label for="nombre" className=" col-sm-2 col-form-label"> <strong>Inscritos </strong></label>
             <div className="col-sm-10">
             <input type="text" className="form-control" id="nombre" defaultValue={data.Proyectos[0].inscritos} disabled onChange={(e)=>{ setinscritos(e.target.value)}}/>
             </div>
             </div>  

             <div className="form-group row">
             <label for="nombre" className=" col-sm-2 col-form-label"> <strong>Avances </strong></label>
             <div className="col-sm-10">
             <input type="text" className="form-control" id="nombre" defaultValue={data.Proyectos[0].avances} disabled onChange={(e)=>{ setavances(e.target.value)}}/>
             </div>
             </div>  

             <div className="form-group row">
             <label for="nombre" className=" col-sm-2 col-form-label"> <strong>Lider </strong></label>
             <div className="col-sm-10">
             <input type="text" className="form-control" id="nombre" defaultValue={data.Proyectos[0].lider._id} disabled   />
             </div>
             </div>  

             <button type="submit" className="btn btn-dark" > EDITAR!!  💻 </button>
     
     
       
        </div>
        </form>
     
            
        </div>
    )
}

export default Page6
  