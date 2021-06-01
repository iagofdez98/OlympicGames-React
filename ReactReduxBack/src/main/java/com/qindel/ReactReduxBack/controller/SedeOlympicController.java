package com.qindel.ReactReduxBack.controller;

import com.qindel.ReactReduxBack.dto.CiudadDto;
import com.qindel.ReactReduxBack.dto.SedeOlympicDto;
import com.qindel.ReactReduxBack.service.ISedeOlympicService;

import com.qindel.ReactReduxBack.vo.IOlympicGames;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/sedes")
public class SedeOlympicController {

    @Autowired
    private ISedeOlympicService service;

    @GetMapping("/agrupacion")
    List<IOlympicGames> getOlympicGamesList(){
        return service.getOlympicGamesList();
    }

    @GetMapping
    List<SedeOlympicDto> getSedesList(){
        return service.getSedesList();
    }

    @PostMapping
    void upsertSedeOlympic(@RequestBody SedeOlympicDto ol){
        service.upsertSedeOlympic(ol);
    }

    @DeleteMapping("/{id}")
    void deleteSedeOlympic(CiudadDto ciudad, Integer ano){
        service.deleteSedeOlympicById(ciudad, ano);
    }
}
