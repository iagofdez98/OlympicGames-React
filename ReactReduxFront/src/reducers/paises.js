import { successType, requestType } from '../utils';
import { BUSCAR_PAISES, ADD_PAIS, DELETE_PAIS } from "../actions";

const initialState = {
  cargando: false,
  todos: [],
}

/**
 * Los reducers consisten, básicamente, en funciones que dados un estado y una acción devuelven un estado NUEVO. 
 * Con énfasis en el NUEVO, porque si vamos a tocarlo NUNCA debemos devolver el anterior. Esto se llama principio de
 * inmutabilidad. Conviene repasar el operador de propagación "..." si no se comprende con claridad este código.
 * Siempre que se trate con el estado de Redux u el estado local, es una buena práctica usar el operador de 
 * propagación aunque cambiemos el estado en su totalidad o este solo tenga un atributo
 */
export default function libros(state = initialState, { type, payload, data }) {
  switch (type) {
    case requestType(BUSCAR_PAISES):
    case requestType(ADD_PAIS):
      return (
        {
          ...state,
          cargando: true,
        }
      )
    case successType(BUSCAR_PAISES):
      return (
        {
          ...state,
          todos: data,
          cargando: false,
        }
      )
    case successType(ADD_PAIS):
      return (
        {
          ...state,
          todos: data,
          cargando: false,
        }
      )
    case successType(DELETE_PAIS):
      return (
        {
          ...state,
          todos: data,
          cargando: false,
        }
      )
    default:
      return state
  }
}