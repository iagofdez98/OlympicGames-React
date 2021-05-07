package com.qindel.ReactReduxBack.entity;

import javax.persistence.*;
import java.io.Serializable;

/**
 * The type Libro entity.
 * Representa un Libro en BD. Es el único mapping presente en este ejercicio. El resto de entidades deben ser mapeadas
 * por quien lo realice
 *
 * @author Martín Vázquez Torres
 */
@Entity
@Table(name = "LIBRO")
public class LibroEntity implements Serializable {

    private static final long serialVersionUID = -188820847331484731L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_libro")
    private int idLibro;

    @Column(name = "titulo")
    private String titulo;

    @Column(name = "autor")
    private String autor;

    /**
     * Instantiates a new Libro entity.
     */
    public LibroEntity() {
    }


    /**
     * Gets id libro.
     *
     * @return the id libro
     */
    public int getIdLibro() {
        return idLibro;
    }

    /**
     * Sets id libro.
     *
     * @param idLibro the id libro
     */
    public void setIdLibro(int idLibro) {
        this.idLibro = idLibro;
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
