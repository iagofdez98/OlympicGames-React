package com.qindel.ReactReduxBack.controller;

import com.qindel.ReactReduxBack.dto.PaisDto;
import com.qindel.ReactReduxBack.service.IPaisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@RequestMapping(value = "/paises")
public class PaisController {

    @Autowired
    private IPaisService service;

    @GetMapping
    List<PaisDto> getPaisesList(){
        return service.getPaisesList();
    }

    @GetMapping("{id}")
    void getPaisById(@PathVariable("id") Integer id){
        service.getPaisById(id);
    }

    @PostMapping
    void upsertPais(@RequestBody PaisDto paisDto){
        service.upsertPais(paisDto);
    }

    @DeleteMapping("{id}")
    void deletePaisById(@PathVariable("id") Integer id){
        service.deletePaisById(id);
    }
}
