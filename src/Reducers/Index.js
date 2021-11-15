import changeTheNumber from "./UpDown";
import formReducer from "./FormReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    changeTheNumber,
    formReducer
});
export default rootReducer;