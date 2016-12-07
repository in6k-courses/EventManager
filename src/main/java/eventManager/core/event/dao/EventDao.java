package eventManager.core.event.dao;

import eventManager.core.event.model.Event;

import java.util.List;

/**
 * Created by employee on 12/6/16.
 */
public interface EventDao {

    List<Event> getAll();

    void create(Event event);

    void delete(Event event);

}
