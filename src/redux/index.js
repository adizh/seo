import {createStore,compose,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";



const composeFunk = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
const composeEnchanters = composeFunk(applyMiddleware(thunk));
const store = createStore(rootReducer(), composeEnchanters);
export default store;