package com.mimetroupe.services;

import com.mimetroupe.entities.Mime;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by branden on 3/17/16 at 14:13.
 *
 * This repository will communicate our Mime Object with the DB
 * Methods in here will be created to return custom DB queries
 *
 */
public interface MimeRepository extends CrudRepository<Mime, Integer>{
    Mime findByUserName(String userName);

    @Query(value = "SELECT * FROM Mime WHERE user_name <> ?1", nativeQuery = true)
    List<Mime> findAllWhereUserNameNot(String userName);

}
