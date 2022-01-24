// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function PurchaseOrderListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_PURCHASEORDER_SUCCESS:
      return { ...state, purchaseorder: action.payload };
    case types.LIST_PURCHASEORDER_SUCCESS:
      return { ...state, listPurchaseOrder: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}