package com.qindel.ReactReduxBack.dto;


import java.io.Serializable;

/**
 * The type Libro dto.
 * Representa un libro para frontend, de manera que solo expongamos al mismo solamente los datos que consideramos
 * necesarios.
 * En el caso de Libro, esto es algo bastante trivial, puesto que no supone cambio alguno respecto a su entidad, pero
 * nunca deja de ser una buena práctica
 *
 * @author Martín Vázquez Torres
 */
public class LibroDTO implements Serializable {

    private static final long serialVersionUID = 41661589458838006L;

    private int id;
    private String titulo;
    private String autor;

    /**
     * Instantiates a new Libro dto.
     */
    public LibroDTO() {
    }

    /**
     * Instantiates a new Libro dto.
     *
     * @param idLibro the id libro
     * @param titulo  the titulo
     * @param autor   the autor
     */
    public LibroDTO(int idLibro, String titulo, String autor) {
        this.id = idLibro;
        this.titulo = titulo;
        this.autor = autor;
    }

    /**
     * Gets id libro.
     *
     * @return the id libro
     */
    public int getId() {
        return id;
    }

    /**
     * Sets id libro.
     *
     * @param id the id libro
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * Gets titulo.
     *
     * @return the titulo
     */
    public String getTitulo() {
        return titulo;
    }

    /**
     * Sets titulo.
     *
     * @param titulo the titulo
     */
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    /**
     * Gets autor.
     *
     * @return the autor
     */
    public String getAutor() {
        return autor;
    }

    /**
     * Sets autor.
     *
     * @param autor the autor
     */
    public void setAutor(String autor) {
        this.autor = autor;
    }
}
