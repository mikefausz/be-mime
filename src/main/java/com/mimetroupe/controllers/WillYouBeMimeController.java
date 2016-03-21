package com.mimetroupe.controllers;

import com.mimetroupe.entities.Admimerer;
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
import java.util.ArrayList;
import java.util.HashMap;
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


        if (mimeRepository.findByUserName(mime.getUserName()) == null) {

            //just a little check to make sure all the fields are entered so we don't break any null constraints in DB
            if (    (mime.getUserName() == null || mime.getUserName().length() <= 1 ) ||
                    (mime.getPassword() == null || mime.getPassword().length() <= 1 ) ||
                    (mime.getFullName() == null || mime.getFullName().length() <=1 ) ||
                    (mime.getAge() == 0) ||
                    (mime.getImageUrl() == null || mime.getImageUrl().length() <= 1) ||
                    (mime.getProfileVideoUrl() == null || mime.getProfileVideoUrl().length() <= 1) ||
                    (mime.getInterests() == null || mime.getInterests().length() <= 1) ||
                    (mime.getCity() == null || mime.getCity().length() <= 1) ||
                    (mime.getState() == null || mime.getState().length() <= 1)
            ) throw new Exception("Membership form not filled out");


            mime.setPassword(PasswordStorage.createHash(mime.getPassword()));
            return mimeRepository.save(mime);
        } else {
            throw new Exception("Mime account already exists");
        }
    }

    //return all the mimes except the currently logged in mime
    @RequestMapping(path = "/mime", method = RequestMethod.GET)
    public List<Mime> displayAllMimesExceptUser(HttpSession session) throws Exception {
        if (session.getAttribute("userName") != null) {
            return mimeRepository.findAllWhereUserNameNot((String) session.getAttribute("userName"));
        } else {
            throw new Exception("You are a sneaky Mime, and sneaky Mimes are not Admimered");
        }
    }

    //this method will return one mime
    //it needs an id sent to it
    //i think this will look something like /mime/1
    @RequestMapping(path = "/mine/{id}", method = RequestMethod.GET)
    public Mime displaySingleMime(@PathVariable("id") int id) {
        return mimeRepository.findOne(id);
    }


    //edits currently logged in mime account
    @RequestMapping(path = "/mime", method = RequestMethod.PUT)
    public void editProfile(@RequestBody Mime mime, HttpSession session) throws Exception {

        if (mime.getUserName().equals(session.getAttribute("userName"))) {
            mimeRepository.save(mime);
        } else {
            throw new Exception("Mimes may make many magnificent modifications. But not this one.");
        }
    }


    //both commented out methods run delete and look for a Mime object.
//    //deletes currently logged in mime account
//    @RequestMapping(path = "/mime", method = RequestMethod.DELETE)
//    public void deleteProfile(@RequestBody Mime mime, HttpSession session) throws Exception {
//        if (mime.getUserName().equals(session.getAttribute("userName"))) {
//            mimeRepository.delete(mime);
//            session.invalidate();
//        } else {
//            throw  new Exception("Mackin aint easy for a Mime. Don't make it harder by deleting someone else's profile.");
//        }
//    }

