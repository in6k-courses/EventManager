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

    @RequestMapping(value = "/all")
    @ResponseBody
    public Iterable<Event> getAllEvents() {
       return eventDao.findAll();
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public Event addEvent(@RequestBody String name){
        Event event = new Event(name);
        return this.eventDao.save(event);
    }

    @RequestMapping(value = "/details", method = RequestMethod.GET)
    @ResponseBody
    public String getDetails() {
        Event event = new Event();
        event.setDetails("Event.");
        return event.getDetails();
    }

//    @RequestMapping(value = "/getTopicName", method = RequestMethod.POST)
//    public void addTopicName(@RequestBody Long idTopic){
//        this.eventDao.findOne().setDetails();
//    }

    @RequestMapping(value = "/{id}")
    public Event getById(@RequestBody Long id){
        return this.eventDao.findOne(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@RequestBody Long id){
        this.eventDao.delete(id);
    }

}