package com.qindel.ReactReduxBack.controller;

import com.qindel.ReactReduxBack.dto.CiudadDto;
import com.qindel.ReactReduxBack.dto.PaisDto;
import com.qindel.ReactReduxBack.dto.SedeOlympicDto;
import com.qindel.ReactReduxBack.service.IPaisService;
import com.qindel.ReactReduxBack.service.ISedeOlympicService;

import com.qindel.ReactReduxBack.vo.IOlympicGames;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/sedes")
public class SedeOlympicController {

    @Autowired
    private ISedeOlympicService service;

    @GetMapping("/agrupacion")
    List<IOlympicGames> juegos(){
        return service.getJuegos();
    }

    @GetMapping
    List<SedeOlympicDto> getSedes(){
        return service.getSedes();
    }

    @PostMapping
    void addSedeOlympic(@RequestBody SedeOlympicDto ol){
        service.addSedeOlympic(ol);
    }

    @DeleteMapping("/{id}")
    void deleteSedeOlympic(CiudadDto ciudad, Integer ano){
        service.deleteSedeOlympicById(ciudad, ano);
    }

    @DeleteMapping("/deleteAll")
    void deleteSedeOlympic(){
        service.deleteSedes();
    }
}
