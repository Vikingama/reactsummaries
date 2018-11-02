import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Flags from "./Flags";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

ReactDOM.render(
    <div>
        <App />
        <hr />
        <Flags />
    </div>,
    document.getElementById("root")
);

serviceWorker.unregister();
