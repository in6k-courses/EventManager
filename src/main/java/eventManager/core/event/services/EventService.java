package eventManager.core.event.services;

import eventManager.core.event.model.Event;

import java.util.List;

/**
 * Created by employee on 12/6/16.
 */
public interface EventService {

    List<Event> getAllEvents();

    void createEvent(Event event);

    void delete(Event event);

//    public Event getById(Integer id);
}