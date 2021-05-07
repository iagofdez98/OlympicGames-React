package com.qindel.ReactReduxBack.controller;

import com.qindel.ReactReduxBack.dto.PaisDto;
import com.qindel.ReactReduxBack.service.IPaisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/paises")
public class PaisController {

    @Autowired
    private IPaisService service;

    @GetMapping
    List<PaisDto> getPaises(){
        return service.getPaises();
    }

    @PostMapping
    void addPaisOlympic(@RequestBody PaisDto ol){
        service.saveDto(ol);
    }

    @DeleteMapping("/{id}")
    void deleteSedeOlympic(Integer id){
        service.deletePaisById(id);
    }

    @DeleteMapping("/deleteAll")
    void deleteSedeOlympic(){
        service.deletePaises();
    }
}
