import { combineReducers } from "redux";

import shopreducer from "./reducer";
const rootreducer=combineReducers({
data:shopreducer


})

export default rootreducer;