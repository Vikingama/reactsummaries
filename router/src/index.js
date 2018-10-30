import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Link,
    NavLink,
    Redirect,
    Route,
    Switch
} from "react-router-dom";
import About from "./components/About";
import Fzf from "./components/Fzf";
import Gov from "./components/Gov";
import Home from "./components/Home";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

ReactDOM.render(
    <Router>
        <div>
            <ul
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    borderBottom: "1px solid black"
                }}
            >
                <Link to="/">
                    <li>HOME</li>
                </Link>
                <NavLink
                    to="/info/WMA/AAC"
                    activeStyle={{
                        color: "red"
                    }}
                >
                    <li>INFO</li>
                </NavLink>
                <Link
                    to={{
                        pathname: "/gov",
                        search: "?vog=gov",
                        hash: "#vog",
                        state: {
                            sick: true
                        }
                    }}
                >
                    <li>GOV</li>
                </Link>
                <NavLink
                    to="/about"
                    activeStyle={{
                        color: "green"
                    }}
                >
                    <li>ABOUT</li>
                </NavLink>
                <Link to="404">
                    <li>404</li>
                </Link>
            </ul>
            {/* 
                exact: 完全匹配
                strict: 严格匹配
             */}
            <Switch>
                <Route path="/" component={Home} exact />
                <Route
                    path="/info/:id/:name"
                    render={props => (
                        <div>
                            INFO|
                            {props.match.params.id}|{props.match.params.name}
                        </div>
                    )}
                    exact
                />
                <Route
                    path="/gov"
                    render={props => <Gov {...props} name={"RAILS"} />}
                    strict
                />
                <Route path="/about/profile" component={About} strict />
                <Redirect from="/about" to="/about/profile?id=OGG&name=WAV" />>
                <Route component={Fzf} />
            </Switch>
        </div>
    </Router>,
    document.getElementById("root")
);

serviceWorker.unregister();
