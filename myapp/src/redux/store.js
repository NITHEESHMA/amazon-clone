import { createStore,applyMiddleware } from "redux";
import rootreducer from "./rootreducer";
//import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import logger from 'redux-logger'
const middleware=[thunk];

if(process.env.NODE_ENV==="develpoment"){
    middleware.push(logger);
}
const store=createStore(rootreducer,applyMiddleware(...middleware));




export default store;