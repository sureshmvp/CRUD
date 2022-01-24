// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  linedetail: {}
};

// Reducer
export default function LineDetailEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_LINEDETAIL_SUCCESS:
      return { ...state, linedetail: action.payload };
    case types.UPDATE_LINEDETAIL_SUCCESS:
      return { ...state, linedetail: action.payload };
    case types.GET_LINEDETAIL_SUCCESS:
      return { ...state, linedetail: action.payload };
    case types.FINDBYPO_LINEDETAILS_PURCHASEORDER_SUCCESS:
      return { ...state, listPurchaseOrder: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}