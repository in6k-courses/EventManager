package eventManager.core.event.dao;

import eventManager.core.event.model.Event;

import java.util.List;

/**
 * Created by employee on 12/6/16.
 */
public interface EvantDao {

    List<Event> getItems();

    void createItem(Event event);

    Event getItem (Integer itemId);

    void deleteItem(Event event);

}
