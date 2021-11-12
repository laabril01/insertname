import React from 'react'
import { Link } from 'react-router-dom'

/* MODULO GESTION PROYECTOS  */


const Page4 = () => {


    return (
        <div className="bodyy">

            <span> soy la pagina 4</span>
            <Link to="/"> link para Index</Link>
            <span className="h2"> /* MODULO GESTION PROYECTOS*/</span><br />

            <li>listar proyectos</li>
            <li>unirse proyectos</li>
            <li>re dirige a gestion de avences para cada proyecto</li> <br />
     
            <span>proyecto : id unica , nombre del proyecto, objetivos generales, objetivos especificos, presupuesto, fecha de inicio y terminacion, lider, estado(a o i) , fase (iniciado , proceso , terminado)
             </span>
        </div>
    )
}

export default Page4
  