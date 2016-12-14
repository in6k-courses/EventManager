package eventManager.core.event.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import eventManager.core.event.dao.EventDao;
import eventManager.core.event.model.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
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

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    @ResponseBody
    public String getAllEvents() {
        ObjectMapper mapper = new ObjectMapper();
        List<Event> events = (List<Event>) eventDao.findAll();
        String jsonInString = null;
        try {
            jsonInString = mapper.writeValueAsString(events);
        }catch (Exception e) {
            e.printStackTrace();
        }
        return jsonInString;
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public Event addEvent(@RequestBody String name){
        Event event = new Event(name);
        return this.eventDao.save(event);
    }

    @RequestMapping(value = "/details", method = RequestMethod.GET)
    @ResponseBody
    public String getDetails(){
        ObjectMapper mapper = new ObjectMapper();
        Event event = new Event();
        event.setDetails("Event.");
        String jsonInString = null;
        try {
            jsonInString = mapper.writeValueAsString(event.getDetails());
        }catch (Exception e) {
            e.printStackTrace();
        }
        return jsonInString;
    }
//
//    @RequestMapping(value = "/{id}")
//    public void delete(@PathVariable Integer id){
//        Event event = new Event(id);
//        this.eventService.delete(event);
//    }

}