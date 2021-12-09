import { gql } from "@apollo/client";

const CREARUNPROYECTO = gql`
  mutation crearProyecto(
    $nombre: String
    $presupuesto: Float
    $objetivosGenerales: [String]
    $objetivosEspecificos: [String]
    $fechaInicio: String
    $fechaFin: String
    $estado: String
    $faseProyecto: String
    $inscritos: [String]
    $avances: [ID]
    $lider: ID
  ) {
    crearProyecto(
      nombre: $nombre
      presupuesto: $presupuesto
      objetivosGenerales: $objetivosGenerales
      objetivosEspecificos: $objetivosEspecificos
      fechaInicio: $fechaInicio
      fechaFin: $fechaFin
      estado: $estado
      faseProyecto: $faseProyecto
      inscritos: $inscritos
      avances: $avances
      lider: $lider
    ) {
      _id
      nombre
    }
  }
`;

const EDITAPROYECTO = gql`
  mutation editaProyecto(
    $id: ID!
    $nombre: String
    $presupuesto: Float
    $objetivosGenerales: [String]
    $objetivosEspecificos: [String]
    $fechaInicio: String
    $fechaFin: String
    $estado: String
    $faseProyecto: String
    $inscritos: [String]
    $avances: [ID]
    $lider: ID
  ) {
    editarProyecto(
      _id: $id
      nombre: $nombre
      presupuesto: $presupuesto
      objetivosGenerales: $objetivosGenerales
      objetivosEspecificos: $objetivosEspecificos
      fechaInicio: $fechaInicio
      fechaFin: $fechaFin
      estado: $estado
      faseProyecto: $faseProyecto
      inscritos: $inscritos
      avances: $avances
      lider: $lider
    ) {
      _id
    }
  }
`;

const ELIMINARPROYECTO = gql`
  mutation EliminarProyecto($id: ID!) {
    eliminarProyecto(_id: $id) {
      _id
    }
  }
`;

const EDITAPROYECTOINSC = gql`
  mutation EditarProyectoINSC($id: ID!, $inscritos: [String]) {
    editarProyectoINSC(_id: $id, inscritos: $inscritos) {
      _id
    }
  }
`;

const EDITAPROYECTOAVAN = gql`
mutation EditarProyectoAVAN($avances: [ID], $id: ID!) {
  editarProyectoAVAN(avances: $avances, _id: $id) {
    _id
  }
}
`;

export { CREARUNPROYECTO, EDITAPROYECTO, ELIMINARPROYECTO, EDITAPROYECTOINSC,EDITAPROYECTOAVAN };
