import React from "react";
import PropTypes from "prop-types";

export default class Child extends React.Component {
    handleThree = () => {
        this.setState({
            age: this.state.age + 3
        });
    };
    constructor(props) {
        super(props);
        this.state = {
            age: props.age,
            foodzList: ["dumping", "pizza", "fish", "beef"],
            index: 0,
            inputValue: this.props.inputValue
        };
    }
    componentWillMount() {
        console.log(this.props);
    }
    putIn(event) {
        this.setState({
            inputValue: event.target.value
        });
    }
    feedTitle() {
        let sc = this.state,
            food = sc.foodzList[sc.index];
        this.props.changeFood(food);
        this.setState({
            index: sc.index + 1
        });
        if (sc.index === sc.foodzList.length - 1) {
            this.setState({
                index: 0
            });
        }
    }
    handleGreet() {
        this.props.greet("(⊙ˍ⊙)");
    }
    render() {
        return (
            <div>
                info: {this.props.name} | {this.state.age}
                <br />
                {this.props.hobbies.map((item, i) => (
                    <span key={i}>
                        {item}
                        &nbsp;
                    </span>
                ))}
                <br />
                {/* 接受从父节点传过来的节点 */}
                From Parent: {this.props.children}
                <br />
                <button onClick={this.handleThree}>Add three...</button>
                <br />
                {/* 子组件向父组件传值， */}
                <button onClick={this.handleGreet.bind(this)}>
                    Run my parent component fncs...
                </button>
                <br />
                {/* 同级组件通过父级组件进行通信 */}
                <button onClick={this.feedTitle.bind(this)}>
                    Change Food...
                </button>
                <br />
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={event => this.putIn(event)}
                />
            </div>
        );
    }
}

// 限制传入的 props 数据类型，类型错误会报错...
Child.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
    hobbies: PropTypes.array,
    children: PropTypes.element.isRequired,
    greet: PropTypes.func
};
