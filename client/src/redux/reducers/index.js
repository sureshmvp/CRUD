import { combineReducers } from "redux";

// START IMPORT REDUCERS
import HomeReducer from "./HomeReducer";
import LineDetailEditReducer from "./LineDetailEditReducer";
import LineDetailListReducer from "./LineDetailListReducer";
import PurchaseOrderEditReducer from "./PurchaseOrderEditReducer";
import PurchaseOrderListReducer from "./PurchaseOrderListReducer";
import WebOrderLevelEditReducer from "./WebOrderLevelEditReducer";
import WebOrderLevelListReducer from "./WebOrderLevelListReducer";

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
	HomeReducer,
	LineDetailEditReducer,
	LineDetailListReducer,
	PurchaseOrderEditReducer,
	PurchaseOrderListReducer,
	WebOrderLevelEditReducer,
	WebOrderLevelListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
