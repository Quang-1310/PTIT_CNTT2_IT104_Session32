import rootReducer from "./reducers";
import { createStore } from "redux";


const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>;

export default store