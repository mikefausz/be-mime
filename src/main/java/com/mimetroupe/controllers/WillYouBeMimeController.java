package com.mimetroupe.controllers;

import com.mimetroupe.entities.Admimerer;
import com.mimetroupe.entities.Mime;
import com.mimetroupe.services.AdmimererRepository;
import com.mimetroupe.services.MimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.h2.tools.Server;
import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.servlet.http.HttpSession;
import java.sql.SQLException;

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

        if (mimeRepository.findByUserName(mime.getUserName()) != null) {
            Mime mimeSaved = mimeRepository.save(mime);
            return mimeSaved;
        } else {
            throw new Exception("Mime account already exists");
        }
    }


    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public Mime login(HttpSession session, String userName, String password) {
        Mime mime =mimeRepository.findByUserName(userName);



//        User user = userRepository.findByName(userName);
//        if (user == null) {
//            user = new User(userName, PasswordStorage.createHash(password));
//            userRepository.save(user);
//        } else if (!PasswordStorage.verifyPassword(password, user.getPasswordHash())){
//            throw new Exception("Wrong Password");
//        }
//
//        session.setAttribute("userName", userName);





        return null;
    }


}