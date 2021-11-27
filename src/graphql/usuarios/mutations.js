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

const CREARUSUARIO = gql`
  mutation CrearUsuario(
    $correo: String
    $identificacion: String
    $nombreCompleto: String
    $clave: String
    $tipoUsuario: String
  ) {
    crearUsuario(
      correo: $correo
      identificacion: $identificacion
      nombreCompleto: $nombreCompleto
      clave: $clave
      tipoUsuario: $tipoUsuario
    ) {
      _id
      correo
      identificacion
      nombreCompleto
      clave
      tipoUsuario
      estado
    }
  }
`;

const CREARREGISTRO = gql`
  mutation CrearRegistro(
    $correo: String
    $identificacion: String
    $nombreCompleto: String
    $clave: String
    $tipoUsuario: String
    $estado: String
  ) {
    crearRegistro(
      correo: $correo
      identificacion: $identificacion
      nombreCompleto: $nombreCompleto
      clave: $clave
      tipoUsuario: $tipoUsuario
      estado: $estado
    ) {
      token
      error
    }
  }
`;

export { EDITARUSUARIO, CREARUSUARIO , CREARREGISTRO };
