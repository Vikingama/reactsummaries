import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import Rrx from "./components/Rrx";
import Rsx from "./components/Rsx";
import Rtx from "./components/Rtx";
import Rux from "./components/Rux";
import reducers from "./reducers";
import * as actions from "./actions";
import * as serviceWorker from "./serviceWorker";

const store = createStore(reducers),
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
            </div>,
            document.getElementById("root")
        );
    };

store.subscribe(render);
render();

serviceWorker.unregister();
