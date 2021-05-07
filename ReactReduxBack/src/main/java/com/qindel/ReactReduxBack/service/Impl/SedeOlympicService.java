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

    public List<SedeOlympicDto> getSedes(){
        return sedeOlympicRepository.findAll()
                .stream().map(sedeOlympicMapper::toSedeOlympicDto)
                .collect(Collectors.toList());
    }

    public List<IOlympicGames> getJuegos(){
        return sedeOlympicRepository.findByQueryVeces();
    }

    public void addSedeOlympic(SedeOlympicDto s){
        sedeOlympicRepository.save(sedeOlympicMapper.toSedeOlympicEntity(s));
    }

    public void saveEntity(SedeOlympicEntity s){
        sedeOlympicRepository.save(s);
    }

    public void deleteSedeOlympicById(CiudadDto ciudad, Integer ano){
    SedeOlympicID sedeID = new SedeOlympicID();
    sedeID.setSede(ciudad.getId());
    sedeID.setAno(ano);
    sedeOlympicRepository.deleteById(sedeID);
    }

    public void deleteSedes() {
        sedeOlympicRepository.deleteAll();
    }

}
