package com.mimetroupe.entities;

import org.hibernate.annotations.Cascade;

import javax.persistence.*;

/**
 * Created by branden on 3/17/16 at 13:56.
 *
 * This Class is defined to map a Mime (user) to a admimerer (also of type Mime)
 * admimerer is a Mime that the original Mime(User) has a mime interest in.
 *
 */
@Entity
public class Admimerer {

    @Id
    @GeneratedValue
    int id;

    @ManyToOne
    private Mime mime;

    @ManyToOne
    private Mime admimerer;


    public Admimerer() {
    }

    public Admimerer(Mime mime, Mime admimerer) {
        this.mime = mime;
        this.admimerer = admimerer;
    }

    public Mime getMime() {
        return mime;
    }

    public void setMime(Mime mime) {
        this.mime = mime;
    }

    public Mime getAdmimerer() {
        return admimerer;
    }

    public void setAdmimerer(Mime admimerer) {
        this.admimerer = admimerer;
    }
}