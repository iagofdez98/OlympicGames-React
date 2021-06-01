package com.qindel.ReactReduxBack.service;

import com.qindel.ReactReduxBack.dto.CiudadDto;
import com.qindel.ReactReduxBack.dto.SedeOlympicDto;
import com.qindel.ReactReduxBack.vo.IOlympicGames;

import java.util.List;

public interface ISedeOlympicService {
    List<SedeOlympicDto> getSedesList();
    void upsertSedeOlympic(SedeOlympicDto sedeOlympicDto);
    void deleteSedeOlympicById(CiudadDto ano, Integer id);
    List<IOlympicGames> getOlympicGamesList();
}
