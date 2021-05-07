package com.qindel.ReactReduxBack.vo;

import lombok.Data;

public @Data class OlympicGamesVO implements IOlympicGames{

    private int idPais;
    private String nombrePais;
    private Integer idCiudad;
    private String nombreCiudad;
    private int valor;
    private String descripcion;
    private int veces;

}
