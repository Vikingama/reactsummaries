import React, { Component } from "react";

class Error extends Component {
    goIndex() {
        this.props.history.push("/");
    }
    render() {
        return (
            <div>
                404
                <br />
                <button onClick={this.goIndex.bind(this)}>返回首页</button>
            </div>
        );
    }
}

export default Error;
