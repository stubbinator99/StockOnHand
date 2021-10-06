package StockOnHand.Model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="inventory")
public class Inventory {
    @EmbeddedId
    InventoryId id;

    public Inventory() {}

    public Inventory(String username, String name) {
        this.id = new InventoryId(username, name);
    }

    public String getName() {
        return this.id.name;
    }

    public void setName(String name) {
        this.id.name = name;
    }

    public String getUsername() {
        return this.id.username;
    }

    public static void add(EntityManager em, //UserTransaction ut,
            String username, String name) throws Exception {
        //ut.begin();
        em.getTransaction().begin();
        Inventory inv = new Inventory(username, name);
        em.persist(inv);
        //ut.commit();
        em.getTransaction().commit();
    }

    public static List<Inventory> retrieveMatchingInventories(EntityManager em, String username) {
        //Query q = em.createQuery("SELECT * FROM inventory WHERE inv_owner = '" + username + "';");
        //List<Inventory> result = q.getResultList();
        //return result;
        return new ArrayList<Inventory>(); //TODO fix
    }

    public static void update() {
        //TODO: Implement
    }

    public static void destroy(EntityManager em, //UserTransaction ut,
            String username, String name) {
        InventoryId id = new InventoryId(username, name);
        //ut.begin();
        em.getTransaction().begin();
        Inventory inv = em.find(Inventory.class, id);
        em.remove(inv);
        //ut.commit();
        em.getTransaction().commit();
    }
}

@Embeddable
class InventoryId implements Serializable {
    String username;
    String name;

    InventoryId(String username, String name) {
        this.username = username;
        this.name = name;
    }

  public InventoryId() {

  }
}
