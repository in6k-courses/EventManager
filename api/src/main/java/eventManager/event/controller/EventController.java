package eventManager.event.controller;

import eventManager.event.dao.EventDao;
import eventManager.event.model.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * Created by employee on 12/6/16.
 */
@Controller
@RequestMapping("/api/events")
public class EventController {

    @Autowired
    private EventDao eventDao;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    @ResponseBody
    public Iterable<Event> getAllEvents() {
       return eventDao.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Event getById(@PathVariable Long id){
        return this.eventDao.findOne(id);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    @ResponseBody
    public Event addEvent(@RequestBody Event event){
        return this.eventDao.save(event);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public void deleteEvent(@PathVariable("id") Long id){
        eventDao.delete(id);
    }
}