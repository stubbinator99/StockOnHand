package StockOnHand.Controller;

import java.util.ArrayList;

import javax.persistence.EntityManager;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

import StockOnHand.API.InventoryAPI;
import StockOnHand.Model.Inventory;
import org.json.JSONException;
import org.json.JSONObject;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;


//@WebServlet(name = "InventoryController", value =  "/my-inventories")
@Path("/my-inventories")
public class InventoryController {//extends HttpServlet {
    //@PersistenceContext(unitName="StockOnHandApp")
    private EntityManager em;
    //@Resource() UserTransaction ut;

    InventoryAPI api = new InventoryAPI();

    /*@GET
    @Path("/{invName}")
    public Inventory getInventory(@PathParam("invName") String invName) {
        return api.getInventory(invName);
    }*/

    @GET
    @Path("/{invName}")
    @Produces("application/json")
    public Response getInventory(@PathParam("invName") String invName) throws JSONException {
      JSONObject o = new JSONObject();
      Inventory i = null; //api.getInventory(invName);

      if(i != null) {
        o.put("name", i.getName());
        o.put("username", i.getUsername());
      }

      String result = "@Produces(\"application/json\") Output: \n\n" + o;
      return Response.status(200).entity(result).build();
    }

    public static void add(String username, String name) throws Exception {

    }

    public static void update() {

    }

    public static void destroy(String username, String name) {

    }

    @GET
    //@Produces(MediaType.APPLICATION_JSON)
    //public JsonObject retrieveMatchingInventory(String username) {
    public Response retrieveMatchingInventory(String username) {

      ArrayList<String> s = new ArrayList<String>();
      s.add("test-name1");
      s.add("test-name2");
      return Response.status(200).entity(s).build();
      /*JsonObjectBuilder builder = Json.createObjectBuilder();
      builder.add("name", "test-name1")
        .add("name", "test-name2");

      return builder.build();*/
    }
}
