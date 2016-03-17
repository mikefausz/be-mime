package com.mimetroupe.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.h2.tools.Server;
import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.sql.SQLException;

/**
 * Created by branden on 3/17/16 at 13:20.
 */
@RestController
public class WillYouBeMimeController {

    Server dbui = null;

    @PostConstruct
    public void init() throws SQLException {
        dbui = Server.createWebServer().start();
    }

    @PreDestroy
    public void preDestory() {
        dbui.stop();
    }


}