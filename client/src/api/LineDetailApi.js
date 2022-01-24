import LineDetailApiGenerated from "./generated/LineDetailApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class LineDetailApi extends LineDetailApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get LineDetail List
  static getLineDetailList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/linedetails")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default LineDetailApi;