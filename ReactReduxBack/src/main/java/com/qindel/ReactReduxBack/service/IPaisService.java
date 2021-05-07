package com.qindel.ReactReduxBack.service;


import com.qindel.ReactReduxBack.dto.PaisDto;
import com.qindel.ReactReduxBack.entity.PaisEntity;

import java.util.List;

public interface IPaisService {
    List<PaisDto> getPaises();

    void saveDto(PaisDto paisDto);

    void saveEntity(PaisEntity paisEntity);

    void deletePaisById(Integer id);

    void deletePaises();
}
