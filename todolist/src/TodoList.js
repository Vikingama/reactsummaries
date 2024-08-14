import React, { Component } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
    handleChange = e => {
        this.props.changeInputValue(e.target.value);
    };
    handleButtonClick = () => {
        this.props.submitInputValue();
    };
    handleLiClick = index => {
        this.props.deleteItem(index);
    };
    render() {
        return (
            <div>
                <div>
                    <input
                        type="text"
                        value={this.props.inputValue}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleButtonClick}>submit</button>
                </div>
                <ul
                    style={{
                        listStyle: "none"
                    }}
                >
                    {this.props.list.map((item, index) => (
                        <li
                            style={{
                                cursor: "pointer"
                            }}
                            key={index}
                            onClick={this.handleLiClick.bind(null, index)}
                        >
                            {index} - {item}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
        inputValue: state.inputValue,
        list: state.list
    }),
    mapDispatchToProps = dispatch => ({
        changeInputValue(value) {
            const action = {
                type: "change_input_value",
                value
            };
            dispatch(action);
        },
        submitInputValue() {
            const action = {
                type: "submit_input_value"
            };
            dispatch(action);
        },
        deleteItem(index) {
            const action = {
                type: "delete_item",
                index
            };
            dispatch(action);
        }
    });

export default connect(
    mapStateToProps, // 将 store 中储存的应用状态转换为组件的 props
    mapDispatchToProps // 将 store.dispatch 方法映射到组件的 props
)(TodoList); // 链接 store
