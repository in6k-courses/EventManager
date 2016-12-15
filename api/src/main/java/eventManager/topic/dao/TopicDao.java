package eventManager.topic.dao;

import eventManager.topic.model.Topic;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by employee on 12/6/16.
 */
@Transactional
public interface TopicDao extends CrudRepository<Topic, Long> {
}