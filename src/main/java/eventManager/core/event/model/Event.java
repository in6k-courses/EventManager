package eventManager.core.event.model;

import eventManager.core.topic.model.Topic;

import javax.persistence.*;
import java.util.List;

/**
 * Created by employee on 12/6/16.
 */

@Entity
@Table(name = "event", catalog = "event_manager")
public class Event {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @Column(name = "name")
    String name;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "event")
    List<Topic> allTopics;

    public Event(){}

    public Event(Integer id, String name){
        this.id=id;
        this.name=name;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Topic> getAllTopics() {
        return allTopics;
    }
}
