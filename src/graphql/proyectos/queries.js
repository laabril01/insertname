import { gql } from '@apollo/client';

const obtenerProyectosLite =  gql`
query obtenerProyectos {
  Proyectos {
    _id
    nombre
    estado
    faseProyecto
    lider {
      correo
      nombreCompleto
    }
  }
}
`

const OBTENERUNPROYECTO = gql`
  query obtenerUnProyecto($id: ID) {
  Proyectos(_id: $id) {
    _id
    nombre
    presupuesto
    objetivosGenerales
    objetivosEspecificos
    fechaInicio
    fechaFin
    estado
    faseProyecto
    inscritos {
      _id
    }
    lider {
      _id
    }
      
    
    avances {
      _id
      
    }
  }
}
`;


const TRAERPROYECTOLITE = gql`
 query Query($filtro: ID) {
  ProyectosLite(filtro: $filtro) {
    _id
    nombre
    inscritos {
      _id
    }
    estado
    faseProyecto
    lider {
      correo
      nombreCompleto
    }
    avances {
      descripcion
    }
  }
}
`;







export { obtenerProyectosLite, OBTENERUNPROYECTO,TRAERPROYECTOLITE }