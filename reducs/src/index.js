import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import Rrx from "./components/Rrx";
import Rsx from "./components/Rsx";
import Rtx from "./components/Rtx";
import Rux from "./components/Rux";
import User from "./components/User";
import configureStore from "./store/configureStore";
import * as actions from "./actions";

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

const store = configureStore(),
    render = () => {
        ReactDOM.render(
            <Provider store={store}>
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
                    <Rrx />
                    <hr />
                    <Rsx />
                    <hr />
                    <Rtx />
                    <hr />
                    <Rux />
                    <hr />
                    <User />
                </div>
            </Provider>,
            document.getElementById("root")
        );
    };

store.subscribe(render);

render();

serviceWorker.unregister();