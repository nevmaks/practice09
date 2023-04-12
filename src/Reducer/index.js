import {combineReducers} from "redux";
import {gridReducer} from "./gridReducer";
import {detailsReducer} from "./detailsReducer";

export const rootReducer = combineReducers({details: detailsReducer, grid: gridReducer});