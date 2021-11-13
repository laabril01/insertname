import React from 'react'
import { useState} from 'react'
import {useUser} from "../Context/user"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/Page2.css';

/* MODULO GESTION USUARIOS login */

const Page2 = () => {
  
    const [NOMBRE, setNOMBRE] = useState("")
    const [APELLIDO, setAPELLIDO] = useState("")
    const [EMAIL, setEMAIL] = useState("")
    const [DNI, setDNI] = useState(0)
    const [PASSWORD, setPASSWORD] = useState("")
    const [usuario, setusuario] = useState()
    
    const notify = () => toast("Se envio la informacion 🐱‍💻" , usuario); 
   

    const handleSubmit = (event) => 
    {
      console.log(usuario);
      event.preventDefault();
      notify()
    }
   
    


    

    return (
        <div className="bodyy">
         <span>/* MODULO GESTION USUARIOS registro */</span>

          
      
<div className="registro col-sm-6">
          <form onSubmit={handleSubmit} className="was-validated">
          
              <span className="h2"> REGISTRO</span> <br /> <br /> <br /> <br />
              
    <div className="form-group row">
    <label for="NOMBRE" className="col-sm-2 col-form-label">Nombre</label>
    <div className="col-sm-4">
      <input type="text" className="form-control" id="NOMBRE" placeholder="InsertName"  required onChange={(e)=>{ setNOMBRE(e.target.value)}}/>
    </div>
    <label for="Apellido" className="col-sm-2 col-form-label">Apellido</label>
    <div className="col-sm-4">
      <input type="text" className="form-control" id="Apellido" placeholder="Apellido" required onChange={(e)=>{ setAPELLIDO(e.target.value)}}/>
    </div>
    </div>

  <div className="form-group row ">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Email@algo.com" required onChange={(e)=>{ setEMAIL(e.target.value)}}/>
    </div>
  </div>

    <div className="form-group row ">
    <label for="DNI" className="col-sm-2 col-form-label">DNI</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="DNI" placeholder="DNI" required onChange={(e)=>{ setDNI(e.target.value)}}/>
    </div>
    </div>

  <div className="form-group row">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" placeholder="Password" required onChange={(e)=>{ setPASSWORD(e.target.value)}}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" placeholder="Again Password" required/>
    </div>
  </div>

    <br /> <br /> 
  <div className="form-group">
    <div className="row col-6">
      <button type="submit" className="btn btn-dark" 
      onClick = { ()=> setusuario({
        "nombre": NOMBRE,
        "apellido": APELLIDO,
        "email": EMAIL,
        "dni":DNI,
        "password": PASSWORD,
        "rol": "Null",
        "estado": "NoAutorizado",
        }) } >Registro  💻 </button>
      <ToastContainer position="bottom-center" hideProgressBar={true} autoClose={1600}/>
    </div>
  </div>
 

</form>
</div>



            
</div>

       
    

        
    )
}

export default Page2
  