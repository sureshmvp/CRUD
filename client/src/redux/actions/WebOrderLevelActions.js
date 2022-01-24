import actionsFunction from "./generated/WebOrderLevelActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import WebOrderLevelApi from "../../api/WebOrderLevelApi";
 
 actionsFunction.loadWebOrderLevelList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return WebOrderLevelApi
     .getWebOrderLevelList()
     .then(list => {
       dispatch(actionsFunction.loadWebOrderLevelSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
