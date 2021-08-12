import { combineReducers } from "redux";
import themeReducer from './themeReucer';

let reducer = combineReducers({
    theme: themeReducer
})

export default reducer;