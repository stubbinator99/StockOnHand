package StockOnHand.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity @Table(name="invItem")
public class InvItem {
    @Id private int id;
    private String name;
    private String upc;
    
    public InvItem() {}
    
    public InvItem(String name) {
        this.name = name;
    }
    
    public InvItem(String name, String upc) {
        this.name = name;
        this.upc = upc;
    }
    
    public String getName() {
        return this.name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String getUpc() {
        return this.upc;
    }
    
    public void setUpc(String upc) {
        this.upc = upc;
    }
}