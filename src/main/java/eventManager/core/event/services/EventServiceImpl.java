package eventManager.core.event.services;

import eventManager.core.event.dao.EventDao;
import eventManager.core.event.model.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by marina on 07.12.16.
 */
@Service
@Transactional
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
    public void delete(Event event) {
        eventDao.delete(event);
    }

//    public Event getById(Integer id) {
//        return eventDao.getEventById(id);
//    }
}