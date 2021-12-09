import { gql } from "@apollo/client";

const CREARUNAINSCRIPCION = gql`
  mutation CrearInscripcion(
    $proyecto: String
    $estudiante: String
    $estado: String
    $fechaIngreso: String
    $fechaEgreso: String
  ) {
    crearInscripcion(
      proyecto: $proyecto
      estudiante: $estudiante
      estado: $estado
      fechaIngreso: $fechaIngreso
      fechaEgreso: $fechaEgreso
    ) {
      _id
    }
  }
`;


const ELIMINARINSCRIPCION = gql`
mutation EliminarInscripcion($id: ID!) {
  eliminarInscripcion(_id: $id) {
    _id
  }
}
`;


const EDITARINSCRIPCION = gql`
mutation EditarInscripcion($id: ID!, $estado: String) {
  editarInscripcion(_id: $id, estado: $estado) {
    _id
    estado
    proyecto {
      _id
    }
  }
}
`;

export {CREARUNAINSCRIPCION,ELIMINARINSCRIPCION,EDITARINSCRIPCION};
