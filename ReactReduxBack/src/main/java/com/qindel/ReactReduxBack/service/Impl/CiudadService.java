package com.qindel.ReactReduxBack.service.Impl;

import com.qindel.ReactReduxBack.dto.CiudadDto;
import com.qindel.ReactReduxBack.dto.PaisDto;
import com.qindel.ReactReduxBack.entity.CiudadEntity;
import com.qindel.ReactReduxBack.mappers.CiudadMapper;
import com.qindel.ReactReduxBack.mappers.PaisMapper;
import com.qindel.ReactReduxBack.repository.ICiudadRepository;
import com.qindel.ReactReduxBack.repository.IPaisRepository;
import com.qindel.ReactReduxBack.service.ICiudadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static java.util.Objects.nonNull;

@Service
@Transactional
public class CiudadService implements ICiudadService {

    @Autowired
    private ICiudadRepository ciudadRepository;

    @Autowired
    private IPaisRepository paisRepository;

    @Autowired
    private CiudadMapper ciudadMapper;

    @Override
    public List<CiudadDto> getCiudadList(Integer countryId) {
        List<CiudadEntity> ciudadEntityList = null;

        if (nonNull(countryId)) {
            ciudadEntityList = this.ciudadRepository.findByPais_Id(countryId);
        } else {
            ciudadEntityList = this.ciudadRepository.findAll();
        }

        return ciudadEntityList
                .stream()
                .map(ciudadMapper::toCiudadDto)
                .collect(Collectors.toList());
    }

    @Override
    public CiudadDto getCiudadById(Integer id) {
        final CiudadDto ciudadDto = ciudadMapper.toCiudadDto(
                ciudadRepository.findById(id)
        .orElseThrow(() -> new EntityNotFoundException()));

        return ciudadDto;
    }

    @Override
    public CiudadDto upsertCiudad(CiudadDto ciudadDto) {
        CiudadEntity ciudadEntity = null;

        if(nonNull(paisRepository.findById(ciudadDto.getPais().getId()))) {
            ciudadEntity = ciudadRepository.save(ciudadMapper.toCiudadEntity(ciudadDto));
        }

        return ciudadMapper.toCiudadDto(ciudadEntity);
    }

    @Override
    public void deleteCiudadById(Integer id) {
        final CiudadEntity ciudadEntity = ciudadRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException());
        ciudadRepository.delete(ciudadEntity);
    }

    //
//
//    public List<CiudadDto> getCiudades(){
//        return ciudadRepository.findAll()
//                .stream().map(ciudadMapper::toCiudadDto)
//                .collect(Collectors.toList());
//    }
//
//    public List<CiudadDto> getCiudadesPorPais(Integer p){
//        return ciudadRepository.findCiudadEntitiesByPais_Id(p)
//                .stream().map(ciudadMapper::toCiudadDto)
//                .collect(Collectors.toList());
//    }
//
//    public void saveDto(CiudadDto s){
//        ciudadRepository.save(ciudadMapper.toCiudadEntity(s));
//    }
//
//    public void saveEntity(CiudadEntity s){
//        ciudadRepository.save(s);
//    }
//
//    public void deleteCiudadById(Integer id){
//        ciudadRepository.deleteById(id);
//    }
//
//    public void deleteCiudades() {
//        ciudadRepository.deleteAll();
//    }
}
