import WebOrderLevelApiGenerated from "./generated/WebOrderLevelApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class WebOrderLevelApi extends WebOrderLevelApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get WebOrderLevel List
  static getWebOrderLevelList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/weborderlevels")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default WebOrderLevelApi;