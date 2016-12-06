package core.dao;

import core.model.Item;

import java.util.List;

/**
 * Created by employee on 12/6/16.
 */
public interface ItemDao {

    List<Item> getItems();

    void createItem(Item item);

    Item getItem (Integer itemId);

    void deleteItem(Item item);

}
