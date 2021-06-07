package com.qindel.ReactReduxBack.controller;

import com.qindel.ReactReduxBack.dto.CiudadDto;
import com.qindel.ReactReduxBack.service.ICiudadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@RequestMapping(value = "/ciudades")
public class CiudadController {

    //get /ciudades Optional requestParameters countryId
    //get /ciudades/{id} => detalle
    //post /ciudades => crear y actualizar
    //delete /ciudades/{id} => borrar

    @Autowired
    private ICiudadService ciudadService;

    @GetMapping()
    List<CiudadDto> getCiudadList(@RequestParam(name = "countryId", required = false) Integer countryId) {
        return ciudadService.getCiudadList(countryId);
    }

    @GetMapping("/{id}")
    CiudadDto getCiudadById(@PathParam("id") Integer id) {
        return ciudadService.getCiudadById(id);
    }

    @PostMapping
    CiudadDto upsertCiudad(@RequestBody CiudadDto ciudadDto){
        return ciudadService.upsertCiudad(ciudadDto);
    }

    @DeleteMapping("{id}")
    void deleteCiudadById(@PathVariable("id") Integer id){
        ciudadService.deleteCiudadById(id);
    }

}
