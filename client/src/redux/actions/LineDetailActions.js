import actionsFunction from "./generated/LineDetailActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import LineDetailApi from "../../api/LineDetailApi";
 
 actionsFunction.loadLineDetailList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return LineDetailApi
     .getLineDetailList()
     .then(list => {
       dispatch(actionsFunction.loadLineDetailSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
