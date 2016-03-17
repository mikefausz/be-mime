package com.mimetroupe.entities;

import javax.persistence.*;

/**
 * Created by branden on 3/17/16 at 13:29.
 */
@Entity
public class Mime {

    @Id
    @GeneratedValue
    private int id;

    @Column(nullable = false)
    private String userName;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String fullName;

    @Column(nullable = false)
    private int age;

    @Column(nullable = false)
    private String imageUrl;

    @Column(nullable = false)
    private String profileVideoUrl;

    @Column(nullable = false)
    private String interests;

    @Column(nullable = false)
    private String city;

    @Column(nullable = false)
    private String state;

    @Column(nullable = false)
    private String influences;


    public Mime() {
    }

    public Mime(String userName, String password, String fullName, int age, String imageUrl, String profileVideoUrl, String interests, String city, String state, String influences) {
        this.userName = userName;
        this.password = password;
        this.fullName = fullName;
        this.age = age;
        this.imageUrl = imageUrl;
        this.profileVideoUrl = profileVideoUrl;
        this.interests = interests;
        this.city = city;
        this.state = state;
        this.influences = influences;
    }
}