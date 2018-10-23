import React from "react";
import PropTypes from "prop-types";

export default class Child extends React.Component {
    componentWillMount() {
        console.log(this.props);
    }
    render() {
        return (
            <div>
                info: {this.props.name} | {this.props.age}
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
            </div>
        );
    }
}

// 限制传入的 props 数据类型，类型错误会报错...
Child.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    hobbies: PropTypes.array,
    children: PropTypes.element.isRequired
};
