import React, { Component } from "react";
import Child from "./components/Child";

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
        return (
            <span onClick={this.handleClick}>
                i'm title, eat&nbsp;
                {this.props.eat}
                ...
            </span>
        );
    }
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            facial: "(⊙ˍ⊙)",
            food: "noddle",
            inputValue: "6dsgfd8g7dsf"
        };
    }
    onGreet(v) {
        this.setState({
            facial: this.state.facial + v
        });
    }
    onChangeFood(v) {
        this.setState({
            food: v
        });
    }
    render() {
        const user = {
            name: "Anna",
            hobbies: ["drink", "cook"]
        };
        return (
            <div>
                {/* 同级组件通过父级组件进行通信 */}
                <Title eat={this.state.food} />
                <hr />
                <Child
                    name={"rails365"}
                    age={30}
                    hobbies={user.hobbies}
                    greet={this.onGreet.bind(this)}
                    changeFood={this.onChangeFood.bind(this)}
                    inputValue={this.state.inputValue}
                >
                    {/* 父元素向 Child 传入一个子节点 span 标签 */}
                    <span>I am Anna's brother...</span>
                </Child>
                <br />
                <span
                    style={{
                        border: "1px dashed black"
                    }}
                >
                    {this.state.facial}
                </span>
            </div>
        );
    }
}
