import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

reducers=combineReducers({
    amount :amountReducer
})
export default reducers