package com.qindel.ReactReduxBack.repository;

import com.qindel.ReactReduxBack.entity.CiudadEntity;
import com.qindel.ReactReduxBack.entity.PaisEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICiudadRepository extends JpaRepository<CiudadEntity, Integer> {

    List<CiudadEntity> findByPais_Id(Integer p);
}
