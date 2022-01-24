// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  purchaseorder: {}
};

// Reducer
export default function PurchaseOrderEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_PURCHASEORDER_SUCCESS:
      return { ...state, purchaseorder: action.payload };
    case types.UPDATE_PURCHASEORDER_SUCCESS:
      return { ...state, purchaseorder: action.payload };
    case types.GET_PURCHASEORDER_SUCCESS:
      return { ...state, purchaseorder: action.payload };
    case types.LIST_WEBORDERLEVEL_SUCCESS:
      return { ...state, listWebOrderLevel: action.payload };
    case types.LIST_LINEDETAIL_SUCCESS:
      return { ...state, listLineDetail: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}