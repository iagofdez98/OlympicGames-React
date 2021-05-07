package com.qindel.ReactReduxBack.service;


import com.qindel.ReactReduxBack.dto.LibroDTO;
import com.qindel.ReactReduxBack.dto.request.CrearLibroRequestDTO;

import java.util.List;

/**
 * The interface Libro service.
 * Interfaz del servicio, la cual será usada por los diversos controladores si es necesario.
 * Dividir servicios y su implementación también es una buena práctica devido a su reusabilidad
 *
 * @author Martín Vázquez Torres
 */
public interface ILibroService {

    /**
     * Find all libros list.
     *
     * @return the list
     */
    List<LibroDTO> findAllLibros();

    /**
     * Crear libro int.
     *
     * @param req the req
     * @return the int
     */
    int crearLibro(CrearLibroRequestDTO req);

    /**
     * Modificar libro int.
     *
     * @param id  the id
     * @param req the req
     * @return the int
     */
    LibroDTO modificarLibro(int id, CrearLibroRequestDTO req);

    /**
     * Borra un libro con la id indicada
     * @param id id del libro a borrar
     */
    void borrar(int id);
}
