import { combineReducers } from "redux";
import setting from "./setting";

const rootReducer = combineReducers({
  setting,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
