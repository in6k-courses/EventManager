package eventManager.core.event.controller;

import eventManager.core.event.model.Event;
import eventManager.core.event.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

/**
 * Created by employee on 12/6/16.
 */
@Controller
public class EventController {
    @Autowired
    private EventService eventService;

    @RequestMapping(value = "/events", method = RequestMethod.GET)
    public List<Event> getAll(){
        return eventService.getAllEvents();
    }
}
