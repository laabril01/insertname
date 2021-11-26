import { gql } from "@apollo/client";

const EDITARUSUARIO = gql`
  mutation editarUsuario(
    $id: ID!
    $correo: String
    $identificacion: String
    $nombreCompleto: String
    $clave: String
    $tipoUsuario: String
    $estado: String
  ) {
    editarUsuario(
      _id: $id
      correo: $correo
      identificacion: $identificacion
      nombreCompleto: $nombreCompleto
      clave: $clave
      tipoUsuario: $tipoUsuario
      estado: $estado
    ) {
    _id
    clave
    correo
    estado
    identificacion
    nombreCompleto
    tipoUsuario
    }
  }
`;

export {EDITARUSUARIO}