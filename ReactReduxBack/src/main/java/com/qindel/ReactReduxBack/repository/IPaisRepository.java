package com.qindel.ReactReduxBack.repository;

import com.qindel.ReactReduxBack.entity.PaisEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPaisRepository extends JpaRepository<PaisEntity, Integer> {

}