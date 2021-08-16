import { combineReducers } from "redux";
import themeReducer from './themeReucer';
import LinkReducer from './LinkReducer';
import Upload from './Upload';
import PortofiloReucer from './PortofiloReducer';

let reducer = combineReducers({
    theme: themeReducer,
    links: LinkReducer,
    files: Upload,
    portofilos: PortofiloReucer
})

export default reducer;