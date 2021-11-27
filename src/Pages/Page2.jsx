import React from 'react'
import { useState, useEffect} from 'react'
import {useUser} from "../Context/user"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/Page2.css';
import { CREARREGISTRO } from '../graphql/usuarios/mutations';
import { useMutation, useQuery } from '@apollo/client';

/* MODULO GESTION USUARIOS login */

const Page2 = () => {

  const [CrearUsuario,{data:patchData,error:patchError,loading:patchLoading}] = useMutation(CREARREGISTRO)

  useEffect (()=>{  console.log(patchData , "los datos creados son ") },[patchData])

  
  
  const [correo, setcorreo] = useState()
  const [identificacion, setidentificacion] = useState()
  const [nombreCompleto, setnombreCompleto] = useState()
  const [clave, setclave] = useState()
  const [tipoUsuario, settipoUsuario] = useState()
  const [estado, setestado] = useState()
    
    const notify = () => toast("Se envio la informacion 🐱‍💻" ); 
   

    const handleSubmit = (event) => 
    {
      
      event.preventDefault();
      CrearUsuario({
        variables:{
            correo:correo,
            identificacion:identificacion,
            nombreCompleto:nombreCompleto,
            clave:clave,
            tipoUsuario:tipoUsuario,
            estado:estado   
        }
    })

      
      notify()
    }
   
    


    if(patchError) return <div> Datos duplicados o erroneos{window.location.reload}</div>

    return (
        <div className="bodyy">
         <span>/* MODULO GESTION USUARIOS registro */</span>

          
      
<div className="registro col-sm-6">
          <form onSubmit={handleSubmit} className="was-validated">
          
              <span className="h2"> REGISTRO</span> <br /> <br /> <br /> <br />
              
    <div className="form-group row">
    <label for="NOMBRE" className="col-sm-2 col-form-label">Nombre Completo</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="NOMBRE" placeholder="InsertName"  required onChange={(e)=>{ setnombreCompleto(e.target.value)}}/>
    </div>
    </div>

  <div className="form-group row ">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Email@algo.com" required onChange={(e)=>{ setcorreo(e.target.value)}}/>
      <div id="validationServerUsernameFeedback" class="invalid-feedback">
        No es posible registrar correos repetidos 
      </div>
    </div>
  </div>

    <div className="form-group row ">
    <label for="DNI" className="col-sm-2 col-form-label">Identificacion</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="DNI" placeholder="DNI" required onChange={(e)=>{ setidentificacion(e.target.value)}}/>
    </div>
    </div>

  <div className="form-group row">
    <label for="inputPassword5" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword5" placeholder="Password" required onChange={(e)=>{ setclave(e.target.value)}}/>
    </div>
  </div>



  <div className="form-group row">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Tipo De Usuario</label>
    <div className="col-sm-5">

    <select className="form-control" id="Estado" name="input" required onChange={(e) => (settipoUsuario(e.target.value))}>
        <option  selected Value="Estudiante" disabled >Seleccione Su Rol</option>
        <option Value="Estudiante">Lider</option>
        <option value="Lider">Estudiante</option>
        </select>
        <small id="inputPassword3" >
      Por defecto Estudiante si no selecciona :D 
    </small>
  
      
    </div>
  </div>

    <br /> <br /> 
  <div className="form-group">
    <div className="row col-6">
      <button type="submit" className="btn btn-dark" 
      onClick = { ()=> ((console.log("click"))) } >Registro  💻 </button>
      <ToastContainer position="bottom-center" hideProgressBar={true} autoClose={1600}/>
    </div>
  </div>
 

</form>
</div>



            
</div>

       
    

        
    )
}

export default Page2
  