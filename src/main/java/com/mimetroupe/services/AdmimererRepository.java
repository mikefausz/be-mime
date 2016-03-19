package com.mimetroupe.services;

import com.mimetroupe.entities.Admimerer;
import com.mimetroupe.entities.Mime;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Set;

/**
 * Created by branden on 3/17/16 at 14:17.
 *
 * This repository deals with the Admimerer table which connects mimes to their mime matches
 * methods in here will return custom DB queries
 */
public interface AdmimererRepository extends CrudRepository<Admimerer, Integer> {


    //SELECT admimerer_ID FROM admimerer WHERE mime_id = ?
    //returns all mimes that a specific mime admimers.
    List<Mime> findAdmimererByMime(Mime mime);

    //SELECT admimerer_Id FROM admimerer WHERE admimerer_id = mime_id
    List<Mime> findMimeByAdmimerer(Mime mime);

//    @Query(value = "DELETE FROM admimerer WHERE mime_id = ?1 AND admimerer_id = ?1"  ,nativeQuery = true)
//    Set<Mime> deleteCascade(int id);



}
