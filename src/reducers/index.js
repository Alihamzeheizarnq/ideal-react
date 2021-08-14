import { combineReducers } from "redux";
import themeReducer from './themeReucer';
import LinkReducer from './LinkReducer';

let reducer = combineReducers({
    theme: themeReducer,
    links : LinkReducer,
})

export default reducer;