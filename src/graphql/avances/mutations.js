import { gql } from "@apollo/client";




const CREARAVANCE = gql`
mutation Mutation($proyecto: String, $fechaAvance: String, $descripcion: String, $observacionesLider: String) {
  crearAvance(proyecto: $proyecto, fechaAvance: $fechaAvance, descripcion: $descripcion, observacionesLider: $observacionesLider) {
    _id
  }
}
`;

export {CREARAVANCE};
