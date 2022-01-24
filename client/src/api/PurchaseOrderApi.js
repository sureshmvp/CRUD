import PurchaseOrderApiGenerated from "./generated/PurchaseOrderApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class PurchaseOrderApi extends PurchaseOrderApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get PurchaseOrder List
  static getPurchaseOrderList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/purchaseorders")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default PurchaseOrderApi;