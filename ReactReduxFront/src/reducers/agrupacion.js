import { successType, requestType } from '../utils';
import { BUSCAR_AGRUPACION } from "../actions";

const initialState = {
  cargando: false,
  todos: [],
}

 export default function sedes(state = initialState, { type, payload, data }) {
    switch (type) {
      case requestType(BUSCAR_AGRUPACION):
      case successType(BUSCAR_AGRUPACION):
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