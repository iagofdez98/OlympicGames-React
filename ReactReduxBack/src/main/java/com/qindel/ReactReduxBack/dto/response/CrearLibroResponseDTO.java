package com.qindel.ReactReduxBack.dto.response;

import java.io.Serializable;

/**
 * The type Crear libro response dto.
 *
 * @author Martín Vázquez Torres
 */
public class CrearLibroResponseDTO implements Serializable {

    private static final long serialVersionUID = -1112387381949175644L;

    /**
     * ID del libro recién creado
     */
    private int libroID;

    /**
     * Instantiates a new Crear libro response dto.
     */
    public CrearLibroResponseDTO() {
    }

    /**
     * Instantiates a new Crear libro response dto.
     *
     * @param libroID the new libro id
     */
    public CrearLibroResponseDTO(int libroID) {
        this.libroID = libroID;
    }

    /**
     * Gets new libro id.
     *
     * @return the new libro id
     */
    public int getLibroID() {
        return libroID;
    }

    /**
     * Sets new libro id.
     *
     * @param libroID the new libro id
     */
    public void setLibroID(int libroID) {
        this.libroID = libroID;
    }
}
