package listOfItems.core.model;

/**
 * Created by employee on 12/6/16.
 */

public class Item {

    Integer id;

    String name;

    public Item(){}

    public Item(Integer id){}

    public Item(Integer id, String name){}

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
