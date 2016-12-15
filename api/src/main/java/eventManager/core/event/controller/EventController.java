package eventManager.core.event.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import eventManager.core.event.dao.EventDao;
import eventManager.core.event.model.Event;
import eventManager.core.topic.model.Topic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @RequestMapping(value = "/addTopicName", method = RequestMethod.POST)
    public void addTopicName(@RequestBody Long idEvent, String topicName){
        this.eventDao.findOne(idEvent).setDetails(topicName);
    }

    @RequestMapping(value = "/{id}")
    public Event getById(@RequestBody Long id){
        return this.eventDao.findOne(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@RequestBody Long id){
        this.eventDao.delete(id);
    }

}