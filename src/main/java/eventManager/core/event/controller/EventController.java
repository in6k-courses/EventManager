package eventManager.core.event.controller;

import eventManager.core.event.model.Event;
import eventManager.core.event.services.EventService;
import eventManager.core.topic.model.Topic;
import eventManager.core.topic.services.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/**
 * Created by employee on 12/6/16.
 */
@Controller
@RequestMapping("/api/events")
public class EventController {

    @Autowired
    private EventService eventService;

//    @Autowired
//    private TopicService topicService;

    @RequestMapping(value = "")
    public List<Event> getAllEvents(){
        return eventService.getAllEvents();
    }

    @RequestMapping(value = "", method = RequestMethod.POST)
    public void addEvent(@RequestBody Event event){
      this.eventService.createEvent(event);
    }

//    @RequestMapping(value = "/{id}")
//    public void getEventById(@PathVariable Integer id){
//        this.eventService.getById(id);
//    }
//
//    @RequestMapping(value = "/{id}")
//    public void delete(@PathVariable Integer id){
//        Event event = new Event(id);
//        this.eventService.delete(event);
//    }

}