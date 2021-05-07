package com.qindel.ReactReduxBack.entity;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "pais")
public @Data class PaisEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_PAIS")
    private Integer id;

    @Column(name = "NOMBRE_PAIS")
    private String nombre;

    @Column(name = "CODIGO_PAIS")
    private String codigo;

    @Column(name = "VALOR_PAIS")
    private int valor;

    @OneToMany(mappedBy = "pais")
    private List<CiudadEntity> ciudades;

}
