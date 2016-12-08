package eventManager.core.topic.dao;

import eventManager.core.topic.model.Topic;

import java.util.List;

/**
 * Created by employee on 12/6/16.
 */
public interface TopicDao {
    public List<Topic> getAll();

    public void create(Topic topic);

    public void delete(Topic topic);

}