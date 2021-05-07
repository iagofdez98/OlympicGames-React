import { successType, requestType } from '../utils';
import { BUSCAR_CIUDADES, ADD_CIUDAD, CIUDADES_PAIS } from "../actions";

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
export default function ciudades(state = initialState, { type, payload, data }) {
  switch (type) {
    case requestType(BUSCAR_CIUDADES):
    case requestType(ADD_CIUDAD):
      return (
        {
          ...state,
          cargando: true,
        }
      )
      case requestType(CIUDADES_PAIS):
        return (
          {
            ...state,
            cargando: true,
          }
        )
    case successType(BUSCAR_CIUDADES):
      return (
        {
          ...state,
          todos: data,
          cargando: false,
        }
      )
    case successType(ADD_CIUDAD):
      return (
        {
          ...state,
          todos: data,
          cargando: false,
        }
      )
      case successType(CIUDADES_PAIS):
        return (
          {
            ...state,
            relacion: data.data,
            cargando: false,
          }
        )
    default:
      return state
  }
}