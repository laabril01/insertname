import React from 'react'
import { Link } from 'react-router-dom'

/* MODULO GESTION INSCRIPCIONES sera para los lideres unicamente */

const Page6 = () => {


    return (
        <div className="bodyy">

            <span> soy la pagina 6</span>
            <Link to="/"> link para Index</Link>


<form id="formData" name="formData" /* onSubmit={handleSubmit} */ > 
         
    <div className="TablaProyecto col-sm-6 was-validated  ">

        <div className="form-group row">
        <label for="nombre" className=" col-form-label"> <strong>nombre</strong></label>
        <div className="col-sm-10">
        <input type="text" className="form-control" id="nombre" defaultValue="" required />
        </div>
        </div>  

        <div className="form-group row">
        <label for="nombre" className=" col-form-label"> <strong>presupuesto</strong></label>
        <div className="col-sm-10">
        <input type="number" className="form-control" id="nombre" defaultValue="" required />
        </div>
        </div> 

        <div className="form-group row">
        <label for="nombre" className=" col-form-label"> <strong>presupuesto</strong></label>
        <div className="col-sm-10">
        <input type="number" className="form-control" id="nombre" defaultValue="" required />
        </div>
        </div>  


  
   </div>
   </form>
     
            
        </div>
    )
}

export default Page6
  