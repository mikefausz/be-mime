package com.mimetroupe.controllers;

import com.mimetroupe.entities.Mime;
import com.mimetroupe.services.AdmimererRepository;
import com.mimetroupe.services.MimeRepository;
import com.mimetroupe.utilities.PasswordStorage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.h2.tools.Server;
import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.servlet.http.HttpSession;
import java.sql.SQLException;
import java.util.List;

/**
 * Created by branden on 3/17/16 at 13:20.
 */
@RestController
public class WillYouBeMimeController {

    @Autowired
    MimeRepository mimeRepository;

    @Autowired
    AdmimererRepository admimererRepository;


    Server dbui = null;

    @PostConstruct
    public void init() throws SQLException {
        dbui = Server.createWebServer().start();
    }

    @PreDestroy
    public void preDestory() {
        dbui.stop();
    }


    @RequestMapping(path = "/mime", method = RequestMethod.POST)
    public Mime createMime(@RequestBody Mime mime) throws Exception {

        Mime mimeDb = mimeRepository.findByUserName(mime.getUserName());

        if (mimeDb == null) {
            mime.setPassword(PasswordStorage.createHash(mime.getPassword()));
            return mimeRepository.save(mime);
        } else {
            throw new Exception("Mime account already exists");
        }
    }

    //return all the mimes except the currently logged in mime
    @RequestMapping(path = "/mime", method = RequestMethod.GET)
    public List<Mime> displayAllMimesExceptUser(HttpSession session) throws Exception {
//        Mime user = mimeRepository.findByUserName((String) session.getAttribute("userName"));

//        List<Mime> mimeList = (List<Mime>) mimeRepository.findAll();

//        for (Mime m : mimeList ) {
//            if (m.getUserName().equals(user.getUserName())) {
//                mimeList.remove(m);
//            }
//        }
        if (!session.isNew()) {
            return mimeRepository.findAllWhereUserNameNot((String) session.getAttribute("userName"));
        } else {
            throw new Exception("You are a sneaky Mime, and sneaky Mimes do not get Admimerers");
        }
    }

    //this method will return one mime
    //it needs an id sent to it
    //i think this will look something like /mime/1
    @RequestMapping(path = "/mine/{id}", method = RequestMethod.GET)
    public Mime displaySingleMime(@PathVariable("id") int id) {
        return mimeRepository.findOne(id);
    }


    //login route. If something goes wrong it will return null, which FE can then handle.
    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public Mime login(HttpSession session, String userName, String password) throws PasswordStorage.InvalidHashException, PasswordStorage.CannotPerformOperationException {
        Mime mime = mimeRepository.findByUserName(userName);

        if (mime != null && PasswordStorage.verifyPassword(password, mime.getPassword())) {
            session.setAttribute("userName", userName);
            return mime;
        } else {
            return null;
        }
    }


    @RequestMapping(path = "/admimerer", method = RequestMethod.POST)
    public void addAdmimerer(HttpSession session) {


    }


    @RequestMapping(path = "/admimerer", method = RequestMethod.GET)
    public List<Mime> viewAdmimerers(HttpSession session) {
        Mime mime = mimeRepository.findByUserName((String) session.getAttribute("userName"));

        //return admimererRepository.findByMime(mime);

        return null;
    }



    @RequestMapping(path = "/logout", method = RequestMethod.POST)
    public void logout(HttpSession session) {
        session.invalidate();
    }
}