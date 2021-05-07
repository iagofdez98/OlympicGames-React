package com.qindel.ReactReduxBack.service.Impl;

import com.qindel.ReactReduxBack.dto.LibroDTO;
import com.qindel.ReactReduxBack.dto.request.CrearLibroRequestDTO;
import com.qindel.ReactReduxBack.entity.LibroEntity;
import com.qindel.ReactReduxBack.repository.ILibroRepository;
import com.qindel.ReactReduxBack.service.ILibroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

/**
 * The type Libro service.
 * Implementación de la interfaz del servicio de libros.
 * Hace uso de repositorios, clases auxiliares etc, para aplicar la lógica de negocio y operar sobre la BD
 *
 * @author Martín Vázquez Torres
 */
@Service
@Transactional
public class LibroServiceImpl implements ILibroService {

    @Autowired
    private ILibroRepository libroRepository;

    @Override
    public List<LibroDTO> findAllLibros() {
        List<LibroEntity> libros = libroRepository.findAll();

        // Una vez recuperados los libros podríamos relegar el trabajo del mapeo Entidad->DTO a una clase auxiliar o
        // librería externa. Debido a la poca complejidad de este caso, no se ha implementado tal cosa

        List<LibroDTO> resultado = new ArrayList<>();
        for (LibroEntity libro : libros) {
            resultado.add(new LibroDTO(libro.getIdLibro(), libro.getTitulo(), libro.getAutor()));
        }

        return resultado;
    }

    @Override
    public int crearLibro(CrearLibroRequestDTO req) {
        LibroEntity nuevoLibro = new LibroEntity();

        // Como en el método anterior, este trabajo podría ser cosa de una clase auxiliar o librería externa.
        // Lo dejamos así por lo simple del caso en cuestión

        nuevoLibro.setAutor(req.getAutor());
        nuevoLibro.setTitulo(req.getTitulo());

        // Al guardar se nos devuelve la entidad con la nueva ID autogenerada
        return libroRepository.save(nuevoLibro).getIdLibro();
    }

    @Override
    public LibroDTO modificarLibro(int id, CrearLibroRequestDTO req) {
        LibroEntity toModify = libroRepository.findById(id).get();
        toModify.setTitulo(req.getTitulo());
        toModify.setAutor(req.getAutor());
        libroRepository.save(toModify);

        return new LibroDTO(toModify.getIdLibro(), toModify.getTitulo(),toModify.getAutor());
    }

    @Override
    public void borrar(int id) {
        libroRepository.delete(libroRepository.findById(id).get());
    }
}
