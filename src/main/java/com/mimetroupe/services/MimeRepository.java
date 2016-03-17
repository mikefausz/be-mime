package com.mimetroupe.services;

import com.mimetroupe.entities.Mime;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by branden on 3/17/16 at 14:13.
 *
 * This repository will communicate our Mime Object with the DB
 * Methods in here will be created to return custom DB queries
 *
 */
public interface MimeRepository extends CrudRepository<Mime, Integer>{
    Mime findByUserName(String userName);




}
