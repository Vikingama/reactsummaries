import React from "react";
import ReactDOM from "react-dom";
/*
    路由模式：
        BrowserRouter   浏览器的路由方式，在开发中最常使用。
        HashRouter      在路径前加入 # 号成为一个哈希值。
        MemoryRouter    不存储 History，所有路由过程保存在内存里，不能进行前进后退，因为地址栏没有发生任何变化。
        NativeRouter    经常配合 ReactNative 使用，多用于移动端。
        StaticRouter    设置静态路由，需要和后台服务器配合设置，比如设置服务端渲染时使用。
*/
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom"; // Switch 用来做 404、Redirect 用来做页面重定向...
import App from "./App";
import Navbar from "./components/Navbar";
import JSPang from "./components/JSPang";
import Azzept from "./components/Accept";
import Errorz from "./components/404";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
    // basename: 设置路由基准；forceRefresh: 如果本地存在缓存，则不向服务器请求...
    <Router basename="demo" forceRefresh={true}>
        <div>
            <Navbar />
            <Switch>
                {/* exact 精确匹配 */}
                <Route path="/" component={App} exact />
                <Route path="/jsp" component={JSPang} />
                <Route path="/accept/:a/:b" component={Azzept} />
                <Redirect from="/redirect" to="jsp" />
                <Route component={Errorz} />
            </Switch>
        </div>
    </Router>,
    document.getElementById("root")
);

serviceWorker.unregister();
