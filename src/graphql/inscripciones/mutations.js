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

export {CREARUNAINSCRIPCION};
