package com.qindel.ReactReduxBack.mappers;

import com.qindel.ReactReduxBack.dto.TipoOlympicDto;
import com.qindel.ReactReduxBack.entity.TipoOlympicEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface TipoOlympicMapper {

    @Mapping(source = "id", target = "id")
    @Mapping(source = "tipo", target = "tipo")
    TipoOlympicDto toTipoOlympicDto(TipoOlympicEntity t);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "tipo", target = "tipo")
    TipoOlympicEntity toTipoOlympicEntity(TipoOlympicDto t);
}
