import { combineReducers } from "redux";
import counter from "./counter"
import todo from "./todo"


// root reducer
export default combineReducers({
    counter,
    todo,
})