import React from "react";
// <NavLink> 是 <Link> 的一个特定版本，会在匹配上当前的 url 的时候给已经渲染的元素添加参数...
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
