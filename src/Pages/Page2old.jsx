import React from 'react'
import { useState,useEffect } from 'react'
import {useUser} from "../Context/user"
import { Link } from 'react-router-dom'

/* MODULO GESTION USUARIOS login */

const Page2 = () => {


    const {GlobalData,setGlobalData} = useUser();
    const [input1, setinput1] = useState()
    const [input2, setinput2] = useState()
    

    
   
   
    
    useEffect(() => {

        console.log("global tiene ", GlobalData)
        console.log("global tiene ", setGlobalData)
      
    }, [])



    return (
        <div>
     

            <Link to="/page1"> link para page 1</Link>

            
<span>
<div className="h1"> Lista De Proyectos</div>

{/* <table class="table table-hover view overlay zoom"> */}
 


{GlobalData.map((x) => {
return( 

            
            <button type="button" className="list-group-item list-group-item-action" onClick = { ()=>  console.log("asdf")}>Nombre: {x.nombre} Descripcion: {x.descripcion}</button>
)
        })}

</span>

           
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Crear un proyecto
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content bg-light">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Crear Nuevo Proyecto</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div className="modal-body  text-center">
        <label htmlFor="">Nombre del Espacio de Trabajo</label> <br />
       
        <input type="text" placeholder="nombre del proyecto" onChange={(e)=>{ setinput1(e.target.value)}} /><br /><br />
        <br />
        <label htmlFor="">Descripción del Espacio de Trabajo</label> <br />
        <input type="text" placeholder="descripcion del proyecto" onChange={(e)=>{ setinput2(e.target.value)}} />
      </div>
      <div className="modal-footer">
        
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal"  onClick = { ()=> setGlobalData([...GlobalData,{nombre:input1 , descripcion:input2} ]) } >Create the new project</button>
      </div>
    </div>
  </div>
</div>
 



            
        </div>
    )
}

export default Page2
  