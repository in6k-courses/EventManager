package eventManager.event.controller;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by Denys on 08.12.2016.
 */
@Controller
@RequestMapping(value = "/")
public class MainController {

    public String index() {
        return "/api/events";
    }
}
