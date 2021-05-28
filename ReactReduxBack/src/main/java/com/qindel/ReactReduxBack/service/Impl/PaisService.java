package com.qindel.ReactReduxBack.service.Impl;

import com.qindel.ReactReduxBack.entity.PaisEntity;
import com.qindel.ReactReduxBack.mappers.PaisMapper;
import com.qindel.ReactReduxBack.repository.IPaisRepository;
import com.qindel.ReactReduxBack.service.IPaisService;
import com.qindel.ReactReduxBack.dto.PaisDto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

import static java.util.Objects.nonNull;

@Transactional
@Service
public class PaisService implements IPaisService {

    @Autowired
    private IPaisRepository paisRepository;

    @Autowired
    private PaisMapper paisMapper;

    @Override
    public List<PaisDto> getPaisesList(){
        List<PaisEntity> paisEntityList = this.paisRepository.findAll();

        return paisEntityList
                .stream()
                .map(paisMapper::toPaisDto)
                .collect(Collectors.toList());
    }

    @Override
    public PaisDto getPaisById(Integer id) {
        final PaisDto paisDto = paisMapper.toPaisDto(
                paisRepository.findById(id)
                        .orElseThrow(() -> new EntityNotFoundException()));

        return paisDto;
    }

    @Override
    public PaisDto upsertPais(PaisDto paisDto) {
        PaisEntity paisEntity = null;

        if(nonNull(paisRepository.findById(paisDto.getId()))){
            paisEntity = paisRepository.save(paisMapper.toPaisEntity(paisDto));
        }

        return paisMapper.toPaisDto(paisEntity);
    }

    public void deletePaisById(Integer id){
        final PaisEntity paisEntity = paisRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException());

        paisRepository.delete(paisEntity);
    }
}
