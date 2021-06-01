package com.qindel.ReactReduxBack.service.Impl;

import com.qindel.ReactReduxBack.dto.CiudadDto;
import com.qindel.ReactReduxBack.dto.SedeOlympicDto;
import com.qindel.ReactReduxBack.entity.SedeOlympicEntity;
import com.qindel.ReactReduxBack.entity.SedeOlympicID;
import com.qindel.ReactReduxBack.mappers.SedeOlympicMapper;
import com.qindel.ReactReduxBack.repository.ISedeOlympicRepository;
import com.qindel.ReactReduxBack.service.ISedeOlympicService;
import com.qindel.ReactReduxBack.vo.IOlympicGames;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class SedeOlympicService implements ISedeOlympicService {

    @Autowired
    private ISedeOlympicRepository sedeOlympicRepository;

    @Autowired
    private SedeOlympicMapper sedeOlympicMapper;

    public List<SedeOlympicDto> getSedesList(){
        List<SedeOlympicEntity> sedeOlympicEntityList = this.sedeOlympicRepository.findAll();

        return sedeOlympicEntityList
                .stream()
                .map(sedeOlympicMapper::toSedeOlympicDto)
                .collect(Collectors.toList());
    }

    public List<IOlympicGames> getOlympicGamesList(){
        return sedeOlympicRepository.findByQueryVeces();
    }

    public void upsertSedeOlympic(SedeOlympicDto s){
        sedeOlympicRepository.save(sedeOlympicMapper.toSedeOlympicEntity(s));
    }

    public void deleteSedeOlympicById(CiudadDto ciudad, Integer ano){
        SedeOlympicID sedeID = new SedeOlympicID();
        sedeID.setSede(ciudad.getId());
        sedeID.setAno(ano);

        SedeOlympicEntity sedeOlympicEntity = sedeOlympicRepository.findById(sedeID)
                .orElseThrow(() -> new EntityNotFoundException());

        sedeOlympicRepository.delete(sedeOlympicEntity);
    }

}
