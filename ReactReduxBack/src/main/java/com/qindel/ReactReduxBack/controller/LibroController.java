package com.qindel.ReactReduxBack.controller;

import com.qindel.ReactReduxBack.dto.LibroDTO;
import com.qindel.ReactReduxBack.dto.request.CrearLibroRequestDTO;
import com.qindel.ReactReduxBack.dto.response.CrearLibroResponseDTO;
import com.qindel.ReactReduxBack.service.ILibroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * The type Libro controller.
 * Endpoints expuestos para su uso. Este tipo de controlador debe mantenerse fuera de la lógica de negocio en la medida
 * de lo posible. Para ese tipo de funciones hace uso de servicios adecuados para dicha tarea.
 *
 * Se ha implementado un CRUD con las siguientes rutas y métodos:
 *  -GET /libros devuelve todos los libros
 *  -POST /libros crea un nuevo libro
 *  -PUT /libros/{id} modifica el libro con la ID indicada
 *  -DELETE /libros/{id} borra el libro con la ID indicada
 *
 * Se ha omitido el control de errores por malas peticiones completamente
 *
 * @author Martín Vázquez Torres
 */
@RestController
@RequestMapping(path = "/libros")
public class LibroController {

    @Autowired
    private ILibroService libroService;

    /**
     * Gets all libros.
     *
     * @return the all libros
     */
    @GetMapping(path = "")
    public @ResponseBody List<LibroDTO> getAllLibros() {
        return libroService.findAllLibros();
    }

    /**
     * Crea un libro a partir de autor y título
     * @param request DTO con autor y título
     * @return la ID del libro recien creado
     */
    @PostMapping(path = "")
    public @ResponseBody CrearLibroResponseDTO createLibro(@RequestBody CrearLibroRequestDTO request) {
        CrearLibroResponseDTO response = new CrearLibroResponseDTO();
        response.setLibroID(libroService.crearLibro(request));

        return response;
    }

    /**
     * Modificar libro.
     * "Reciclamos" el DTO de request de creacion
     *
     * @param request
     * @return el libro modificado
     */
    @PutMapping(path = "/{id}")
    public @ResponseBody
    LibroDTO modifyLibro(@PathVariable int id, @RequestBody CrearLibroRequestDTO request) {
        return libroService.modificarLibro(id, request);
    }


    /**
     * Borra un libro.
     *
     * @param id el libro a borrar
     * @return Status 200 OK
     */
    @DeleteMapping(path = "/{id}")
    public @ResponseBody
    ResponseEntity deleteLibro(@PathVariable int id) {
        CrearLibroResponseDTO response = new CrearLibroResponseDTO();
        libroService.borrar(id);

        return new ResponseEntity(HttpStatus.OK);
    }
}
