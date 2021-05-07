package com.qindel.ReactReduxBack.service.Impl;

import com.qindel.ReactReduxBack.dto.TipoOlympicDto;
import com.qindel.ReactReduxBack.entity.TipoOlympicEntity;
import com.qindel.ReactReduxBack.mappers.TipoOlympicMapper;
import com.qindel.ReactReduxBack.repository.ITipoOlympicRepository;
import com.qindel.ReactReduxBack.service.ITipoOlympicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class TipoOlympicService implements ITipoOlympicService {

    @Autowired
    private ITipoOlympicRepository tipoOlympicRepository;

    @Autowired
    private TipoOlympicMapper tipoOlympicMapper;

    public List<TipoOlympicDto> getTipos(){
        return tipoOlympicRepository.findAll()
                .stream().map(tipoOlympicMapper::toTipoOlympicDto)
                .collect(Collectors.toList());
    }

    public void saveDto(TipoOlympicDto t){ tipoOlympicRepository.save(tipoOlympicMapper.toTipoOlympicEntity(t)); }

    public void saveEntity(TipoOlympicEntity t) {
         tipoOlympicRepository.save(t);
    }

    public void deleteTipoById(Integer id){
        tipoOlympicRepository.deleteById(id);
    }

    public void deleteTipos() {
        tipoOlympicRepository.deleteAll();
    }

}
