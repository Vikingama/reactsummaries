import React, { Component, PureComponent, Fragment } from "react";

const Lis = () => {
    return (
        <Fragment>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </Fragment>
    );
};

class One extends PureComponent {
    // 使用 PureComponent 会在执行渲染函数之前进行数据的浅比较，就不用写 shouldComponentUpdate...
    render() {
        console.log("One");
        return <div>{this.props.one}</div>;
    }
}

class Two extends Component {
    render() {
        console.log("Two");
        return <div>{this.props.two}</div>;
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            countOne: 1,
            countTwo: 2
        };
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                countOne: 1,
                countTwo: 2
            });
        }, 3000);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.state.countTwo === nextState.countTwo ? false : true;
    }
    render() {
        console.log("App");
        return (
            <div>
                <One one={this.state.countOne} />
                <Two two={this.state.countTwo} />
                <hr />
                <ul>
                    <Lis />
                </ul>
            </div>
        );
    }
}

export default App;
