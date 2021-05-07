package com.qindel.ReactReduxBack.service;

import com.qindel.ReactReduxBack.dto.CiudadDto;
import com.qindel.ReactReduxBack.dto.SedeOlympicDto;
import com.qindel.ReactReduxBack.entity.SedeOlympicEntity;
import com.qindel.ReactReduxBack.vo.IOlympicGames;

import java.util.List;

public interface ISedeOlympicService {
    List<SedeOlympicDto> getSedes();
    void addSedeOlympic(SedeOlympicDto sedeOlympicDto);
    void saveEntity(SedeOlympicEntity sedeOlympicEntity);
    void deleteSedeOlympicById(CiudadDto ano, Integer id);
    void deleteSedes();
    List<IOlympicGames> getJuegos();
}
