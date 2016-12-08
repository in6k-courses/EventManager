package eventManager.core.topic.model;

import eventManager.core.event.model.Event;

import javax.persistence.*;
import java.util.List;

/**
 * Created by employee on 12/6/16.
 */
@Entity
@Table(name = "topic", catalog = "event_manager")

public class Topic {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "topics")
    private List<Event> allEvents;

    public Topic(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public Topic(String name) {
        this.name = name;
    }

    public Topic(){}

    public void setId(int listId) {
        this.id = listId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAllEvents(List<Event> allEvents) {
        this.allEvents = allEvents;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public List<Event> getAllEvents() {
        return allEvents;
    }
}