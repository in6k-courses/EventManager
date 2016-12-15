package eventManager.event.model;

import eventManager.topic.model.Topic;

import javax.persistence.*;
import java.util.ArrayList;
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

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinTable(name = "id_topic", catalog = "event_manager",
            joinColumns = {
                    @JoinColumn( name = "idEvent", referencedColumnName = "id")
            },
            inverseJoinColumns = {@JoinColumn(name = "idTopic", referencedColumnName = "id" )})
    List<Topic> topics = new ArrayList<>();

    @Column(name="details")
    String details;

    public Event(){}

    public Event(Integer id){
        this.id = id;
    }

    public Event(String name){
        this.name = name;
    }

    public Event(String name, String details){
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

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public List<Topic> getTopics() {
        return this.topics;
    }

    public void setTopics(List<Topic> topics) {
        this.topics = topics;
    }
}