//    @RequestMapping(path = "/mime/{id}", method = RequestMethod.DELETE)
//    public void deleteProfile(@RequestBody Mime mime, HttpSession session, @PathVariable("id") Integer id) throws Exception {
//        if (mime.getUserName().equals(session.getAttribute("userName"))) {
//            mimeRepository.delete(mime);
//            session.invalidate();
//        } else {
//            throw  new Exception("Mackin aint easy for a Mime. Don't make it harder by deleting someone else's profile.");
//        }
//    }

    //delete route which looks for4 an id and does not take a object
    @RequestMapping(path = "/mime/{id}", method = RequestMethod.DELETE)
    public void deleteProfile(HttpSession session, @PathVariable("id") Integer id) throws Exception {
        Mime mime = mimeRepository.findOne(id);
        if (mime != null && mime.getUserName().equals(session.getAttribute("userName"))) {
            mimeRepository.delete(mime);
            session.invalidate();
        } else {
            throw  new Exception("Mackin aint easy for a Mime. Don't make it harder by deleting someone else's profile.");
        }
    }



    //login route. If something goes wrong it will return null, which FE can then handle.
    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public Mime login(HttpSession session, @RequestBody HashMap data) throws PasswordStorage.InvalidHashException, PasswordStorage.CannotPerformOperationException {


        Mime mime = mimeRepository.findByUserName((String) data.get("userName"));

        if (mime != null && PasswordStorage.verifyPassword((String) data.get("password"), mime.getPassword())) {
            session.setAttribute("userName", mime.getUserName());
            return mime;
        } else {
            return null;
        }
    }


    //adds admimerers. IE likes.
    @RequestMapping(path = "/admimerer", method = RequestMethod.POST)
    public void addAdmimerer(HttpSession session, @RequestBody Mime mime) throws Exception {

        if (session.getAttribute("userName") != null) {
            Mime mimeFromPage = mimeRepository.findByUserName(mime.getUserName());
            Mime mimeUser = mimeRepository.findByUserName((String) session.getAttribute("userName"));
            admimererRepository.save(new Admimerer(mimeUser, mimeFromPage));
        } else {
            throw new Exception("Mimes must make moves merely meanwhile moored");  //this one is a bit of a stretch
        }
    }

    //adds admimerers. IE likes.
    @RequestMapping(path = "/admimerer/{id}", method = RequestMethod.POST)
    public void addAdmimererSingle(HttpSession session,@RequestBody Mime mime, @PathVariable("id") Integer id) throws Exception {

        if (session.getAttribute("userName") != null) {
            Mime mimeFromPage = mimeRepository.findByUserName(mime.getUserName());
            Mime mimeUser = mimeRepository.findByUserName((String) session.getAttribute("userName"));
            admimererRepository.save(new Admimerer(mimeUser, mimeFromPage));
        } else {
            throw new Exception("Mimes must make moves merely meanwhile moored");  //this one is a bit of a stretch
        }
    }


    //returns a list of all the mimes that a specific mime admimers
    @RequestMapping(path = "/admimerer", method = RequestMethod.GET)
    public List<Mime> viewAdmimerers(HttpSession session) {

        Mime mime = mimeRepository.findByUserName((String) session.getAttribute("userName"));
        List<Admimerer> admimerers = admimererRepository.findByMime(mime);
        List<Mime> mimes = new ArrayList<>();
        for (Admimerer a : admimerers) {
            mimes.add(a.getAdmimerer());
        }
        return mimes;
    }

    //returns a list of all the mimes that admimer a specific mime. This is the opposite of /admimerer
    @RequestMapping(path = "/mimesAdmimerers", method = RequestMethod.GET)
    public List<Mime> mimesAdmimerers(HttpSession session) {
        Mime mime = mimeRepository.findByUserName((String) session.getAttribute("userName"));
        List<Admimerer> admimerers = admimererRepository.findByAdmimerer(mime);
        List<Mime> mimes = new ArrayList<>();
        for (Admimerer a : admimerers) {
            mimes.add(a.getMime());
        }
        return mimes;
    }

    @RequestMapping(path = "/mimeMatches", method = RequestMethod.GET)
    public List<Mime> mimeMatches(HttpSession session) {
        Mime mime = mimeRepository.findByUserName((String) session.getAttribute("userName"));
        List<Admimerer> admimerers = admimererRepository.findMimeByMimeEquals(mime);
        List<Mime> mimes = new ArrayList<>();
        for (Admimerer a : admimerers) {
            mimes.add(a.getAdmimerer());
        }
        return mimes;
    }



    @RequestMapping(path = "/logout", method = RequestMethod.POST)
    public void logout(HttpSession session) {
        session.invalidate();
    }



}