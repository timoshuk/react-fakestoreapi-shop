import { combineReducers } from "redux";

import productReducer from "./productReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({ productReducer, loginReducer });

export default rootReducer;
