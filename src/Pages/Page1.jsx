import React from 'react'
import { useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import '../Styles/Page1.css';

/* MODULO GESTION USUARIOS Registro */

const Page1 = () => {
    


    const [EMAIL, setEMAIL] = useState("")
    const [PASSWORD, setPASSWORD] = useState("")
    const [usuario, setusuario] = useState()
    
    const notify = () => toast("Logeando usuario 🖳" ); 
   

    const handleSubmit = (event) => 
    {
      console.log(usuario);
      event.preventDefault();
      notify()
    }
   
    

    return (
        <div>
<div className="bodyy">
            <span>/* MODULO GESTION USUARIOS login */</span><br /> <br /> <br /> <br /> <br /> 


            <div className="login col-sm-5">
                
          <form onSubmit={handleSubmit} className="was-validated">
          
          
          
              <span className="h2"> <img src="https://i.imgur.com/d215U6l.png" className="img-fluid " alt="Responsive image"/> Log In </span> <br /> <br /> <br /> 
              
 
 

  <div className="form-group row ">
    <label for="inputEmail3" className="col-sm-2 col-form-label"> <strong>Email</strong></label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" placeholder=" 📧 Email@algo.com" required onChange={(e)=>{ setEMAIL(e.target.value)}}/>
    </div>
  </div>


  <div className="form-group row">
    <label for="inputPassword3" className="col-sm-2 col-form-label">  <strong>Password</strong></label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" placeholder="🔑 password" required onChange={(e)=>{ setPASSWORD(e.target.value)}}/>
    </div>
  </div>
  <span>¿Olvidó su nombre de usuario o contraseña?</span>


    <br /> <br /> 
  <div className="form-group">
    <div className="row col-6">
      <button type="submit" className="btn btn-dark" 
      onClick = { ()=> setusuario({
        "email": EMAIL,
        "password": PASSWORD,
        }) } > <div className="h3"> ACCEDER </div>   </button>
      <ToastContainer position="bottom-center" hideProgressBar={true} autoClose={1600}/>
    </div>
    
  </div>
 

</form>
</div>





        
            </div> 
        </div>
    )
}

export default Page1
