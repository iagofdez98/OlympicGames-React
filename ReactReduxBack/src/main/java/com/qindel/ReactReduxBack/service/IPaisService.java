package com.qindel.ReactReduxBack.service;


import com.qindel.ReactReduxBack.dto.PaisDto;
import com.qindel.ReactReduxBack.entity.PaisEntity;

import java.util.List;

public interface IPaisService {
    List<PaisDto> getPaisesList();

    PaisDto getPaisById(Integer id);

    PaisDto upsertPais(PaisDto paisDto);

    void deletePaisById(Integer id);
}
