package eventManager.topic.model;

import eventManager.event.model.Event;

import javax.persistence.*;
import java.util.List;

/**
 * Created by employee on 12/6/16.
 */
@Entity
@Table(name = "topic", catalog = "event_manager",
uniqueConstraints = {
        @UniqueConstraint(columnNames = "id")
})

public class Topic {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    public Topic(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Topic(String name) {
        this.name = name;
    }

    public Topic(){}

    public void setId(Long listId) {
        this.id = listId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

}