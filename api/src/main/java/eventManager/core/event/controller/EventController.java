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
    public String viewAllTopics() {
        ObjectMapper mapper = new ObjectMapper();
        List<Event> topic = (List<Event>) eventDao.findAll();
        String jsonInString = null;
        try {
            jsonInString = mapper.writeValueAsString(topic);
        }catch (Exception e) {
            e.printStackTrace();
        }
        return jsonInString;
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