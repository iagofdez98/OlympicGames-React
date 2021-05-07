package com.qindel.ReactReduxBack.service.Impl;

import com.qindel.ReactReduxBack.entity.PaisEntity;
import com.qindel.ReactReduxBack.mappers.PaisMapper;
import com.qindel.ReactReduxBack.repository.IPaisRepository;
import com.qindel.ReactReduxBack.service.IPaisService;
import com.qindel.ReactReduxBack.dto.PaisDto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Transactional
@Service
public class PaisService implements IPaisService {

    @Autowired
    private IPaisRepository paisRepository;

    @Autowired
    private PaisMapper paisMapper;

    public List<PaisDto> getPaises(){
        return paisRepository.findAll()
                .stream().map(paisMapper::toPaisDto)
                .collect(Collectors.toList());
    }

    public void saveDto(PaisDto p){
        paisRepository.save(paisMapper.toPaisEntity(p));
    }

    public void saveEntity(PaisEntity p){ paisRepository.save(p);}

    public void deletePaisById(Integer id){
        paisRepository.deleteById(id);
    }

    public void deletePaises() {
        paisRepository.deleteAll();
    }
}
