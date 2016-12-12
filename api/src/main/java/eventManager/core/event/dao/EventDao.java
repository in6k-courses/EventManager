package eventManager.core.event.dao;
import eventManager.core.event.model.Event;

import org.springframework.data.repository.CrudRepository;
import javax.transaction.Transactional;

/**
 * Created by employee on 12/6/16.
 */

@Transactional
public interface EventDao extends CrudRepository<Event, Long>{
}