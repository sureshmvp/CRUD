// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  weborderlevel: {}
};

// Reducer
export default function WebOrderLevelEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_WEBORDERLEVEL_SUCCESS:
      return { ...state, weborderlevel: action.payload };
    case types.UPDATE_WEBORDERLEVEL_SUCCESS:
      return { ...state, weborderlevel: action.payload };
    case types.GET_WEBORDERLEVEL_SUCCESS:
      return { ...state, weborderlevel: action.payload };
    case types.FINDBYPO_WEBORDERLEVEL_PURCHASEORDER_SUCCESS:
      return { ...state, listPurchaseOrder: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}