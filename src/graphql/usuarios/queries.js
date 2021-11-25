import { gql } from '@apollo/client';

const obtenerUsuarios =  gql`
query Usuarios {
  Usuarios {
    _id
    clave
    correo
    estado
    identificacion
    nombreCompleto
    tipoUsuario
  }
}
`


const obtenerOneUsuario =  gql`
query Usuarios($_id: ID!) {
  Usuarios(_id: $_id) {
    _id
    correo
    identificacion
    nombreCompleto
    clave
    tipoUsuario
    estado
  }
}
`




export {obtenerUsuarios , obtenerOneUsuario}