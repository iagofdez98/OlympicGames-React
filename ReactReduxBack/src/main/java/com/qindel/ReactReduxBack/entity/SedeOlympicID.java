package com.qindel.ReactReduxBack.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public @Data class SedeOlympicID implements Serializable {

    @Column(name = "AÑO")
    private Integer ano;

    @Column(name = "SEDE")
    private Integer sede;
}
