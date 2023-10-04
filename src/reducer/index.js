import { combineReducers  } from "redux";
import carDataReducer from "./carData.reducer";

const rootReducer = combineReducers({
    carData:carDataReducer
});
export default rootReducer;