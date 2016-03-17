package com.mimetroupe.entities;

import javax.persistence.*;

/**
 * Created by branden on 3/17/16 at 13:56.
 *
 * This Class is defined to map a Mime (user) to a Admimerer (also of type Mime)
 * Admimerer is a Mime that the original Mime(User) has a mime interest in.
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