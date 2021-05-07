package com.qindel.ReactReduxBack.entity;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "ciudad")
public @Data class CiudadEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_CIUDAD")
    private Integer id;

    @ToString.Exclude
    @ManyToOne
    @JoinColumn(name = "ID_PAIS")
    private PaisEntity pais;

    @Column(name = "NOMBRE_CIUDAD")
    private String nombre;

    @Column(name = "VALOR_CIUDAD")
    private Integer valor;

}
