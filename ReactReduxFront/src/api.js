/**
 * Aqui se condensan las llamadas a backend, para ser usadas en los action creators de redux.
 * Si el archivo llegara a crecer demasiado, podría subdividirse por las entidades que se acceden 
 * en backend 
 */ 

/**
 * Las funciones que retornen llamadas ejecutadas con axios están retornando promesas realmente, no 
 * los datos en sí. Ojo con la naturaleza asíncrona de JavaScript
 * 
 * Promesas en JavaScript
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise
 */
import axios from 'axios';

// Configurable
const baseRestUrl = 'http://localhost:8080';

/**
 * Devuelve todos los libros en BD
 */
const buscarLibros = () => {
  return axios.get(
    `${baseRestUrl}/libros`
  )
  .then(data => data.data)
}

/**
 * Crea un nuevo libro. Después, si tiene éxito, ejecuta la misma consulta que buscarLibros 
 * para devolver de nuevo todos los libros en BD
 * @param {String} autor 
 * @param {String} titulo
 * 
 * Requests encadenadas con axios
 * https://github.com/axios/axios/issues/708
 */
const addLibro = (autor, titulo) => {
  return axios.post(
    `${baseRestUrl}/libros`,
    {
      autor,
      titulo,
    }
  )
  .then(
    data => axios.get(
      `${baseRestUrl}/libros`
    ).then(data => data.data))
}

/**
 * Devuelve todas los sedes en BD
 */
 const buscarSedes = () => {
  return axios.get(
    `${baseRestUrl}/sedes/agrupacion`
  )
  .then(data => data.data)
}

/**
 * Crea un nuevo sede. Después, si tiene éxito, ejecuta la misma consulta que buscarSede 
 * para devolver de nuevo todos los Sedes en BD
 * Requests encadenadas con axios
 * https://github.com/axios/axios/issues/708
 */
 const addSede = (nombrePais,
  nombreCiudad, valor, descripcion) => {
  return axios.post(
    `${baseRestUrl}/sedes`,
    {
      nombrePais, 
      nombreCiudad, 
      valor, 
      descripcion, 
    }
  )
  .then(
    data => axios.get(
      `${baseRestUrl}/sedes/agrupacion`
    ).then(data => data.data))
}

/**
 * Devuelve todas los sedes en BD
 */
 const buscarPaises = () => {
  return axios.get(
    `${baseRestUrl}/paises`
  )
  .then(data => data.data)
}

/*
Crea nuevo pais.
*/
const addPais = (nombre, codigo, valor) => {
  return axios.post(
    `${baseRestUrl}/paises`,
    {
      nombre, 
      codigo, 
      valor,
    }
  )
  .then(
    data => axios.get(
      `${baseRestUrl}/paises`
    ).then(data => data.data))
}


/**
 * Devuelve todas los ciudades en BD
 */
 const buscarCiudades = () => {
  return axios.get(
    `${baseRestUrl}/ciudades`
  )
  .then(data => data.data)
}

/*
Crea nuevo pais.
*/
const addCiudad = (pais, nombre, valor) => {
  return axios.post(
    `${baseRestUrl}/ciudades`,
    {
      pais, 
      nombre, 
      valor,
    }
  )
  .then(
    data => axios.get(
      `${baseRestUrl}/ciudades`
    ).then(data => data.data))
}

/*
Lista de ciudades por pais.
*/
const ciudadesPais = (id) => {
  return axios.get(
    `${baseRestUrl}/ciudades?countryId=${id}`,
  )
}


export default {
  buscarLibros,
  addLibro,
  buscarSedes,
  addSede,
  buscarPaises,
  addPais,
  buscarCiudades,
  addCiudad,
  ciudadesPais,
}

