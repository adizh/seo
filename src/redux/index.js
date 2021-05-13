import {createStore,compose} from 'redux';
import rootReducer from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";
const initState={}
const composeFunc=process.env.NODE_ENV==='development'?composeWithDevTools:compose
const composeEnhancer=composeFunc()
const store=createStore(initState,rootReducer(),composeEnhancer)
export default store