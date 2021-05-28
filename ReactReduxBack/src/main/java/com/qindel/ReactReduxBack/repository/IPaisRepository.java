package com.qindel.ReactReduxBack.repository;

import com.qindel.ReactReduxBack.entity.PaisEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IPaisRepository extends JpaRepository<PaisEntity, Integer> {

    List<PaisEntity> findPaisEntityById(Integer id);
}