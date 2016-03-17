package com.mimetroupe.services;//Created by KevinBozic on 3/17/16.

import com.mimetroupe.entities.Mime;
import org.springframework.data.repository.CrudRepository;

public interface MimeRepository extends CrudRepository<Mime, Integer> {
}
