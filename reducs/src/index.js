import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import Rrx from "./Rrx";
import * as serviceWorker from "./serviceWorker";
import reducers from "./reducers/index";
import * as actions from "./actions/index";

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
            </div>,
            document.getElementById("root")
        );
    };
console.log(store.getState())
store.subscribe(render);
render();

serviceWorker.unregister();
