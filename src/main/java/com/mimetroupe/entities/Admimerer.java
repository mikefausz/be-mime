package com.mimetroupe.entities;

import javax.persistence.*;

/**
 * Created by branden on 3/17/16 at 13:56.
 */
@Entity
public class Admimerer {

    @Id
    @GeneratedValue
    int id;

    @ManyToOne
    private Mime mime;

    @ManyToOne
    private Mime Admimerer;

    public Admimerer() {
    }


    public Mime getMime() {
        return mime;
    }

    public void setMime(Mime mime) {
        this.mime = mime;
    }

    public Mime getAdmimerer() {
        return Admimerer;
    }

    public void setAdmimerer(Mime admimerer) {
        Admimerer = admimerer;
    }
}