package StockOnHand.API;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import StockOnHand.DBConnectionPool;
import StockOnHand.Model.Inventory;

public class InventoryAPI {

    public InventoryAPI() {}

    public Inventory getInventory(String name) {
        Connection connection = null;
        PreparedStatement statement = null;
        ResultSet rs = null;
        try { //NOTE: Use try-with-resources instead?
            connection = DBConnectionPool.getConnection();
            statement = connection.prepareStatement(
                    "SELECT * from inventory" +
                    "WHERE inv_name = ?");
            statement.setString(1, name);
            rs = statement.executeQuery();

            //TODO: Check result set
            //Inventory inv = null; 
            if(rs.next() ) {
                return new Inventory(rs.getString("inv_owner"), rs.getString("inv_name"));
            } else {
                return null;
            }
        } catch(Exception err) {
            System.err.println(err.getMessage());
            return null;
        } finally {
            DBConnectionPool.closeResources(connection, statement, rs);
        }
    }
}