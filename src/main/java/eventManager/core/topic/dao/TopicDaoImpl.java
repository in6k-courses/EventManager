package eventManager.core.topic.dao;

import eventManager.core.event.model.Event;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by Denys on 08.12.2016.
 */
public class TopicDaoImpl {
    @Autowired
    SessionFactory sessionFactory;

    public List<Event> getAll() {
        Criteria criteria = sessionFactory.getCurrentSession().createCriteria(Event.class);
        List<Event> result = criteria.list();
        return  result;
    }

    public void create(Event event) {
        sessionFactory.getCurrentSession().save(event);
    }

    public void delete(Event event) {
        Session session =sessionFactory.getCurrentSession();
        Criteria criteria = session.createCriteria(Event.class);
        session.delete(event);
    }
}