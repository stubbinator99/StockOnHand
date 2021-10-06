package StockOnHand;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

public class DBConnectionPool {
    private InitialContext initCtx;
    private static DataSource datasource = null;
    
    public DBConnectionPool() {
        try {
            initCtx = new InitialContext();
            Context envCtx = (Context) initCtx.lookup("java:comp/env");
            datasource = (DataSource) envCtx.lookup("jdbc/soh_db");
            
            //datasource = (DataSource) context.lookup("jdbc/soh_db");
        } catch (Exception e) {
            System.err.println("Could not initialize datasource: " 
                               + e.getMessage());
        }
    }
    
    public static synchronized Connection getConnection() throws SQLException {
        //Connection c = datasource.getConnection();
        //Connection actual = ((javax.sql.PooledConnection)c).getConnection();
        return datasource.getConnection();
    }
    
    public static synchronized void closeConnection(Connection c) {
        try {
            c.close();
        } catch(Exception e) {
            System.err.println(e.getMessage());
        }
    }
    
    public static synchronized void closeResources(Connection c, PreparedStatement ps, ResultSet rs) {
        try {
            if(c != null && !c.isClosed()) {
                DBConnectionPool.closeConnection(c);
            }
        } catch(Exception e) {
            System.err.println(e.getMessage());
        }
        try {
            if(ps != null && !ps.isClosed()) {
                ps.close();
            }
        } catch(Exception e) {
            System.err.println(e.getMessage());
        }
        try {
            if(rs != null && !rs.isClosed()) {
                rs.close();
            }
        } catch(Exception e) {
            System.err.println(e.getMessage());
        }
        return;
    }
}