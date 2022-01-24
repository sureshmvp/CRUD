import { combineReducers } from "redux";

// START IMPORT REDUCERS
import PurchaseOrderListReducer from "./PurchaseOrderListReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	PurchaseOrderListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
