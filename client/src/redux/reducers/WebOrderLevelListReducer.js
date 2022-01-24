// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function WebOrderLevelListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_WEBORDERLEVEL_SUCCESS:
      return { ...state, weborderlevel: action.payload };
    case types.LIST_WEBORDERLEVEL_SUCCESS:
      return { ...state, listWebOrderLevel: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}