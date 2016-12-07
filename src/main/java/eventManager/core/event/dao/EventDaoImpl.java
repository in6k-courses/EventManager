package eventManager.core.event.dao;

import eventManager.core.event.model.Event;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.List;

import static org.hibernate.criterion.Restrictions.eq;

/**
 * Created by employee on 12/6/16.
 */
@Repository
public class EventDaoImpl implements EventDao {

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
