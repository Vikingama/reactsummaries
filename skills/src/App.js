import React, { Component, PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CauseError from "./CauseError";
import ErrorBoundary from "./ErrorBoundary";

const Lis = () => {
        return (
            <Fragment>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </Fragment>
        );
    },
    Topic = () => {
        return (
            <div>
                <Section />
            </div>
        );
    },
    Section = (props, context) => {
        console.log(props, context);
        return <div>{context.color}</div>;
    },
    // 高阶组件
    HighC = Com => {
        return class Wow extends Component {
            render() {
                return (
                    <div>
                        <Com {...this.props} />
                    </div>
                );
            }
        };
    },
    DownC = HighC(props => {
        return <div>{props.name}</div>;
    }),
    LiStyle = styled.li`
        color: palevioletred;
        font-weight: 900;
        list-style: none;
    `;

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
    getChildContext() {
        return {
            color: "1234"
        };
    }
    render() {
        console.log("App");
        return (
            <div>
                <One one={this.state.countOne} />
                {/* 不会影响其他组件的渲染 */}
                <ErrorBoundary>
                    <CauseError />
                </ErrorBoundary>
                <Two two={this.state.countTwo} />
                <hr />
                <LiStyle>
                    <ul>
                        <Lis />
                    </ul>
                </LiStyle>
                <hr />
                <Topic />
                <hr />
                <DownC name="12345" />
            </div>
        );
    }
}

App.childContextTypes = {
    color: PropTypes.string
};

Section.contextTypes = {
    color: PropTypes.string
};

export default App;
