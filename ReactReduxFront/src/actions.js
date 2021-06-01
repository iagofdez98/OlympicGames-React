// Este archivo contiene exportables de actions y action creators de Redux
import api from "./api";


// ACTIONS
export const BUSCAR_LIBROS = "BUSCAR_LIBROS";
export const ADD_LIBRO = "ADD_LIBRO";

export const BUSCAR_AGRUPACION = "BUSCAR_AGRUPACION";

export const BUSCAR_PAISES = "BUSCAR_PAISES";
export const ADD_PAIS = "ADD_PAIS";
export const DELETE_PAIS = "DELETE_PAIS";

export const BUSCAR_CIUDADES = "BUSCAR_CIUDADES";
export const ADD_CIUDAD = "ADD_CIUDAD";

export const BUSCAR_SEDES = "BUSCAR_SEDES";
export const ADD_SEDE = "ADD_SEDE";

export const CIUDADES_PAIS = 'CIUDADES_PAIS';

// ACTION CREATORS
export const buscarLibros = () => ({
  type: BUSCAR_LIBROS,
  promise: api.buscarLibros(),
})

export const addLibro = (autor, titulo) => ({
  type: ADD_LIBRO,
  promise: api.addLibro(autor, titulo),
})

export const buscarAgrupacion = () => ({
  type: BUSCAR_AGRUPACION,
  promise: api.buscarAgrupacion(),
})

export const buscarPaises = () => ({
  type: BUSCAR_PAISES,
  promise: api.buscarPaises(),
})

export const addPais = (nombre, codigo, valor) => ({
  type: ADD_PAIS,
  promise: api.addPais(nombre, codigo, valor),
})

export const deletePais = (id) => ({
  type: DELETE_PAIS,
  promise: api.deletePais(id),
})

export const buscarCiudades = () => ({
  type: BUSCAR_CIUDADES,
  promise: api.buscarCiudades(),
})

export const addCiudad = (pais, nombre, valor) => ({
  type: ADD_CIUDAD,
  promise: api.addCiudad(pais, nombre, valor),
})

export const ciudadesPais = (id) => ({
  type: CIUDADES_PAIS,
  promise: api.ciudadesPais(id)
})

export const buscarSedes = () => ({
  type: BUSCAR_SEDES,
  promise: api.buscarSedes(),
})

export const addSede = (ano, sede, tipo) => ({
type: ADD_SEDE,
promise: api.addSede(ano, sede, tipo),
})