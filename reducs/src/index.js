import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import App from "./App";
import Rrx from "./components/Rrx";
import Rsx from "./components/Rsx";
import Rtx from "./components/Rtx";
import Rux from "./components/Rux";
import User from "./components/User";
import reducers from "./reducers";
import * as actions from "./actions";
import * as serviceWorker from "./serviceWorker";

/*
    const logger = store => next => action => {
            console.log("dispatching", action);
            let res = next(action);
            console.log("nextState", store.getState());
            return res;
        },
        errorer = store => next => action => {
            try {
                next(action);
            } catch (e) {
                console.error("errorer", e);
            }
        };
*/

const store = createStore(reducers, {}, applyMiddleware(logger, thunk)),
    render = () => {
        ReactDOM.render(
            <div>
                <App
                    value={store.getState()}
                    onIncrease={() => {
                        store.dispatch(actions.increament());
                    }}
                    onDecrease={() => {
                        store.dispatch(actions.decreament());
                    }}
                />
                <hr />
                <Provider store={store}>
                    <Rrx />
                </Provider>
                <hr />
                <Provider store={store}>
                    <Rsx />
                </Provider>
                <hr />
                <Provider store={store}>
                    <Rtx />
                </Provider>
                <hr />
                <Provider store={store}>
                    <Rux />
                </Provider>
                <hr />
                <Provider store={store}>
                    <User />
                </Provider>
            </div>,
            document.getElementById("root")
        );
    };

store.subscribe(render);
render();

serviceWorker.unregister();
