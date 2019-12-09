import { combineReducers } from "redux";

import { agents } from "./agents.reducer";

const rootReducer = combineReducers({
  agents
});

export default rootReducer;
