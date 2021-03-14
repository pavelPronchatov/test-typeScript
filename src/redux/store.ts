import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {appReducer} from "./reducer/appReducer";


const reducers = combineReducers({
  app: appReducer
});

type ReducersType = typeof reducers;
export type AppStateType = ReturnType<ReducersType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store: any = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));