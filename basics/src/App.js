import React, { Component } from "react";

class Title extends Component {
    constructor() {
        super();
        this.state = {
            answer: false
        };
    }
    handleClick = () => {
        this.setState({
            // state 并不会马上更改，react 会将其放入一个更新队列，然后将队列中的新状态合并到 state 中去，然后触发组件更新...
            answer: !this.state.answer
        });
        console.log(this.state.answer); // 获取的还是更改之前的 state，setState 之后使用新的 state 来做后续运算不靠谱...
    };
    render() {
        // 箭头函数不需要绑定 this...
        return <span onClick={this.handleClick}>i'm title...</span>;
    }
}

export default class App extends Component {
    handleClick() {
        console.log(this);
    }
    render() {
        return (
            <div className="App" onClick={this.handleClick.bind(this)}>
                <Title />
            </div>
        );
    }
}