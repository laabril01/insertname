import { gql } from '@apollo/client';





const OBTENERINSCRIPCION =  gql`
query Inscripciones($id: ID) {
  Inscripciones(_id: $id) {
    _id
    proyecto {
      _id
      nombre
    }
    estudiante {
      _id
      nombreCompleto
    }
    estado
    fechaIngreso
    fechaEgreso
  }
}
`




export {OBTENERINSCRIPCION }