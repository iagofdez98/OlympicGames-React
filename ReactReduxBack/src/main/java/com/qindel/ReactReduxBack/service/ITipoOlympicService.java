package com.qindel.ReactReduxBack.service;

import com.qindel.ReactReduxBack.dto.TipoOlympicDto;
import com.qindel.ReactReduxBack.entity.TipoOlympicEntity;

import java.util.List;

public interface ITipoOlympicService {
    List<TipoOlympicDto> getTipos();
    void saveDto(TipoOlympicDto tipoOlympicDto);
    void saveEntity(TipoOlympicEntity tipoOlympicEntity);
    void deleteTipoById(Integer id);
    void deleteTipos();
}
