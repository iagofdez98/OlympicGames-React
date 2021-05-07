package com.qindel.ReactReduxBack.dto.request;

import java.io.Serializable;

/**
 * The type Crear libro request dto.
 *
 * @author Martín Vázquez Torres
 */
public class CrearLibroRequestDTO implements Serializable {

    private static final long serialVersionUID = 4027566609222693486L;

    private String titulo;
    private String autor;

    /**
     * Instantiates a new Crear libro request dto.
     */
    public CrearLibroRequestDTO() {
    }

    /**
     * Instantiates a new Crear libro request dto.
     *
     * @param titulo the titulo
     * @param autor  the autor
     */
    public CrearLibroRequestDTO(String titulo, String autor) {
        this.titulo = titulo;
        this.autor = autor;
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
