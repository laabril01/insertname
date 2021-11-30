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







export { obtenerProyectosLite }