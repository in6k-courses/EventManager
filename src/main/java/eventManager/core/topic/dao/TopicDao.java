package eventManager.core.topic.dao;

import eventManager.core.topic.model.Topic;

import java.util.List;

/**
 * Created by employee on 12/6/16.
 */
public interface TopicDao {

    List<Topic> getItems();

    void createItem(Topic event);

    Topic getItem(Integer itemId);

    void deleteItem(Topic event);

}
