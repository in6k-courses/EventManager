package eventManager.topic.controller;

import eventManager.topic.dao.TopicDao;
import eventManager.topic.model.Topic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by employee on 12/6/16.
 */
@Controller
@RequestMapping(value = "api/topics")
public class TopicController {

    @Autowired
    TopicDao topicDao;

    @RequestMapping(value = "/all")
    @ResponseBody
    public Iterable<Topic> getAllTopics(){
        return topicDao.findAll();
    }
}
