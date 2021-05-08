import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
import {reducer, RootState} from "./reducers";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

const makeStore: MakeStore<RootState>
    = (context:Context) => createStore(reducer, applyMiddleware(thunk))
export const wrapper = createWrapper<RootState>(makeStore, {debug: true});

