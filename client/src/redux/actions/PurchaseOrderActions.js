import actionsFunction from "./generated/PurchaseOrderActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import PurchaseOrderApi from "../../api/PurchaseOrderApi";
 
 actionsFunction.loadPurchaseOrderList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return PurchaseOrderApi
     .getPurchaseOrderList()
     .then(list => {
       dispatch(actionsFunction.loadPurchaseOrderSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
