package eventManager.core.topic.dao;

import eventManager.core.event.model.Event;
import eventManager.core.topic.model.Topic;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by Denys on 08.12.2016.
 */
public class TopicDaoImpl implements TopicDao{
    @Autowired
    SessionFactory sessionFactory;

    @Override
    public List<Topic> getAll() {
        return null;
    }

    @Override
    public void create(Topic topic) {

    }

    @Override
    public void delete(Topic topic) {

    }
}