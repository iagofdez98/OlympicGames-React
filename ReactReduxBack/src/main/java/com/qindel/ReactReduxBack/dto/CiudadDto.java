package com.qindel.ReactReduxBack.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public @Data class CiudadDto {
    private Integer id;
    private PaisDto pais;
    private String nombre;
    private Integer valor;
}
