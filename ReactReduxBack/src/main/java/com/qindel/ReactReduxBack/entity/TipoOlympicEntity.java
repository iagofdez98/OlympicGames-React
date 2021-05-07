package com.qindel.ReactReduxBack.entity;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "tipo_jjoo")
public @Data class TipoOlympicEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_TIPO_JJOO")
    private Integer id;

    @Column(name = "DESCRIPCION_TIPO")
    private String tipo;

}
