import React from 'react'
import '../Styles/Page4.css';
import { useEffect , useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { useMutation, useQuery } from '@apollo/client';
import { obtenerOneUsuario } from '../graphql/usuarios/queries';
import { EDITARUSUARIO } from '../graphql/usuarios/mutations';

/* MODULO GESTION PROYECTOS  */


const Page4 = () => {
    


    const notify = () => toast("La Info de usuario Fue Editada OK!!! 🐱‍💻" ); 
  
    const{_id} = useParams()

    const {data:getData,error:getError,loading:getLoading} = useQuery(obtenerOneUsuario,{
        variables:{_id}
    })

    

    const [editarUsuario,{data:patchData,error:patchError,loading:patchLoading}] = useMutation(EDITARUSUARIO)

    useEffect (()=>{    console.log(getData , "los datos del USUARIO")    },[getData])
    useEffect (()=>{    console.log(patchData , "los datos de edicion son ")    },[patchData])

    const [correo, setcorreo] = useState()
    const [identificacion, setidentificacion] = useState()
    const [nombreCompleto, setnombreCompleto] = useState()
    const [clave, setclave] = useState()
    const [tipoUsuario, settipoUsuario] = useState()
    const [estado, setestado] = useState()

    const handleSubmit = (event) => 
    {

    event.preventDefault();

      editarUsuario({
          variables:{
              id:_id,
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




    if(getError) return <div> error al obtener info  .........</div>
    if(getLoading) return <div> cargando informacion .........</div>
    if(_id == null) return <div> No deberia estar aqui, esta es una ruta dinamica.........</div>




    return (
        <div className="bodyy">
            

            <span> soy la pagina 4</span>
            <Link to="/page3"> link Atras</Link>
            <span className="h4"> /* MODULO GESTION Usuarios perfil*/</span><br />

           
<form id="formData" name="formData" onSubmit={handleSubmit} > 
         
<div className="TablaPerfil col-sm-6 was-validated  ">

  <div className="form-group row  ">
      <div className="h1"> <i className="fas fa-user"></i></div>
      <div className="h4">Perfil del usuario N° { _id} </div>
        <label for="nombreCompleto" className=" col-form-label"> <strong>nombreCompleto</strong></label>
        <div className="col-sm-10">
        <input type="text" className="form-control" id="nombreCompleto" defaultValue={getData.Usuarios[0].nombreCompleto} onChange={(e)=>{ setnombreCompleto(e.target.value)}} required />
        </div>  

        <label for="correo" className=" col-form-label"> <strong>Correo</strong></label>
        <div className="col-sm-10">
        <input type="email" className="form-control" id="correo" name="correo" defaultValue={getData.Usuarios[0].correo} onChange={(e)=>{ setcorreo(e.target.value)}} required />
        </div>

        <label for="clave" className=" col-form-label"> <strong>Clave</strong></label>
        <div className="col-sm-10">
        <input type="password" className="form-control" id="clave" nombre="clave"  defaultValue={getData.Usuarios[0].clave} onChange={(e)=>{ setclave(e.target.value)}} required />
        </div>

        <label for="Estado" className="col-form-label"> <strong>Estado</strong></label>
        <div className="col-sm-4">
        <select className="form-control" id="Estado" name="input" onChange={(e) => (setestado(e.target.value))}>
        <option selected disabled value={getData.Usuarios[0].estado}>{getData.Usuarios[0].estado}</option>
        <option value="Pendiente">Pendiente</option>
        <option value="Autorizado">Autorizado</option>
        <option value="NoAutorizado">NoAutorizado</option>
        </select>
        </div>

        <label for="Identificacion" className="col-form-label"> <strong>Identificacion</strong></label>
        <div className="col-sm-10">
        <input type="text" className="form-control" id="Identificacion" defaultValue={getData.Usuarios[0].identificacion} onChange={(e)=>{ setidentificacion(e.target.value)}} required />
        </div>
        
        <label for="TipoUsuario" className="col-form-label"> <strong>TipoUsuario</strong></label>
        <div className="col-sm-10">
        <input type="text" className="form-control" id="TipoUsuario" defaultValue={getData.Usuarios[0].tipoUsuario} onChange={(e)=>{ settipoUsuario(e.target.value)}} disabled />
        </div>
        
        
        <button type="sumbit" value="Submit!" className="btn btn-dark col-sm-6" onClick = { ()=> console.log("boton click hi") }>Actualizar datos  💻 </button>
        <ToastContainer position="bottom-center" hideProgressBar={true} autoClose={1600}/>






  </div>
   </div>
   </form>
    </div>
    )
}

export default Page4
  