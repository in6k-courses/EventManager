package eventManager.core.event.services;

import eventManager.core.event.dao.EventDao;
import eventManager.core.event.model.Event;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by marina on 07.12.16.
 */
public class EventServiceImpl implements EventService{

    @Autowired
    EventDao eventDao;

    @Override
    public List<Event> getAllEvents() {
        List<Event> events = eventDao.getAll();
        return events;
    }

    @Override
    public void createEvent(Event event) {
        eventDao.create(event);
    }

    @Override
    public void deleteEvent(Event event) {
        eventDao.delete(event);
    }
}
