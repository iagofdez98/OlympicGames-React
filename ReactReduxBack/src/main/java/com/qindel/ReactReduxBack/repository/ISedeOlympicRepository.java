package com.qindel.ReactReduxBack.repository;

import com.qindel.ReactReduxBack.entity.SedeOlympicEntity;
import com.qindel.ReactReduxBack.entity.SedeOlympicID;

import com.qindel.ReactReduxBack.vo.IOlympicGames;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ISedeOlympicRepository extends JpaRepository<SedeOlympicEntity, SedeOlympicID> {

    @Query(value = "select pais.ID_PAIS as idPais, " +
            "       pais.NOMBRE_PAIS as nombrePais, " +
            "       ciudad.ID_CIUDAD as idCiudad, " +
            "       NOMBRE_CIUDAD as nombreCiudad, " +
            "       tj.DESCRIPCION_TIPO as descripcion, " +
            "       COALESCE(ciudad.VALOR_CIUDAD, pais.VALOR_PAIS) as valor, " +
            "       COUNT(sede_jjoo.SEDE) as veces " +
            " from ciudad " +
            "         left outer join pais on ciudad.ID_PAIS = pais.ID_PAIS " +
            "         left outer join sede_jjoo on ciudad.ID_CIUDAD = sede_jjoo.SEDE " +
            "         left outer join tipo_jjoo tj on sede_jjoo.ID_TIPO_JJOO = tj.ID_TIPO_JJOO " +
            " group by ciudad.ID_CIUDAD, pais.ID_PAIS, pais.NOMBRE_PAIS, " +
            " ciudad.ID_CIUDAD, ciudad.NOMBRE_CIUDAD, valor, tj.DESCRIPCION_TIPO ",
            nativeQuery = true)
    List<IOlympicGames> findByQueryVeces();

    SedeOlympicEntity findByIdAno(Integer id);
}
