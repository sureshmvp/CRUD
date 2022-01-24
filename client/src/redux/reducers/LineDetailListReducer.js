// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function LineDetailListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_LINEDETAIL_SUCCESS:
      return { ...state, linedetail: action.payload };
    case types.LIST_LINEDETAIL_SUCCESS:
      return { ...state, listLineDetail: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}