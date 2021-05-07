import { successType, requestType } from '../utils';
import { BUSCAR_SEDES, ADD_SEDE } from "../actions";

const initialState = {
  cargando: false,
  todos: [],
}

 export default function sedes(state = initialState, { type, payload, data }) {
    switch (type) {
      case requestType(BUSCAR_SEDES):
      case requestType(ADD_SEDE):
        return (
          {
            ...state,
            cargando: true,
          }
        )
      case successType(BUSCAR_SEDES):
        return (
          {
            ...state,
            todos: data,
            cargando: false,
          }
        )
      case successType(ADD_SEDE):
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