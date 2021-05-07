package com.qindel.ReactReduxBack.service;


import com.qindel.ReactReduxBack.dto.CiudadDto;

import java.util.List;

public interface ICiudadService {


    List<CiudadDto> getCiudadList(Integer countryId);

    CiudadDto getCiudadById(Integer id);

    CiudadDto upsertCiudad(CiudadDto ciudadDto);

    void deleteCiudadById(Integer id);

}
