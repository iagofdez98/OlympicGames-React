package com.qindel.ReactReduxBack.repository;

import com.qindel.ReactReduxBack.entity.TipoOlympicEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITipoOlympicRepository extends JpaRepository<TipoOlympicEntity, Integer> {
}
