package eventManager.core.topic.model;

import eventManager.core.event.model.Event;

import javax.persistence.*;

/**
 * Created by employee on 12/6/16.
 */
@Entity
@Table(name = "topic", catalog = "event_manager", uniqueConstraints = {
        @UniqueConstraint(columnNames = "id")
})

public class Topic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    Integer id;

    @Column(name = "name")
    String name;

    @Column(name = "id_event")
    Integer idEvent;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_event", insertable = false, updatable = false)
    Event event;

    public Topic(){}

    public Topic(Integer id){}

    public Topic(Integer id, String name){}

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
}
