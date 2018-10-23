import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
    <div>
        <NavLink exact to="/" activeClassName="active">
            App
        </NavLink>
        &nbsp;
        <NavLink exact to="/jsp" style={{ color: "orange", fontSize: "16px" }}>
            JSPang
        </NavLink>
        &nbsp;
        <NavLink
            exact
            to="/accept/e4w5d4w6e5/5dsa67agf5s"
            style={{ color: "pink", fontSize: "16px" }}
        >
            Accept
        </NavLink>
        &nbsp;
        <NavLink exact to="/react" activeClassName="active">
            404
        </NavLink>
        &nbsp;
        <NavLink exact to="/redirect" activeClassName="active">
            Redirect
        </NavLink>
    </div>
);

export default Navbar;
