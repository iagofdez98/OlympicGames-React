package com.qindel.ReactReduxBack.entity;
import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "sede_jjoo")
//@IdClass(SedeOlympicID.class)
public @Data class SedeOlympicEntity implements Serializable {

    @EmbeddedId
    private SedeOlympicID id;

    @ManyToOne(cascade = CascadeType.ALL)
    @MapsId(value = "sede")
    @JoinColumn(name = "SEDE")
    private CiudadEntity sedeEntity;

    @ManyToOne(cascade = CascadeType.ALL)
    @ToString.Exclude
    @JoinColumn(name = "ID_TIPO_JJOO")
    private TipoOlympicEntity tipo;

}
