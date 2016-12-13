package eventManager.core.event.model;

import eventManager.core.topic.model.Topic;

import javax.persistence.*;

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

    @Column(name = "id_topic")
    Integer idTopic;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_topic", insertable = false, updatable = false)
    Topic topics;

    @Column(name="details")
    String details;

    public Event(){}

    public Event(Integer id){
        this.id = id;
    }

    public Event(String name){
        this.name = name;
    }

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

    public Integer getIdTopic() {
        return idTopic;
    }

    public void setIdTopic(Integer idTopic) {
        this.idTopic = idTopic;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }
}
