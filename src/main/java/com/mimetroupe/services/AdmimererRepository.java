package com.mimetroupe.services;

import com.mimetroupe.entities.Admimerer;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by branden on 3/17/16 at 14:17.
 *
 * This repository deals with the Admimerer table which connects mimes to their mime matches
 * methods in here will return custom DB queries
 */
public interface AdmimererRepository extends CrudRepository<Admimerer, Integer> {



}
