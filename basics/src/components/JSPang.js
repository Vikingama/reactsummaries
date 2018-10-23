import React, { Component } from "react";
import { Prompt } from "react-router-dom";

export default class JSPang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            power: false
        };
    }
    handleClick = () => {
        alert("开始启用提示效果");
        this.setState({
            power: true
        });
    };
    render() {
        return (
            <div>
                JSPang
                {/* 在 MemoryRouter 模式下，将不起作用；when 相当于开关，决定 Prompt 是否生效... */}
                <Prompt message="确定离开此页面？" when={this.state.power} />
                <button onClick={this.handleClick}>切换提示效果</button>
            </div>
        );
    }
}
